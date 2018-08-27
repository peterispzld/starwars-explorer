import React, { Component } from 'react';
import Header from '../components/Header'
import Main from '../components/Main';
import ErrorMessage from '../components/ErrorMessage';
import LoadingAnimation from '../components/LoadingAnimation';
import Footer from '../components/Footer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      error: null,
      isLoaded: false,
      people: []
    }
  }

  componentDidMount() {
    fetch('https://swapi.co/api/people/')
      .then(response => response.json())
      .then(
        person => {
          this.setState({
            isLoaded: true,
            people: person.results
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        });
  }

  onCardClick = (event) => {
    const person = this.state.people
      .find(person => person.name === event.target.value);
    alert(`Check more info about ${person.name} in the console 🤓`);
    console.log(person.name, person);
  }

  render() {
    const { onCardClick } = this;
    const { error, isLoaded, people } = this.state;
    if (error) {
      return (
        <div>
          <Header />
          <ErrorMessage message={ error.message } />
        </div>
      );
    } else if (!isLoaded) {
      return (
        <div>
          <Header />
          <LoadingAnimation />
        </div>
      );
    }
    else {
      return (
        <div>
          <Header />
          <Main people={ people } cardClick={ onCardClick } />
          <Footer />
        </div >
      );
    }
  }
}

export default App;
