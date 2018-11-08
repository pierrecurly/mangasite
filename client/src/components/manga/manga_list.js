import React, { Component } from 'react';
import { 
    Container, 
    Grid, 
    Card,
    Header
} from 'semantic-ui-react';

export default class MangaList extends Component {

    render() {
        return (
            <Container>
                <Grid padded>
                    <Grid.Row>
                        <Grid.Column width={5}>
                            <Card
                                style={{ display: 'inline' }}
                                image='assets/manga/noragami.jpg'
                            />
                        </Grid.Column>
                        <Grid.Column width={11}>
                            <Header as={'h2'}>
                                Noragami
                            </Header>
                            <p>asdfghjkl;...</p>
                        </Grid.Column>
                    </Grid.Row>

                </Grid>
            </Container>
        )
    }
}