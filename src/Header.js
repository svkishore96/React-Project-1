import React , {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component{
    render(){
        return <nav className="navbar navbar-expand-md navbar-dark fixed-top mybg-info">
        <a className="navbar-brand text-white" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
             <li className="nav-item">
                <Link className="leftlink nav-link  text-white" to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link className="leftlink nav-link  text-white" to="/multilevel-routing">Nested Routing</Link>
            </li>
            
             <li className="nav-item">
                <Link className="leftlink nav-link  text-white" to="/dynamic-component">Component with Props</Link>
            </li>
            <li className="nav-item">
                <Link className="leftlink nav-link  text-white" to="/states">ReactjsStates</Link>
            </li>
            <li className="nav-item">
                <Link className="leftlink nav-link  text-white" to="/array2">Array - 2d</Link>
            </li>
            <li className="nav-item active">
                <Link className="leftlink nav-link  text-white" to="/newproduct">New Product</Link>
            </li>
            <li className="nav-item active">
                <Link className="leftlink nav-link  text-white" to="/productlist">Product List</Link>
            </li>
            <li className="nav-item">
                <Link className="leftlink nav-link  text-white" to="/local-json">Local Json</Link>
            </li>
          </ul>
        </div>
      </nav>;
    }
}

export default Header;