import React, { Component } from 'react';
import Link from 'gatsby-link';
import { Grid, Typography } from 'material-ui';
import logoImage from '../../images/logo.png';
import styled from '../../utils/styled';
// import netlifyIdentity from 'netlify-identity-widget';

const FooterWrapper = styled(Grid, {
  component: 'footer',
  container: true,
  spacing: 16,
  fontSize: '0.75em',
})(theme => ({
  background: 'white',
  // padding: `${theme.spacing.unit * 4}px 0`,
  '& a:link, & a:visited': {
    cursor: 'pointer',
    color: 'inherit',
    textDecoration: 'none',
  },
  '& a:hover, & a:active': {
    cursor: 'pointer',
    color: 'inherit',
    textDecoration: 'underline',
  },
}));
const Left = styled(Grid)(theme => ({
  textAlign: 'left',
  marginLeft: 45,
  [theme.breakpoints.down('sm')]: {
    textAlign: 'center',
  },
}));
const Middle = styled(Grid)(theme => ({
  textAlign: 'center',
}));
const Right = styled(Grid)(theme => ({
  textAlign: 'left',
  [theme.breakpoints.down('sm')]: {
    textAlign: 'center',
  },
}));
const FooterLink = styled(Link)(theme => ({
  display: 'inline-block',
}));
const Caption = styled(Typography, { variant: 'caption' })(theme => ({
  display: 'block',
  lineHeight: '80px',
  [theme.breakpoints.down('sm')]: {
    lineHeight: '40px',
  },
}));

class Footer extends Component {
  render() {
    const { data: { site } } = this.props;
    return (
      <FooterWrapper>
        <Left item xs={12} sm={12}>
          <Caption>
            &copy; 2018 {site.siteMetadata.title}
            {` | `}
            <FooterLink to="/privacy-policy">
              <Typography variant="caption">Privacy Policy</Typography>
            </FooterLink>
            {` | `}
            <FooterLink to="/terms-of-service">
              <Typography variant="caption">Terms of Service</Typography>
            </FooterLink>
          </Caption>
        </Left>
      </FooterWrapper>
    );
  }
}

export default Footer;
