import React from 'react'
import { connect } from 'react-redux'
import { Card } from 'semantic-ui-react'

const getTweets = (obj, isSenator) => {
    const { id } = obj
    const included = (isSenator ? this.props.senators.included : this.props.reps.included)
    const accountIDs = obj.relationships.twitterAccounts.data.map(a=>a.id)
    const accounts = accountIDs.map(acc=>included.find(j=>j.id===acc).attributes)
    const tweetCount = accounts.reduce(
        (acc, cur) => acc + cur.tweetCount, 0
    )
    const tweetIDs = accounts[0].tweets
    return {
        count: tweetCount,
        tweets: tweetIDs
    }
}

const genCard = (obj, isSenator = false, onClick) => {
    const { candidateName, incumbent, onBallot, party, photoUrl, hasTweets, twitterAccounts } = obj
    let tweetInfo = 'none captured'
    
    return <Card 
            fluid
            onClick={(e)=>onClick(e)}
            color={party === 'DEM' ? 'blue' : 'red'}
            header={candidateName}
            meta={isSenator ? '(Senate)' : '(House)'}
            description={`# of TwitterAccounts: ${twitterAccounts.length}`}
            />
}

const Sidebar = ({ senators, reps, onPickPol }) => (
    <>
        {senators &&
            <Card.Group>
                {senators.map(r=>
                        genCard(r, true, onPickPol)
                    )}
            </Card.Group>
        }
        {reps &&
            <Card.Group>
                {reps.map(r=>
                        genCard(r)
                    )}
            </Card.Group>
        }
        {!reps &&
            <h3>Enter an address above to view your politicians</h3>

        }
    </>
)

const mapStateToProps = state => {
    const { senators, reps } = state.politicians
    return {
        senators,
        reps
    }
}

export default connect(mapStateToProps)(Sidebar)