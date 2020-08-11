import React, { Component } from 'react';
import Header from './components/header';
import Content from './components/content';
import './App.scss';

class App extends Component {
  render() {
    return (
      <main className="app">
        <Header />
        <Content />
      </main>
    );
  }
}

export default App;
