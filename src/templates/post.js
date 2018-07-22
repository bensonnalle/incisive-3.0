import React, { Component } from 'react';
import Markdown from 'react-markdown';
import Link from 'gatsby-link';
import { Grid, Typography } from 'material-ui';
import gql from 'graphql-tag';
import styled from '../utils/styled';
import Section from '../components/Section';
import EditableMarkdown from '../components/EditableMarkdown';

const Article = styled(Grid, { component: 'article' })(theme => ({
  padding: `${theme.spacing.unit * 2}px 0`,
}));

const Placeholder = styled('div')(theme => ({
  height: 366,
  backgroundColor: '#eee',
  textAlign: 'center',
  margin: `${theme.spacing.unit * 2}px 0`,
}));
const ArticleImage = styled('img')(theme => ({
  objectFit: 'cover',
  width: '100%',
  height: 366,
}));
const ArticleTitle = styled('div')(theme => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

const UPDATE_POST = gql`
  mutation($id: ID!, $content: String!) {
    updatePost(id: $id, content: $content) {
      id
      content
    }
  }
`;

class Post extends Component {
  render() {
    const { data } = this.props;
    const post = data.post;
    return (
      <Section>
        <Article item xs={12} sm={8}>
          <ArticleTitle>
            <Typography variant="display1">{post.title}</Typography>
          </ArticleTitle>
          <EditableMarkdown
            source={post.content}
            node={post}
            mutation={UPDATE_POST}
            style={{
              zIndex: 1,
            }}
          />
        </Article>
      </Section>
    );
  }
}

export default Post;

export const query = graphql`
  query GetPost($slug: String!) {
    post(slug: { eq: $slug }) {
      id
      slug
      title
      content
    }
  }
`;
