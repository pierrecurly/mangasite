import React, { Component } from 'react'
import {
    Container,
    Grid,
    Segment,
    Card,
    Header,
} from 'semantic-ui-react'

const Panel = () => (
    <Container fluid>
        <Grid padded>
            <Grid.Row>
                <Grid.Column width={12}>
                    <Grid>
                        <Grid.Row columns={5}>
                            <Grid.Column>
                                <Card
                                    style={{ display: 'inline' }}
                                    image='assets/manga/noragami.jpg'
                                    href='#card-example-link-card'
                                    header='Noragami'
                                    meta='Action, Adventure'
                                    description='asdasdasdasd....'
                                />
                            </Grid.Column>
                            <Grid.Column>
                                <Card
                                    style={{ display: 'inline' }}
                                    image='assets/manga/onepiece.jpg'
                                    href='#card-example-link-card'
                                    header='One Piece'
                                    meta='Action, Adventure'
                                    description='asdasdasdasd....'
                                />
                            </Grid.Column>
                            <Grid.Column>
                                <Card
                                    style={{ display: 'inline' }}
                                    image='assets/manga/bleach.jpg'
                                    href='#card-example-link-card'
                                    header='Bleach'
                                    meta='Action, Adventure'
                                    description='asdasdasdasd....'
                                />
                            </Grid.Column>
                            <Grid.Column>
                                <Card
                                    style={{ display: 'inline' }}
                                    image='assets/manga/overlord.jpg'
                                    href='#card-example-link-card'
                                    header='Overlord'
                                    meta='Action, Adventure'
                                    description='asdasdasdasd....'
                                />
                            </Grid.Column>
                            <Grid.Column>
                                <Card
                                    style={{ display: 'inline' }}
                                    image='assets/manga/shokugeki.jpg'
                                    href='#card-example-link-card'
                                    header='Shokugeki No Soma'
                                    meta='Action, Adventure'
                                    description='asdasdasdasd....'
                                />
                            </Grid.Column>
                        </Grid.Row>

                        <Grid.Row columns={5}>
                            <Grid.Column>
                                <Card
                                    style={{ display: 'inline' }}
                                    image='assets/manga/noragami.jpg'
                                    href='#card-example-link-card'
                                    header='Noragami'
                                    meta='Action, Adventure'
                                    description='asdasdasdasd....'
                                />
                            </Grid.Column>
                            <Grid.Column>
                                <Card
                                    style={{ display: 'inline' }}
                                    image='assets/manga/onepiece.jpg'
                                    href='#card-example-link-card'
                                    header='One Piece'
                                    meta='Action, Adventure'
                                    description='asdasdasdasd....'
                                />
                            </Grid.Column>
                            <Grid.Column>
                                <Card
                                    style={{ display: 'inline' }}
                                    image='assets/manga/bleach.jpg'
                                    href='#card-example-link-card'
                                    header='Bleach'
                                    meta='Action, Adventure'
                                    description='asdasdasdasd....'
                                />
                            </Grid.Column>
                            <Grid.Column>
                                <Card
                                    style={{ display: 'inline' }}
                                    image='assets/manga/overlord.jpg'
                                    href='#card-example-link-card'
                                    header='Overlord'
                                    meta='Action, Adventure'
                                    description='asdasdasdasd....'
                                />
                            </Grid.Column>
                            <Grid.Column>
                                <Card
                                    style={{ display: 'inline' }}
                                    image='assets/manga/shokugeki.jpg'
                                    href='#card-example-link-card'
                                    header='Shokugeki No Soma'
                                    meta='Action, Adventure'
                                    description='asdasdasdasd....'
                                />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Grid.Column>
                <Grid.Column width={4}>
                    <Segment>
                        <Header as={'h3'}>
                            Top Manga
                        </Header>
                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum
                    </Segment>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </Container>
);
export default class MainPanel extends Component {

    render() {
        return (
            <Panel />
        )
    }
}