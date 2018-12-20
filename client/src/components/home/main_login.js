import React from 'react';
import { Button, Header, Modal, Icon, Image } from 'semantic-ui-react';

const padding = {
    margin: '60px auto 10px',
}

const buttonStyle = {
    position: 'relative',
    margin: '20px auto',
    display: 'block'
}

const modalStyle = {
    width: '470px'
}

const divStyle = {
    margin: '50px'
}

const LoginModal = () => (
    <Modal centered={false} style={modalStyle} size='tiny' 
        trigger={
            <div>
                <Button color='blue' size='huge' icon='user' basic circular></Button>
            </div>
        }>
        <Modal.Content>
            <Modal.Description style={padding}>
                <Header textAlign='center' as='h1'>
                    <Header.Content>
                        <Image textAlign='center' circular src='assets/panda.jpg' size={'small'} />
                        <Header.Subheader >
                            Read your favorite<br />
                            manga here
                        </Header.Subheader>
                    </Header.Content>
                </Header>
            </Modal.Description>
            <div style={divStyle}>
                <Button style={buttonStyle} size='big' color='facebook' basic circular fluid>
                    <Header as='h6'>
                        <Icon float='left' name='facebook' />
                        LOGIN WITH FACEBOOK
                    </Header>
                </Button>
                <Button style={buttonStyle} size='big' color='google' circular basic fluid>
                    <Header as='h6'>
                        <Icon float='left' name='google' />
                        LOGIN WITH GOOGLE
                    </Header>
                </Button>
                <Button style={buttonStyle} size='big' color='twitter' circular basic fluid>
                    <Header as='h6'>
                        <Icon float='left' name='twitter' />
                        LOGIN WITH TWITTER
                    </Header>
                </Button>
                <center>Don't have an account? Sign-up now!</center>
            </div>
        </Modal.Content>
    </Modal>
)

export default LoginModal