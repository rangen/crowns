import React from 'react'
import { connect, useSelector } from 'react-redux'
import { Card, Icon, Button } from 'semantic-ui-react'
import { polSelected, returnToMap } from '../actions'



const Sidebar = ({ polSelected, returnToMap }) => {
    
    const genAccountInfo = (accounts) => {
        if (!accounts.length) {
                return (<>No <Icon fitted name='twitter' /> Found</>)
            } else {
                
                return (
                    <>
                {accounts.map(t=> 
                    <>
                        <div>
                            <Icon name='twitter' />{t.handle}
                        </div>
                    </>
                )}
                </>
            )
        }
    }

    const genCard = (obj, isSenator = false) => {
        const { candidateName, incumbent, party, hasTweets, twitterAccounts, id } = obj
        
        
        let theseAccounts = [];
        if (hasTweets) {theseAccounts = [...accounts].filter(a=>twitterAccounts.includes(a.id))} // get only this POL twitterAccounts
        
        return <Card 
                
                onClick={()=>polSelected({branch: (isSenator ? 'senators' : 'reps'), id: id})}
                color={party === 'DEM' ? 'blue' : party === 'REP' ? 'red' : 'black'}
                header={candidateName}
                meta={incumbent === 'I' ? (<div><Icon color='yellow' name='chess queen' />Incumbent</div>) : (<div><Icon color='black' name='chess pawn' />Challenger</div>)}
                description={genAccountInfo(theseAccounts)}
                extra={party === 'DEM' ? 'Democrat' : party === 'REP' ? 'Republican' : party}
                />
    }
    const pols = useSelector(s=>s.politicians)
    const address = useSelector(s=>s.address)
    const accounts = useSelector(s=>s.twitterAccounts)
    const view = useSelector(s=>s.view.mainContainer)

    const { reps, senators } = pols
    const { district, stateName } = address
    

    return (
        <>
            {view === 'politician' &&   
                <Button primary basic onClick={returnToMap}>Return to Map View</Button>
            }
            {senators && !!senators.length &&
                <>
                    <h3>{stateName + ' Senate'}</h3>
                    <hr />
                    <Card.Group centered>
                        {senators.map(r=>
                                genCard(r, true)
                            )}
                    </Card.Group>
                </>
            }
            {reps && !! reps.length &&
                <>
                    <h3>{district}</h3>
                    <hr />
                    <Card.Group centered>
                        {reps.map(r=>
                                genCard(r)
                            )}
                    </Card.Group>
                </>
            }
            {!reps &&
                <>
                    <img alt='pile of crowns' height='275px' src='crowns.jpeg'></img>
                    <h3>Pile of Crowns</h3>
                    <h4>a flatiron project</h4>
                    <h5>Don Mallory</h5>
                </>
            }
        </>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        polSelected: e => dispatch(polSelected(e)),
        returnToMap: e => dispatch(returnToMap())
    }
}

export default connect(null, mapDispatchToProps)(Sidebar)