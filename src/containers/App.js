import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('App.js - Inside constructor', props);
    this.state = {
      persons: [
        {
          id: 1,
          name: 'Max',
          age: 28
        },
        {
          id: 2,
          name: 'Gregor',
          age: 27
        },
        {
          id: 3,
          name: 'Tadej',
          age: 30
        }
      ],
      otherState: 'some other value',
      showPersons: false
    };
  }

  componentWillMount() {
    console.log('App.js - componentWillMount');
  }

  componentDidMount() {
    console.log('App.js - componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('App.js - shouldComponentUpdate', nextProps, nextState);
    // return nextProps.persons !== this.props.persons;
    return (
      nextState.persons !== this.state.persons ||
      nextState.showPersons !== this.state.showPersons
    );
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('App.js - componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('App.js - componentDidUpdate');
  }

  state = {
    persons: [
      {
        id: 1,
        name: 'Max',
        age: 28
      },
      {
        id: 2,
        name: 'Gregor',
        age: 27
      },
      {
        id: 3,
        name: 'Tadej',
        age: 30
      }
    ],
    otherState: 'some other value',
    showPersons: false
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons: persons
    });
  };

  deletePersonHandler = personIndex => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({
      persons
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  };

  render() {
    console.log('App.js - inside render');
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler}
        />
      );
    }
    return (
      <div className={classes.App}>
        <button
          onClick={() => {
            this.setState({ showPersons: true });
          }}
        >
          Show persons
        </button>
        <Cockpit
          appTitle={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
        />{' '}
        {persons}{' '}
      </div>
    );
  }
}

export default App;
