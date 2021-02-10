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


class Usedproduct extends Component {
  render() {
    return (
      <div className="App">
        <Logo></Logo>
        <Subject title="폐전자제품"></Subject>
        <Variety></Variety>
        <Varietytext title="세탁기, 에어컨 냉장고 티비 등 대형가전"></Varietytext>
        <Howto></Howto>
        <Howtotext title="대형가전 방문수거 서비스를 이용해 배출"></Howtotext>
      </div>
    );
  }
}

export default Usedproduct;