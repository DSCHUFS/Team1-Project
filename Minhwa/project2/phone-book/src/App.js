import React, { Component } from 'react';
import './App.css';
//import { Link } from 'react-router-dom' //****
//import Button from '@material-ui/core/Button';

class Subject extends Component {
  render () {
    return(
      <header>
        <h1 className="titletext">{this.props.title}</h1>
      </header>
    );
  }
}

class Logo extends Component {
  render () {
    return(
      <header>
        <h1 className="logo">Recycle Allimi</h1>
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
        <Logo></Logo>
        <Subject title="전등"></Subject>
        <Variety></Variety>
        <Varietytext></Varietytext>
        <Howto></Howto>
        <Howtotext></Howtotext>
      </div>
    );
  }
}

export default App;