import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    Segment,
    Header,
    Table,
    Image,
} from 'semantic-ui-react'

const TopPanel = (props) => {

    return props.mangaTop.map((manga) => (
        <Table.Row key={manga._id}>
            <Table.Cell>
                <Header as={Link} to={`/manga/${manga.name}`} image>
                    <Image src={`assets/manga/${manga.name}.jpg`} rounded size='massive' />
                    <Header.Content>
                        {manga.title}
                        <Header.Subheader>Chapter 100</Header.Subheader>
                    </Header.Content>
                </Header>
            </Table.Cell>
        </Table.Row>
    ));
}

class MangaTop extends Component {

    render() {
        return (
            <Segment>
                <Table basic='very' celled collapsing>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Top Manga</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        <TopPanel mangaTop={this.props.mangaTop}/>
                    </Table.Body>
                </Table>
            </Segment>
        );
    }
}

export default MangaTop;