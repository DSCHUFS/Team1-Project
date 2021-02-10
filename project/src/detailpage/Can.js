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
        <div className="text">{this.props.title}.</div>
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
        <div className="text">{this.props.title}</div>
      </div>
    );
  }
}


class Can extends Component {
  render() {
    return (
      <div className="App">
        <Logo></Logo>
        <Subject title="캔, 고철류"></Subject>
        <Variety></Variety>
        <Varietytext title="철캔, 알미늄캔, 부탄가스, 살충제 용기 등"></Varietytext>
        <Howto></Howto>
        <Howtotext title="내용물을 비우고 배출."></Howtotext>
      </div>
    );
  }
}

export default Can;