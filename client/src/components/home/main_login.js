import React, { Component} from 'react';
import firebase from 'firebase'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import { Button, Header, Modal, Image, Dropdown } from 'semantic-ui-react';
import { connect } from 'react-redux';

const padding = {
    margin: '60px auto 10px',
}

// const buttonStyle = {
//     position: 'relative',
//     margin: '20px auto',
//     display: 'block'
// }

const modalStyle = {
    width: '470px'
}

const divStyle = {
    margin: '50px'
}

firebase.initializeApp({
    apiKey: 'AIzaSyCqxKNzQOOJFKfuoQsN35LUtt2B1fuPjj0',
    authDomain: 'mangapanda-auth.firebaseapp.com'
});


const User = (props) => {
    const user = props.user;

    const options = [
        { key: 'user', value: 'user', text: 'Account', icon: 'user' },
        { key: 'settings', value: 'settings', text: 'Settings', icon: 'settings' },
        { key: 'sign-out', value: 'sign-out', text: 'Sign Out', icon: 'sign out' },
    ];

    const trigger = (user) => {
        console.log(user)
        return (
            <Header as='h1'>
                <Image size='large' circular src={user.photoURL} />
            </Header>
        )
    };

    const handleClick = (e) => {
        const value = e.target.textContent;

        if (value === "Sign Out") {
            firebase.auth().signOut();
        }
    }

    return (
        <Dropdown onChange={handleClick} trigger={trigger(user)} options={options} icon={null}/>
    )
}

class MainLogin extends Component {

    uiConfig = {
        signInFlow: 'popup',
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        ],
        callbacks: {
            signInSuccess: () => false
        }
    };

    componentDidMount() {
        const { onLogin, onLogout } = this.props;

        firebase.auth().onAuthStateChanged(user => {
            console.log(user);

            (user != null) ? onLogin(user) : onLogout(user)
        })
    }

    componentWillUnmount() {
        this.unregisterAuthObserver();
    }

    render() {
        const { isSignedIn, user } = this.props;

        return isSignedIn ? <User user={user}/> : (
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
                                <Image circular src='assets/panda.jpg' size={'small'} />
                                <Header.Subheader >
                                    Read your favorite<br/>
                                    manga here
                            </Header.Subheader>
                            </Header.Content>
                        </Header>
                    </Modal.Description>
                    <div style={divStyle}>
                        <StyledFirebaseAuth
                            uiConfig={this.uiConfig}
                            firebaseAuth={firebase.auth()}
                        />
                        {/* <Button style={buttonStyle} size='big' color='facebook' basic circular fluid>
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
                    </Button> */}
                        <center>Don't have an account? Sign-up now!</center>
                    </div>
                </Modal.Content>
            </Modal> );
    }
    
}


const mapStateToProps = state => ({
    user: state.user.user,
    isSignedIn: state.user.isSignedIn
});

const mapDispatchToProps = dispatch => ({
    onLogin: data => dispatch({ type: 'USER_LOGIN', data }),
    onLogout: data => dispatch({ type: 'USER_LOGOUT', data })
});

export default connect(mapStateToProps, mapDispatchToProps)(MainLogin)