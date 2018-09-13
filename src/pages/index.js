import React, { Component } from 'react';
import Link from 'gatsby-link';
import Markdown from 'react-markdown';
import Helmet from 'react-helmet';
import { Grid, Typography, Paper, List, ListItem, ListItemText, ListSubheader, Divider, Card, CardContent } from 'material-ui';
import gql from 'graphql-tag';
import styled from '../utils/styled';
import Button from '../components/Button';
import Section from '../components/Section';

const TrendingList = ({ data }) => {
  return(
    <List component="nav" style={{
      borderBottomColor: ""
    }} >
      <ListSubheader component="div">Trending Mosaics</ListSubheader>
      <Divider />
      <ListItem button component="a" href="/post/zillow">
        <ListItemText primary="Tesla Inc." />
      </ListItem>
      <Divider />
      <ListItem button component="a" href="/post/zillow">
        <ListItemText primary="Zillow Group Inc." />
      </ListItem>
      <Divider />
      <ListItem button component="a" href="/post/box">
        <ListItemText primary="Box Inc." />
      </ListItem>
    </List>
  );
};

const about = `
Don't be afraid to edit or add a new mosaic. Mosaic thrives on the contributions made by everyone around the world. Just be sure to link to a refrence when you add new facts.
`;

const content = `
Mosaic is a website where anyone can contribute investment insights to a mosaic on a specific company or topic. Wikipedia for investing.
`;

class Home extends Component {
  componentDidMount() {
    mixpanel.track("Home Page Visited");
  }

  render() {
    return(
      <Section>
        <Grid item xs={12} sm={10}>
          <Helmet title="Home" />
          <Paper>
            <div style={{
              padding: 40,
            }}>
              <Typography variant="display2">Welcome to Mosaic</Typography>
              <Typography component={Markdown} source={content} />
            </div>
          </Paper>
          <Paper style={{
            marginTop: 15,
          }}>
            <TrendingList></TrendingList>
          </Paper>
          <Card style={{
            marginTop: 15,
          }}>
            <CardContent>
              <Typography variant="title" component="h2">
                About
              </Typography>
              <Typography component={Markdown} source={about} variant="subheading"/>
            </CardContent>
          </Card>
        </Grid>
      </Section>
    )
  }
}

/*
const Home = ({ data }) => {
  return (
    <Section>
      <Grid item xs={12} sm={8}>
        <Helmet title="Home" />
        <Typography variant="display1">Welcome to Mosaic</Typography>
        <Typography component={Markdown} source={content} />
        <Typography variant="headline">Today's Trending Mosaics</Typography>
        <br></br>
        <Link to="/post/zillow">Zillow Group Inc.</Link>
        <br></br>
        <br></br>
        <Link to="/post/box">Box Inc.</Link>
        <br></br>
        <br></br>
        <Link to="/post/alphabet">Alphabet Inc.</Link>
      </Grid>
    </Section>
  );
};
*/
export default Home;
