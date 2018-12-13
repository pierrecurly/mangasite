import React, { Component } from 'react'
import axios from 'axios'
import MainCarousel from './manga_carousel'
import TopManga from './manga_top'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import {
    Container,
    Grid,
    Card,
    Divider,
} from 'semantic-ui-react'

const UpdatePanel = () => (
    <div>
        <MainCarousel />
        <Container fluid>
            <Divider horizontal>Manga Updates</Divider>
            <Grid padded>
                <Grid.Row>
                    <Grid.Column width={12}>
                        <Grid>
                            <Grid.Row columns={5}>
                                <Grid.Column>
                                    <Card
                                        style={{ display: 'inline' }}
                                        image='assets/manga/noragami.jpg'
                                        as={Link}
                                        to={`/manga/${'123'}`}
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
                        <TopManga />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    </div>
);

class MangaUpdates extends Component {

    componentDidMount() {
        const { onLoad } = this.props;

        axios.post('http://localhost:3001', {

        }).then(res => {
            onLoad(res.data);
            console.log(res);
        });
    }

    render() {
        const { mangaList } = this.props;

        return (
            <UpdatePanel mangaList={mangaList}/>
        )
    }
}

const mapStateToProps = state => ({
    mangaList: state.mangaUpdate.mangaList,
});

const mapDispatchToProps = dispatch => ({
    onLoad: data => dispatch({ type: 'PAGE_LOADED', data }),
    onDelete: id => dispatch({ type: 'DELETE_MANGA', id }),
    setEdit: mangaList => dispatch({ type: 'SET_EDIT', mangaList }),
});

export default connect(mapStateToProps, mapDispatchToProps)(MangaUpdates);