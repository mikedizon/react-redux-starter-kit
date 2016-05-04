import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import classes from './HomeView.scss'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import MenuItem from 'material-ui/MenuItem';
import Menu from 'material-ui/Menu';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
import { Row, Col, Grid } from 'react-flexbox-grid/lib/index';

const style = {
  display: 'inline-block',
  float: 'left',
  margin: '16px 32px 16px 0',
};

const box  = {
  position: 'relative',
  boxSizing: 'border-box',
  minHeight: '1rem',
  marginBottom: '0',
  background: '#007FFF',
  border: '1px solid #FFF',
  borderRadius: '2px',
  overflow: 'hidden',
  textAlign: 'center',
  color: '#fff'
}

const row = {
  composes: 'box',
  marginBottom: '1rem'
}

export const HomeView = () => (
  <Grid fluid>
    <Row>
      <Col style={row} type="row" xs={12} sm={3} md={2} lg={1}><div style={box}>x</div></Col>
      <Col style={row} type="row" xs={6} sm={6} md={8} lg={10}><div style={box}>x</div></Col>
      <Col style={row} type="row" xs={6} sm={3} md={2} lg={1}><div style={box}>x</div></Col>
    </Row>
  </Grid>
)

export default HomeView
