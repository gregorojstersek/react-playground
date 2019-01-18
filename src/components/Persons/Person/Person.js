import React, { Component } from 'react';

import classes from './Person.css';
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Auxiliary';

import { AuthContext } from '../../../containers/App';

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
        <AuthContext.Consumer>
          {auth => (auth ? <p>I'm authenticated</p> : null)}
        </AuthContext.Consumer>
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
