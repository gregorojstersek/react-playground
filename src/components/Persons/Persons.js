import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {
  constructor(props) {
    super(props);
    console.log('Persons.js - Inside constructor', props);
    this.lastPersonRef = React.createRef();
  }

  componentWillMount() {
    console.log('Persons.js - componentWillMount');
  }

  componentDidMount() {
    console.log('Persons.js - componentDidMount');
    this.lastPersonRef.current.focus();
  }

  componentWillReceiveProps(nextProps) {
    console.log('Persons.js - componentWillReceiveProps', nextProps);
  }

  //   shouldComponentUpdate(nextProps, nextState) {
  //     console.log('Persons.js - shouldComponentUpdate', nextProps, nextState);
  //     // return nextProps.persons !== this.props.persons;
  //     return (
  //       nextProps.persons !== this.props.persons ||
  //       nextProps.changed !== this.props.changed ||
  //       nextProps.clicked !== this.props.clicked
  //     );
  //   }

  componentWillUpdate(nextProps, nextState) {
    console.log('Persons.js - componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('Persons.js - componentDidUpdate');
  }

  render() {
    console.log('Persons.js - inside render');
    return this.props.persons.map((person, index) => {
      return (
        <Person
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          ref={this.lastPersonRef}
          key={person.id}
          changed={event => this.props.changed(event, person.id)}
        />
      );
    });
  }
}

export default Persons;
