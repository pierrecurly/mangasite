import React, { Component } from 'react';
import {
    Container,
    Grid,
    Card,
    Header,
    Breadcrumb,
} from 'semantic-ui-react';

const containerShadow = {
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',
}
export default class MangaDetail extends Component {

    render() {
        return (
            <div style={{ background: '#f5f6fc' }}>
                <Container>
                    <Grid columns={2}>
                        <Grid.Row>
                            <Grid.Column align='right' width={6}>
                                <Card
                                    style={{ display: 'inline' }}
                                    image='assets/manga/noragami.jpg'
                                />
                            </Grid.Column>
                            <Grid.Column width={10}>
                                <Header size='huge'>Noragami</Header>
                                <p>Action</p>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
                <Container>

                </Container>
            </div>
        )
    }
}