import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Input, Button, Menu, Container } from 'semantic-ui-react'
import { trackEntry, checkAddress, RESET_ADDRESS } from '../actions'

const Header = () => {
    const dispatch = useDispatch()
    const { checking, entered, validAddress, normy, district, primaryMsg, cookIndex } = useSelector(s=>s.address)

    return (
        <>
        {!validAddress &&
        <Menu fixed='top'>
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
                <Button basic
                    primary >
                Show Me
                </Button>
            </form>
        </Menu>
        }
        {validAddress &&
            <Menu fixed='top'>
                <Button onClick={e=>dispatch({type: RESET_ADDRESS})} basic primary>Enter New Address</Button>
                <Container>{`${normy} is in ${district} [${cookIndex}] and the ${primaryMsg}`}</Container>
            </Menu>
        }
        </>
    )
}

export default Header