import React from 'react'
import classes from './Header.scss'
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Menu from 'material-ui/Menu';
import muiThemeable from 'material-ui/styles/muiThemeable';

import { IndexLink, Link } from 'react-router'

const style = {
  paper: {
    display: 'inline-block',
    float: 'left',
    margin: '16px 32px 16px 0',
  },
  rightIcon: {
    textAlign: 'center',
    lineHeight: '24px',
  },
};


export const Header = (props) => (
  <div>
    <AppBar
    title={props.title}
    iconClassNameRight="muidocs-icon-navigation-expand-more"
    onLeftIconButtonTouchTap={props.toggle}
    />
      <Drawer
      docked={false}
      width={300}
      open={props.open}
      onRequestChange={props.toggle}
      >
      <Menu>
        <MenuItem primary={true}>
            <IndexLink to='/'>Home</IndexLink>
        </MenuItem>
        <MenuItem>
            <Link to='/counter'>Counter</Link>
        </MenuItem>
      </Menu>
      </Drawer>
  </div>
)

Header.propTypes = {
  toggle: React.PropTypes.func.isRequired,
  open: React.PropTypes.bool.isRequired,
  title: React.PropTypes.string.isRequired
}
export default muiThemeable()(Header)
