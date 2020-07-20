import React, { PureComponent } from 'react'
import { Input, Button } from 'semantic-ui-react'

export default class Header extends PureComponent {
    render() {
        return (
            <>
                <form onSubmit={this.props.search}>
                    <Input
                        focus
                        id='addressField'
                        icon='home'
                        iconPosition='left'
                        style={{width:'350px'}}
                        placeholder='Enter a valid US address...' />
                    <Button 
                        primary >
                    Show Me
                    </Button>
                </form>
            </>
        )
    }
}
