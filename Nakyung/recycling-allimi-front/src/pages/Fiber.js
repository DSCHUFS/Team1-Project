import React, { Component } from 'react';
import '../css/Detail.css';
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


class Fiber extends Component {
  render() {
    return (
      <div className="App">
        <Logo></Logo>
        <Subject title="섬유류"></Subject>
        <Variety></Variety>
        <Varietytext title="의류, 솜없는 이불 등"></Varietytext>
        <Howto></Howto>
        <Howtotext title="지자체 동에서 설치한 의류수거함에 배출"></Howtotext>
      </div>
    );
  }
}

export default Fiber;