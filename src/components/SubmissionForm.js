import React from 'react';
import Button from '../components/Button';
import { Grid, Typography, Input, InputLabel, TextField } from 'material-ui';

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

export default SubmissionForm;
