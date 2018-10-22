import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeSharp from '@material-ui/icons/HomeSharp';
import ViewListSharp from '@material-ui/icons/ViewListSharp';

export const mainListItems = (
    <div>
        <ListItem button>
            <ListItemIcon>
                <HomeSharp />
            </ListItemIcon>
            <ListItemText primary="Home" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <ViewListSharp />
            </ListItemIcon>
            <ListItemText primary="Manga list" />
        </ListItem>
    </div>
);