import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
    Segment,
    Header,
    Table,
    Image,
} from 'semantic-ui-react'

const TopPanel = () => (
    <Table basic='very' celled collapsing>
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell>Top Manga</Table.HeaderCell>
            </Table.Row>
        </Table.Header>

        <Table.Body>
            <Table.Row>
                <Table.Cell>
                    <Header as='h4' image>
                        <Image src='assets/manga/noragami.jpg' rounded size='massive' />
                        <Header.Content as={Link} to={`/manga/${'123'}`}>
                            Noragami
                            <Header.Subheader>Chapter 100</Header.Subheader>
                        </Header.Content>
                    </Header>
                </Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell>
                    <Header as='h4' image>
                        <Image src='assets/manga/noragami.jpg' rounded size='massive' />
                        <Header.Content as={Link} to={`/manga/${'123'}`}>
                            Noragami
                            <Header.Subheader>Chapter 100</Header.Subheader>
                        </Header.Content>
                    </Header>
                </Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell>
                    <Header as='h4' image>
                        <Image src='assets/manga/noragami.jpg' rounded size='massive' />
                        <Header.Content as={Link} to={`/manga/${'123'}`}>
                            Noragami
                            <Header.Subheader>Chapter 100</Header.Subheader>
                        </Header.Content>
                    </Header>
                </Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell>
                    <Header as='h4' image>
                        <Image src='assets/manga/noragami.jpg' rounded size='massive' />
                        <Header.Content as={Link} to={`/manga/${'123'}`}>
                            Noragami
                            <Header.Subheader>Chapter 100</Header.Subheader>
                        </Header.Content>
                    </Header>
                </Table.Cell>
            </Table.Row>
        </Table.Body>
    </Table>
    );

class MangaTop extends Component {

    render() {
        return (
            <Segment>
                <TopPanel />
            </Segment>
        );
    }
}

const mapStateToProps = state => ({
    mangaList: state.mangaTop.mangaList,
});

const mapDispatchToProps = dispatch => ({
    onLoad: data => dispatch({ type: 'PAGE_LOADED', data }),
});

export default connect(mapStateToProps, mapDispatchToProps)(MangaTop);