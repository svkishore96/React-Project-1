import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import Header from './Header';
import Footer from './Footer';
import Newproduct from './Newproduct';
import Productlist from './Productlist';
import States from './States';
import Array2 from './Array2';
import Localstorage from './Localstorage';
import Multirouting from './Multirouting';
import Jsondata from './Jsondata';
import { Route, HashRouter } from 'react-router-dom';  
import * as serviceWorker from './serviceWorker';
const routing =(<HashRouter>
        <Header />
        <div className="container height500">
		<Route exact path="/" component={App} />
        <Route path="/newproduct" component={Newproduct} />
        <Route path="/productlist" component={Productlist} />
        <Route path="/states" component={States} />
        <Route path="/array2" component={Array2} />
        <Route path="/dynamic-component" component={Localstorage} />
        <Route path="/multilevel-routing" component={Multirouting} />
        <Route path="/local-json" component={Jsondata} />
        </div>
        <Footer />
  </HashRouter>
)
ReactDOM.render(
  routing,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
