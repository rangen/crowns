import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Input, Button, Menu, Container } from 'semantic-ui-react'
import { Dialog, DialogTitle, DialogContent } from '@material-ui/core'
import { trackEntry, checkAddress, RESET_ADDRESS, randomAddress } from '../actions'

const Header = () => {
    const dispatch = useDispatch()
    const { checking, entered, validAddress, addressError, normy, district, primaryMsg, cookIndex } = useSelector(s=>s.address)

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
                    icon='home'
                    value={entered}
                    error={addressError}
                    iconPosition='left'
                    onChange={e=>dispatch(trackEntry(e.target.value))}
                    style={{width:'350px'}}
                    placeholder='Enter a valid US address...' />
                <Button basic
                    primary >
                Check Address
                </Button>
            </form>
            <Button
                basic
                primary 
                onClick={()=>dispatch(randomAddress())}>
                Random District
            </Button>
        </Menu>
        }
        {checking && 
            <Dialog
                open={true}
            >
            <DialogTitle>
            <DialogContent>
                Searching for address....
            </DialogContent>
            </DialogTitle>
        </Dialog>
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