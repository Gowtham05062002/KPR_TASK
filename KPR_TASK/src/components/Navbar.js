import React from 'react'
import {NavLink} from 'react-router-dom'
// import {obj} from './Card'

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-inverse">
              <div className="container-fluid">
                  <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" style={{color:'#fff',fontSize:"30px"}} href="/">MyBookStore</a>
                  </div>
                  {/* <form className="navbar-form navbar-left" action="#">
                     <div className="input-group">
                       <input type="text" className="form-control" placeholder="Search" /> 
                       <div className="input-group-btn">
                         <button type="submit" className="btn btn-default">
                           <i className="glyphicon glyphicon-search"></i>
                         </button>
                       </div>
                     </div>
                  </form> */}
                  <div className="collapse navbar-collapse" id="myNavbar">
                    <ul className="nav navbar-nav navbar-right" >
                        <li><NavLink to="/" className="glyphicon glyphicon-home"style={{color:'#fff'}} > Home</NavLink></li>
                        <li><NavLink to="/signin"><span className="glyphicon glyphicon-user" style={{color:'#fff'}} > SignIn </span></NavLink></li>
                        <li><NavLink to="/cart"><span className="glyphicon "style={{color:'#fff'}} > &#xe116; Cart</span></NavLink></li>
                    </ul>
                  </div>
                  
              </div>
            </nav>
        </div>
    )
}

export default Navbar
