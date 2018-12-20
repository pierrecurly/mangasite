import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import LoginModal from './main_login'
import {
    Container,
    Divider,
    Grid,
    Header,
    Icon,
    Image,
    Menu,
    Visibility,
    Dropdown,
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

export default class Main extends Component {
    state = {
        menuFixed: false,
        overlayFixed: false,
    }

    stickTopMenu = () => this.setState({ menuFixed: true })

    unStickTopMenu = () => this.setState({ menuFixed: false })

    render() {
        const { menuFixed } = this.state
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
                        fixed={menuFixed ? 'top' : ''}
                        style={menuFixed ? fixedMenuStyle : menuStyle}
                    >
                        <Container style={{width: '79%'}}>
                            <Menu.Item as={Link} to='/' header>
                                <Icon name='home'/>
                                Panda
                            </Menu.Item>
                            <Menu.Item as='a'>
                                <Dropdown text='Browse' icon='sort descending' floating labeled className='icon'>
                                    <Dropdown.Menu>
                                        <Dropdown.Header icon='tags' content='Filter by genre' />
                                        <Dropdown.Divider />
                                        <Dropdown.Item icon='attention' text='Adventure' />
                                        <Dropdown.Item icon='comment' text='Action' />
                                        <Dropdown.Item icon='conversation' text='Romance' />
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Menu.Item>
                            <Menu.Item as='a'>
                                <Icon name='search'/>Search
                            </Menu.Item>
                            <Menu.Menu position='right'>
                                <LoginModal />
                            </Menu.Menu>
                        </Container>
                    </Menu>
                </Visibility>
                <Divider/>
            </div>
        )
    }
}