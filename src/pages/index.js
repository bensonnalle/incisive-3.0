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
Mosaic is a website where anyone can contribute investment insight to a mosaic on a specific company or another topic. 
`;

const Home = ({ data }) => {
  return (
    <Section>
      <Grid item xs={12} sm={8}>
        <Helmet title="Home" />
        <Typography variant="display1">Welcome to Mosaic</Typography>
        <Typography component={Markdown} source={content} />
      </Grid>
    </Section>
  );
};
export default Home;
