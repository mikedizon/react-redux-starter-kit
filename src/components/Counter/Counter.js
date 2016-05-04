import React from 'react'
import classes from './Counter.scss'

type Props = {
  counter: React.PropTypes.number,
  doubleAsync: React.PropTypes.func,
  increment: React.PropTypes.func,
  updateTitle:React.PropTypes.func
}

export class Counter extends React.Component {
  props: Props;
  componentWillMount(){
    this.props.updateTitle('Counter yay')
  }
  render(){
      return(
        <div>
          <h2 className={classes.counterContainer}>
            Counter:
            {' '}
            <span className={classes['counter--green']}>
              {this.props.counter}
            </span>
          </h2>
          <button className='btn btn-default' onClick={this.props.increment}>
            Increment
          </button>
          {' '}
          <button className='btn btn-default' onClick={this.props.doubleAsync}>
            Double (Async)
          </button>
        </div>
      )
  }
}

Counter.propTypes = {
  counter: React.PropTypes.number.isRequired,
  doubleAsync: React.PropTypes.func.isRequired,
  increment: React.PropTypes.func.isRequired,
  updateTitle:React.PropTypes.func.isRequired
}

export default Counter
