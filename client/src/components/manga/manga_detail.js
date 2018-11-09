import React, { Component } from 'react';
import {
    Container,
    Grid,
    Card,
    Header,
} from 'semantic-ui-react';
export default class MangaDetail extends Component {

    render() {
        return (
            <Container style={{ background: '#f5f6fc' }} fluid>
                <Container style={{ background: '#fff' }}>
                    <Grid padded>
                        <Grid.Row>
                            <Grid.Column width={5}>
                                <Card
                                    style={{ display: 'inline' }}
                                    image='assets/manga/noragami.jpg'
                                />
                            </Grid.Column>
                            <Grid.Column width={11}>
                                <Header as='h1'>
                                    Noragami
                                </Header>
                                <p><b>Genre: </b>asdfghjkl;...</p>
                                <p><b>Author: </b>Adachitoka</p>
                                <p><b>Status: </b>Completed</p>
                                <p>Yato is a minor god whose dream is to have a lot of followers worshiping him and praying to him. Unfortunately, his dream is far from coming true since he doesn't even have a single shrine dedicated to him. To make things worse, the only partner he had to help him solve people's problems, had just quit the job.
                                His godly existence and luck just might change after he stumbles upon Iki Hiyori and saves her life—a feat which also leaves her in quite a predicament as she is stuck with him until her problem gets resolved. Together with Hiyori and his new partner/weapon Yukine, Yato will do everything he can to gain fame, recognition and just maybe, one shrine dedicated to him.</p>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>

                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </Container>
        )
    }
}