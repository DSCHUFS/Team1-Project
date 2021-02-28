import React from 'react';
import ReactDOM from 'react-dom';
import Main from './pages/Main';
import Search from './pages/Search';
// import Battery from './pages/Battery';
import Can from './pages/Can';
// import Electronics from './pages/Electronics';
// import Fiber from './pages/Fiber';
import Glass from './pages/Glass';
// import Lamp from './pages/Lamp';
import Paper from './pages/Paper';
import PaperCup from './pages/PaperCup';
import Plastic from './pages/Plastic';
import PlasticBag from './pages/PlasticBag';
import Etc from './pages/Etc';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Route path='/' component={Main} exact/>
    <Route exact path="/search" component={Search} />
    {/* <Route exact path="/battery" component={Battery} /> */}
    <Route exact path="/can" component={Can} />
    {/* <Route exact path="/electronics" component={Electronics} /> */}
    {/* <Route exact path="/fiber" component={Fiber} /> */}
    <Route exact path="/glass" component={Glass} />
    {/* <Route exact path="/lamp" component={Lamp} /> */}
    <Route exact path="/paper" component={Paper} />
    <Route exact path="/paper-cup" component={PaperCup} />
    <Route exact path="/plastic" component={Plastic} />
    <Route exact path="/plastic-bag" component={PlasticBag} />
    <Route exact path="/etc" component={Etc} /> 
  </BrowserRouter>,
  document.getElementById('root')
);
reportWebVitals();
