import React from 'react';
import Link from 'gatsby-link';
import Markdown from 'react-markdown';
import Helmet from 'react-helmet';
import { Grid, Typography } from 'material-ui';
import gql from 'graphql-tag';
import styled from '../utils/styled';
import Button from '../components/Button';
import Section from '../components/Section';

const content = `
Mosaic is a website where anyone can contribute investment insight to a mosaic on a specific company or another topic. Contribute to existing mosaics or create a new mosaic for a new topic or company.
`;

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
export default Home;
