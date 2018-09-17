import React, { Component } from 'react';
import Link from 'gatsby-link';
import Markdown from 'react-markdown';
import Helmet from 'react-helmet';
import { Grid, Typography, CardContent, Card, List, ListItem, ListItemText, ListSubheader, Divider } from 'material-ui';
import gql from 'graphql-tag';
import styled from '../utils/styled';
import Button from '../components/Button';
import Section from '../components/Section';
import SubmissionForm from '../components/SubmissionForm';

const searchMessage = `
Our library of mosaics is just getting started. If you don't see what you're looking for you can [create a new mosiac here](/add). No need to add a lot of content, simply providing a title for a new mosaic will help determine which mosaic we work on next.

Interested in knowing when new mosaics come out? [Enter your email here](/email) and we'll let you know.
`;

const CurrentMosaicList = ({ data }) => {
  return(
    <List component="nav" style={{
      borderBottomColor: ""
    }} >
      <ListSubheader component="div">Current Mosaics</ListSubheader>
      <Divider />
      <ListItem button component="a" href="/post/alphabet">
        <ListItemText primary="Aphabet Inc." />
      </ListItem>
      <Divider />
      <ListItem button component="a" href="/post/box">
        <ListItemText primary="Box Inc." />
      </ListItem>
      <Divider />
      <ListItem button component="a" href="/post/zillow">
        <ListItemText primary="Tesla Inc." />
      </ListItem>
      <Divider />
      <ListItem button component="a" href="/post/zillow">
        <ListItemText primary="Zillow Group Inc." />
      </ListItem>
      <Divider />
      <ListItem button component="a" href="/add">
        <ListItemText primary="Create New Mosaic" />
      </ListItem>
      <Divider />
    </List>
  );
};

class SearchPage extends Component {
  componentDidMount() {
    mixpanel.track("Search Page Visited");
  }

  render() {
    return (
      <Section>
        <Grid item xs={12} sm={8}>
          <Helmet title="Mosaic Search Results" />
          <Card>
            <CardContent>
              <Typography variant="title" component="h2">
                Mosaic Library
              </Typography>
              <Typography component={Markdown} source={searchMessage} variant="subheading"/>
            </CardContent>
          </Card>
          <CurrentMosaicList></CurrentMosaicList>
        </Grid>
      </Section>
    );
  }
}

export default SearchPage;
