import React from 'react';
import Link from 'gatsby-link';
import Markdown from 'react-markdown';
import Helmet from 'react-helmet';
import { Grid, Typography, Input, InputLabel, TextField } from 'material-ui';
import gql from 'graphql-tag';
import styled from '../utils/styled';
import Button from '../components/Button';
import Section from '../components/Section';

const SubmissionForm = () => (
  <div>
    <form method="POST" action="https://formspree.io/bennalle1@gmail.com">
      <div>
        <InputLabel>Mosaic Title</InputLabel>
        <br></br>
        <Input name="mosaicTitle" style = {{width: 600}}></Input>
      </div>
      <br></br>
      <div>
        <InputLabel>Mosaic Content</InputLabel>
        <br></br>
        <TextField
          multiline
          rows="10"
          style = {{width: 600}}
          name="content"
        />
      </div>
      <br></br>
      <div>
        <InputLabel>Your Email</InputLabel>
        <br></br>
        <Input name="contributorEmail" style = {{width: 600}}></Input>
      </div>
      <br></br>
      <div>
        <Button type="submit" variant="outlined">Submit</Button>
      </div>
    </form>
  </div>
);

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
export default Add;
