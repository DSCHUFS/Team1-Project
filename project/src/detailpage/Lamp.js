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


class Lamp extends Component {
  render() {
    return (
      <div className="App">
        <Logo></Logo>
        <Subject title="형광등"></Subject>
        <Variety></Variety>
        <Varietytext title="형광등, 심파장전구, 기타 수은을 함유한 조명제품"></Varietytext>
        <Howto></Howto>
        <Howtotext title="깨지지 않게 주요거점(동주민센터, 아파트, 주택가골목 등) 폐형광등 전용수거함에 배출"></Howtotext>
      </div>
    );
  }
}

export default Lamp;