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


class Vinyl extends Component {
  render() {
    return (
      <div className="App">
        <Logo></Logo>
        <Subject title="비닐류"></Subject>
        <Variety></Variety>
        <Varietytext title="과자, 라면봉지, 1회용 비닐봉투 등"></Varietytext>
        <Howto></Howto>
        <Howtotext title="투명 비닐봉투에 넣어서 배출/음식물 등 이물질이 묻은 경우에는 깨끗이 씻어서 배출"></Howtotext>
      </div>
    );
  }
}

export default Vinyl;