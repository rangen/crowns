import React, { PureComponent } from 'react'
import { Card } from 'semantic-ui-react'

export default class Sidebar extends PureComponent {
    
    getTweets = (obj, isSenator) => {
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

    genCard = (obj, isSenator = false) => {
        const { candidateName, incumbent, onBallot, party, photoUrl, hasTweets } = obj.attributes
        let tweetInfo = 'none captured'

        if (hasTweets) {
            tweetInfo = this.getTweets(obj, isSenator)
            debugger
        }
        return <Card 
                fluid
                color={party === 'DEM' ? 'blue' : 'red'}
                header={candidateName}
                meta={isSenator ? '(Senate)' : '(House)'}
                description={`Tweets: ${hasTweets ? tweetInfo.count : tweetInfo}`}
                />
    }
    
    render() {
        if (this.props.senators) {
        return (
            <>
                <Card.Group>
                    {this.props.reps.data.map(r=>
                        this.genCard(r)
                        )}
                </Card.Group>
                <Card.Group>
                    {this.props.senators.data.map(r=>
                        this.genCard(r, true)
                        )}
                </Card.Group>
            </>
        )
        } else if (this.props.reps) {
            return (
                <>
                    <Card.Group>
                        {this.props.reps.data.map(r=>
                            this.genCard(r)
                            )}
                    </Card.Group>
                </>
            )
        } else {
            return (
                <>
                </>
            )
        }
    }
}