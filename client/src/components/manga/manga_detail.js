import React, { Component } from 'react';
import axios from 'axios';
import {
    Container,
    Grid,
    Card,
    Header,
} from 'semantic-ui-react';

// const containerShadow = {
//     backgroundColor: '#fff',
//     border: '1px solid #ddd',
//     boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',
// }
export default class MangaDetail extends Component {
    name = this.props.match.params.title;

    state = {
    }

    componentDidMount() {
        axios.post(`http://localhost:3001/manga`, {
            name: this.name
        }).then((res) => {
            this.setState({ ...res.data});
        }).catch((err) => {
            console.log(err);
        })
    }

    render() {
        
        return (this.state.hasOwnProperty('mangaDetail')) ? (
            <div style={{ background: '#f5f6fc' }}>
                <Container>
                    <Grid columns={2}>
                        <Grid.Row>
                            <Grid.Column align='right' width={6}>
                                <Card
                                    style={{ display: 'inline' }}
                                    image={`assets/manga/${this.state.mangaDetail.name}.jpg`}
                                />
                            </Grid.Column>
                            <Grid.Column width={10}>
                                <Header size='huge'>{this.state.mangaDetail.title}</Header>
                                {this.state.mangaGenre.map((mangaGenre, i) => {
                                    return (<p key={mangaGenre._id}>{mangaGenre.genre.genre}</p>)
                                })}
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
                <Container>

                </Container>
            </div>
        ) : <div></div>
    }
}