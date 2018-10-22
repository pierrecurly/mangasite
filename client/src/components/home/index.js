import React from 'react';
import { Button, SideNavItem, SideNav } from 'react-materialize';

export default
    <SideNav
        trigger={<Button>I Eat Manga</Button>}
        options={{ closeOnClick: true }}
    >
        <SideNavItem userView
            user={{
                background: 'img/office.jpg',
                image: 'img/yuna.jpg',
                name: 'John Doe',
                email: 'jdandturk@gmail.com'
            }}
        />
        <SideNavItem href='#!icon' icon='cloud'>Home</SideNavItem>
        <SideNavItem href='#!second'>Manga list</SideNavItem>
        <SideNavItem divider />
        <SideNavItem subheader>Others</SideNavItem>
        <SideNavItem waves href='#!third'>Contact Us</SideNavItem>
    </SideNav>;