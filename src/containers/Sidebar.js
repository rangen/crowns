import React from 'react'
import { connect, useSelector, useDispatch } from 'react-redux'
import { Card, Icon } from 'semantic-ui-react'
import { acctSelected, polSelected } from '../actions'



const Sidebar = ({ polSelected, acctSelected }) => {
    
    const genAccountInfo = (accounts) => {
        if (!accounts.length) {
                return (<>No <Icon fitted name='twitter' /> Found</>)
            } else {
                
                return (
                    <>
                {accounts.map(t=> 
                    <>
                        <div>
                            <Icon fitted name='twitter' />{t.handle}
                        </div>
                    </>
                )}
                </>
            )
        }
    }

    const genCard = (obj, isSenator = false) => {
        const { candidateName, incumbent, onBallot, party, photoUrl, hasTweets, twitterAccounts, id } = obj
        
        
        let theseAccounts = [];
        if (hasTweets) {theseAccounts = [...accounts].filter(a=>twitterAccounts.includes(a.id))} // get only this POL twitterAccounts
        
        return <Card 
                fluid
                onClick={()=>polSelected({branch: (isSenator ? 'senators' : 'reps'), id: id})}
                color={party === 'DEM' ? 'blue' : 'red'}
                header={candidateName}
                // meta={isSenator ? '(Senate)' : '(House)'}
                description={genAccountInfo(theseAccounts)}
                />
    }
    const pols = useSelector(s=>s.politicians)
    const address = useSelector(s=>s.address)
    const accounts = useSelector(s=>s.twitterAccounts)

    const { reps, senators } = pols
    const { district, stateName } = address
    

    return (
        <>
            {senators && !!senators.length &&
                <>
                    <h3>{stateName + ' Senate'}</h3>
                    <hr />
                    <Card.Group>
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
                    <Card.Group>
                        {reps.map(r=>
                                genCard(r)
                            )}
                    </Card.Group>
                </>
            }
            {!reps &&
                <h3>Enter an address above to view your politicians</h3>

            }
        </>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        polSelected: e => dispatch(polSelected(e)),
        acctSelected: e => dispatch(acctSelected(e))
    }
}

export default connect(null, mapDispatchToProps)(Sidebar)