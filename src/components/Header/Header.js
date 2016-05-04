import React from 'react'
import { IndexLink, Link } from 'react-router'
import classes from './Header.scss'
import AppBar from 'material-ui/AppBar';

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

export const Header = (props) => (
  <div>
    <AppBar
    title="Test"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
    onLeftIconButtonTouchTap={props.toggle}
    />
      <Drawer
      docked={false}
      width={200}
      open={props.open}
      onRequestChange={props.toggle}
      >
        <MenuItem>
          <IndexLink to='/' activeClassName={classes.activeRoute}>
            Home
          </IndexLink>
        </MenuItem>
        <MenuItem>
          <Link to='/counter' activeClassName={classes.activeRoute}>
            Counter
          </Link>
        </MenuItem>
      </Drawer>
  </div>
)

Header.propTypes = {
  toggle: React.PropTypes.func.isRequired,
  open: React.PropTypes.bool.isRequired
}

export default Header
