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

const UpdatePanel = (props) => {

    return props.mangaList.map((manga, i) => (
        <Grid.Column key={manga._id}>
            <Card
                style={{ display: 'inline' }}
                image={`assets/manga/${manga.name}.jpg`}
                as={Link}
                to={`/manga/${manga.name}`}
                header={manga.title}
                meta='Action, Adventure'
                description={manga.summary}
            />
        </Grid.Column>
    ));
}

class MangaUpdates extends Component {

    componentDidMount() {
        const { onLoad } = this.props;
        axios.get('http://localhost:3001/', {
        }).then(res => {
            onLoad(res.data);
            console.log(res);
        });
    }

    render() {
        const { mangaTop, mangaList } = this.props;

        return (
            <div>
                <MainCarousel />
                <Container fluid>
                    <Divider horizontal>Manga Updates</Divider>
                    <Grid columns={2} padded doubling>
                        <Grid.Column width={12}>
                            <Grid columns={5} doubling>
                                <Grid.Row>
                                    <UpdatePanel mangaList={mangaList} />
                                </Grid.Row>
                            </Grid>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <TopManga mangaTop={mangaTop}/>
                        </Grid.Column>
                    </Grid>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    mangaList: state.mangaUpdate.mangaList,
    mangaTop: state.mangaUpdate.mangaTop,
});

const mapDispatchToProps = dispatch => ({
    onLoad: data => dispatch({ type: 'PAGE_LOADED', data })
    // onDelete: id => dispatch({ type: 'DELETE_MANGA', id }),
    // setEdit: mangaList => dispatch({ type: 'SET_EDIT', mangaList }),
});

export default connect(mapStateToProps, mapDispatchToProps)(MangaUpdates);