import React, { Component } from 'react';
import Link from 'gatsby-link';
import { Grid, Button, IconButton, Typography } from 'material-ui';
import Plus from 'mdi-material-ui/Plus';
import styled from '../../utils/styled';
import netlifyIdentity from 'netlify-identity-widget';

const HeaderWrapper = styled(Grid, {
  component: 'header',
  container: true,
  padding: 16,
})(theme => ({
  background: 'white',
  position: 'fixed',
  // height: '4em',
  borderBottom: '1px solid',
  borderBottomColor: '#38ef7d',
  zIndex: 2,
}));
const Left = styled(Grid)(theme => ({
  textAlign: 'left',
  [theme.breakpoints.down('sm')]: {
    textAlign: 'center',
  },
}));
const Middle = styled(Grid)(theme => ({
  textAlign: 'center',
}));
const Right = styled(Grid)(theme => ({
  textAlign: 'right',
  [theme.breakpoints.down('sm')]: {
    textAlign: 'center',
  },
}));
const Navigation = styled('nav')(theme => ({
  padding: `${theme.spacing.unit * 1.5}px 0`,
}));
const NavButton = styled(Button, { component: Link })(theme => ({
  color: 'error',
  marginLeft: 45,
}));
const AddButton = styled(Button)(theme => ({
  size: 'small',
}));

class Header extends Component {
  handleLogin = type => () => {
    netlifyIdentity.open(type);
  };

  componentDidMount() {
    const currentPathname = location.pathname;
    console.log(currentPathname);
  }

  render() {
    const { data: { site } } = this.props;
    return (
      <HeaderWrapper>
        <Left item xs={6} sm={6}>
          <Navigation>
            <NavButton to="/">Mosaic </NavButton>
          </Navigation>
        </Left>
        <Right item xs={6} sm={6}>
          <Navigation>
            <Button style={{
              marginRight: 0,
              boxShadow: "none",
            }} onClick={this.handleLogin('login')}>Edit</Button>
            <Button to="/add/" style={{
              marginRight: 10,
              boxShadow: "none",
            }}>Add</Button>
          </Navigation>
        </Right>
      </HeaderWrapper>
    );
  }
}

export default Header;
