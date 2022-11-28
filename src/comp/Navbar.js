import React from 'react';
import { Link } from "react-router-dom";


function Navbar() {
  return (
    < >
       <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="../pages/Home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="../pages/Jobs">Jobs</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="../pages/About">About</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    </>
  );
}

export default Navbar;


