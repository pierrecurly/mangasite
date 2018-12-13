import React from 'react'
import {
    Segment,
    List,
    Container,
    Divider,
    Grid,
    Header,
    Image,
} from 'semantic-ui-react';

export default () => (
    <Segment inverted style={{ padding: '4em 0em' }} vertical>
        <Container textAlign='center'>
            <Grid columns={1} divided stackable inverted>
                <Grid.Row>
                    <Grid.Column>
                        <Header inverted as='h4' content='Footer Header' />
                        <p>
                            asdfghjkl;.....
                        </p>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <Divider inverted section />
            <Image src='/logo.png' centered size='mini' />
            <List horizontal inverted divided link size='small'>
                <List.Item as='a' href='#'>
                    Site Map
                            </List.Item>
                <List.Item as='a' href='#'>
                    Contact Us
                            </List.Item>
                <List.Item as='a' href='#'>
                    Terms and Conditions
                            </List.Item>
                <List.Item as='a' href='#'>
                    Privacy Policy
                            </List.Item>
            </List>
        </Container>
    </Segment>
);