import React from 'react'
import { IndexLink, Link } from 'react-router'
import classes from './Header.scss'
import AppBar from 'material-ui/AppBar';

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Menu from 'material-ui/Menu';
import Paper from 'material-ui/Paper';

import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import ContentLink from 'material-ui/svg-icons/content/link';
import Divider from 'material-ui/Divider';
import ContentCopy from 'material-ui/svg-icons/content/content-copy';
import Download from 'material-ui/svg-icons/file/file-download';
import Delete from 'material-ui/svg-icons/action/delete';
import FontIcon from 'material-ui/FontIcon';

import muiThemeable from 'material-ui/styles/muiThemeable';


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
    title="Test"
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
            Home
        </MenuItem>
        <MenuItem>
            Counter
        </MenuItem>
      </Menu>
      </Drawer>
  </div>
)

Header.propTypes = {
  toggle: React.PropTypes.func.isRequired,
  open: React.PropTypes.bool.isRequired
}
export default muiThemeable()(Header)
