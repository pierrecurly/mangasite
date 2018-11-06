import _ from 'lodash'
import React, { Component } from 'react'
import MainPanel from './main_panel'
import MainCarousel from './main_slider'

import {
    Container,
    Divider,
    Button,
    Grid,
    Header,
    Icon,
    Image,
    List,
    Menu,
    Segment,
    Visibility,
} from 'semantic-ui-react'
  
const menuStyle = {
    border: 'none',
    borderRadius: 0,
    boxShadow: 'none',
    marginBottom: '1em',
    marginTop: '2em',
    transition: 'box-shadow 0.5s ease, padding 0.5s ease',
}

const fixedMenuStyle = {
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',
    padding: '1em',
}
 

const Footer = () => (
        <Segment inverted style={{ margin: '5em 0em 0em', padding: '5em 0em' }} vertical>
            <Container textAlign='center'>
                <Grid columns={1} divided stackable inverted>
                    <Grid.Row>
                        <Grid.Column>
                            <Header inverted as='h4' content='Footer Header' />
                            <p>
                                asdfghjkl;.....
                            </p>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Divider inverted section />
                <Image src='/logo.png' centered size='mini' />
                <List horizontal inverted divided link size='small'>
                    <List.Item as='a' href='#'>
                        Site Map
                            </List.Item>
                    <List.Item as='a' href='#'>
                        Contact Us
                            </List.Item>
                    <List.Item as='a' href='#'>
                        Terms and Conditions
                            </List.Item>
                    <List.Item as='a' href='#'>
                        Privacy Policy
                            </List.Item>
                </List>
            </Container>
        </Segment>
    );

export default class Main extends Component {
    state = {
        menuFixed: false,
        overlayFixed: false,
    }

    handleOverlayRef = (c) => {
        const { overlayRect } = this.state

        if (!overlayRect) {
            this.setState({ overlayRect: _.pick(c.getBoundingClientRect(), 'height', 'width') })
        }
    }

    stickOverlay = () => this.setState({ overlayFixed: true })

    stickTopMenu = () => this.setState({ menuFixed: true })

    unStickOverlay = () => this.setState({ overlayFixed: false })

    unStickTopMenu = () => this.setState({ menuFixed: false })

    render() {
        const { menuFixed} = this.state

        return (
            <div>
                <style>{`
                    html, body {
                        background: #fff;
                    }
                    `}
                </style>

                <Container fluid style={{ marginTop: '2em' }}>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={2}>
                                <Image circular src='assets/panda.jpg' size={'small'} />
                            </Grid.Column>
                            <Header as='h1'>
                                <Header.Content>
                                    Manga Panda
                            <Header.Subheader>Read your favorite manga right here.</Header.Subheader>
                                </Header.Content>
                            </Header>
                        </Grid.Row>
                    </Grid>
                </Container>

                <Visibility
                    onBottomPassed={this.stickTopMenu}
                    onBottomVisible={this.unStickTopMenu}
                    once={false}
                >
                    <Menu
                        borderless
                        fixed={menuFixed && 'top'}
                        style={menuFixed ? fixedMenuStyle : menuStyle}
                    >
                        <Container style={{width: '79%'}}>
                            <Menu.Item as='a' header>
                                <Icon name='home'/>
                                Panda
                            </Menu.Item>
                            <Menu.Item as='a'>
                                <Icon name='sort descending'/>Browse
                            </Menu.Item>
                            <Menu.Item as='a'>
                                <Icon name='search'/>Search
                            </Menu.Item>
                            <Menu.Menu position='right'>
                                <Button basic color='blue'>Login</Button>
                            </Menu.Menu>
                        </Container>
                    </Menu>
                </Visibility>
                <Divider/>

                {/* Main Carousel */}
                <MainCarousel />
                
                {/* Main Body */}
                <Container style={{ background: '#f5f6fc'}} fluid>
                    <Divider horizontal>Manga Updates</Divider>
                    <MainPanel />
                </Container>

                {/* Main Footer */}
                <Footer />
            </div>
        )
    }
}