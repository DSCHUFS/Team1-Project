import React, { Component } from 'react';
import './App.css';

class Subject extends Component {
  render () {
    return(
      <header>
        <h1 className="titletext">{this.props.title}</h1>
        {this.props.sub}
      </header>
    );
  }
}

class Variety extends Component {
  render () {
    return(
      <header>
        <h1 className="subtitle">종류</h1>
      </header>
    );
  }
}


class Varietytext extends Component {
  render () {
    return(
      <div>
        <div className="text">형광등 전등 유리등 등등...</div>
      </div>
    );
  }
}


class Howto extends Component {
  render () {
    return(
      <header>
        <h1 className="subtitle">분리배출법</h1>
      </header>
    );
  }
}

class Howtotext extends Component {
  render () {
    return(
      <div>
        <div className="text">내용물을 잘 씻는다</div>
      </div>
    );
  }
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <Subject title="전등" sub="전등 분리배출법을 알아봅시다"></Subject>
        <Variety></Variety>
        <Varietytext></Varietytext>
        <Howto></Howto>
        <Howtotext></Howtotext>
      </div>
    );
  }
}

export default App;