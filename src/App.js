import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id: 'dew33ew', name: 'max', age: 28},
      {id: 'dewewdw', name: 'gab', age: 31},
      {id: 'dewecdcfw', name: 'pippo', age: 18},
      
    ],
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons: persons});
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id;
    });

    const person = { 
      ...this.state.persons[personIndex]
    };
    
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    //const person = Object.assign({},this.state.person[personIndex]);

    this.setState({persons: persons});
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'green',
      font: 'inherit',
      border: '1px solid red',
      color: 'white',
    };

    let persons = null;

    if (this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map( ( person) => {
            return <Person click={() => this.deletePersonHandler(person.id)} 
                            key={person.id} 
                            name={person.name} 
                            age={person.age}
                            changed={(event) => this.nameChangedHandler(event,person.id)} />
          })}
        </div>
      );
      style.backgroundColor= 'red';
   
    }
  
    let pClasses = [];
    
    if(this.state.persons.length <= 2){
      pClasses.push('red');
    }

    if(this.state.persons.length <= 1){
      pClasses.push('bold');    
    }    

    return (
      <div className="App">
        <h1>hi i'm a react app</h1>
        <p className={pClasses.join(' ')}>This is really working</p>
        <button style={style} 
          onClick={this.togglePersonHandler} >Toggle Person</button>
        {persons}
      </div>
    );
  }
}

export default App;
