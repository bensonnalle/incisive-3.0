import React, { Component } from 'react';
import Link from 'gatsby-link';
import Markdown from 'react-markdown';
import Helmet from 'react-helmet';
import { Grid, Typography, Input, InputLabel } from 'material-ui';
import gql from 'graphql-tag';
import styled from '../utils/styled';
import Button from '../components/Button';
import Section from '../components/Section';

class EmailCollectionPage extends Component {
  componentDidMount() {
    mixpanel.track("Add Page Visited");
  }

  render() {
    return (
      <Section>
        <Grid item xs={12} sm={8}>
          <Helmet title="Mosaic Updates" />
          <br></br>
          <div>
            <Typography variant="display1">Thanks for Signing Up</Typography>
            <br></br>
            <InputLabel>Your Email</InputLabel>
            <br></br>
            <Input name="emailForSubmission" style = {{width: 600}}></Input>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </Grid>
      </Section>
    );
  }
}

export default EmailCollectionPage;
