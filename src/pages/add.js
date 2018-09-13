import React, { Component } from 'react';
import Link from 'gatsby-link';
import Markdown from 'react-markdown';
import Helmet from 'react-helmet';
import { Grid, Typography, Input, InputLabel, TextField } from 'material-ui';
import gql from 'graphql-tag';
import styled from '../utils/styled';
import Button from '../components/Button';
import Section from '../components/Section';
import SubmissionForm from '../components/SubmissionForm';

class Add extends Component {
  componentDidMount() {
    mixpanel.track("Add Page Visited");
  }

  render() {
    return (
      <Section>
        <Grid item xs={12} sm={8}>
          <Helmet title="Add Mosaic" />
          <Typography variant="display1">Please Enter the Following Fields</Typography>
          <br></br>
          <SubmissionForm style={{margin: '0 auto'}}></SubmissionForm>
        </Grid>
      </Section>
    );
  }
}

/*
const Add = ({ data }) => {
  return (
    <Section>
      <Grid item xs={12} sm={8}>
        <Helmet title="Add Mosaic" />
        <Typography variant="display1">Please Enter the Following Fields</Typography>
        <br></br>
        <SubmissionForm style={{margin: '0 auto'}}></SubmissionForm>
      </Grid>
    </Section>
  );
};
*/
export default Add;
