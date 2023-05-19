import React from "react";
import { Link } from "react-router-dom";
import logo from './logo.JPG';
import './header.css';

function Header() {
  return (
    <section id="title">
      <div className="container-fluid" id="tpFl">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <Link className="navbar-brand" to="/" style={{ color: "black" }}>DSA 360</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/" style={{ color: "black" , fontSize: "23px" }}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact" style={{ color: "black" , fontSize: "23px"  }}>Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/signup" style={{ color: "black" , fontSize: "23px"  }}>Sign In</Link>
              </li>
            </ul>
          </div>
        </nav>
        <br />

        <div className="row">
          <div className="col-lg-6">
            <h1 className="big-heading">Unlock Your Potential with DSA 360.</h1>
          </div>
          <div className="col-lg-6">
            <img className="title-image" src={logo} alt="DSA 360" />
          </div>
        </div>
      </div>

      {/* <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/signup" component={Signup} />
      </Switch> */}
    </section>
  );
}

export default Header;
