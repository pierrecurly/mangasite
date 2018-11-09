import React, { Component } from 'react';
import { 
    Container, 
    Grid, 
    Card,
    Header,
} from 'semantic-ui-react';

const containerShadow = {
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',
}
export default class MangaList extends Component {

    render() {
        return (
            <Container style={{ background: '#f5f6fc' }} fluid>
                <Container style={containerShadow} padded>
                    
                </Container>
            </Container>
        )
    }
}