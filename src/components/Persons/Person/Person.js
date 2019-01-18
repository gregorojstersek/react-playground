import React, { Component } from 'react';

import classes from './Person.css';
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Auxiliary';

class Person extends Component {
  constructor(props) {
    super(props);
    console.log('Person.js - Inside constructor', props);
    this.inputElement = React.createRef();
  }

  componentWillMount() {
    console.log('Person.js - componentWillMount');
  }

  componentDidMount() {
    console.log('Person.js - componentDidMount');
    // this.focusInput();
  }

  focus() {
    this.inputElement.current.focus();
  }

  render() {
    console.log('Person.js - inside render');
    return (
      <Aux>
        <p onClick={this.props.click}>
          I 'm a {this.props.name} and I am {this.props.age} years old!!{' '}
        </p>{' '}
        <p> {this.props.children} </p>{' '}
        <input
          ref={this.inputElement}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />{' '}
      </Aux>
    );
  }
}

export default withClass(Person, classes.Person);
