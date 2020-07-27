import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Input, Button } from 'semantic-ui-react'
import { trackEntry, checkAddress } from '../actions'

const Header = ({ dispatch, checking, entered }) => (
    <>
        <form onSubmit={e=> {
                            e.preventDefault();
                            dispatch(checkAddress(entered))
                            }
                        }>
            <Input
                focus
                id='addressField'
                icon={checking ? 'handshake' : 'home'}
                value={entered}
                iconPosition='left'
                onChange={e=>dispatch(trackEntry(e.target.value))}
                style={{width:'350px'}}
                placeholder='Enter a valid US address...' />
            <Button 
                primary >
            Show Me
            </Button>
        </form>
    </>
)

// Header.propTypes = {
//     onSubmit: PropTypes.func.isRequired,
//     onChange: PropTypes.func.isRequired
// }

const mapStateToProps = state => {
    const { checking, entered  } = state.address

    return {
        checking,
        entered
    }
}

export default connect(mapStateToProps)(Header)