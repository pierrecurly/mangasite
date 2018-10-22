import React, { Component } from 'react';
import Manga from './manga';

class MangaPanel extends Component {

    mangaClick() {
        // Call api and redirect to manga page
        return true;
    }

    render() {
        var data = {
            title: 'Best Manga',
            author: 'pierrenanterme',
            chapter: '1'
        };

        return (
            <Manga data-list={data} onClick={this.mangaClick()} />
        );
    }
}

export default MangaPanel;