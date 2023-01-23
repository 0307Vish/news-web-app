import React ,{useContext} from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { BsFillBrightnessHighFill } from "react-icons/bs";
import  {CiBrightnessDown} from "react-icons/ci"
import {  AiFillHome} from "react-icons/ai";
import { Mode } from '../App';
const Navbar = (props) => {
  const theme = useContext(Mode);
 return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark" style={{backgroundColor:theme.mode==='dark'?'rgb(2, 20, 48)':'black',}}>
          <div className="container-fluid">
          <a className="navbar-brand" style={{color:'orange'}}><i><b>NEWS-HUB</b></i></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/"><AiFillHome size={'1.4em'}/> Home </Link>
                </li>
                {/* <li className="nav-item">
                  <a className="nav-link" href="/">Link</a>
                </li> */}
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                   Categories 
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><Link  className="dropdown-item" to="/">General</Link></li>
                    <li><Link className="dropdown-item" to="/business">Business</Link></li>
                    <li><Link className="dropdown-item" to="/entertainment">Entertainment</Link></li>
                    <li><Link className="dropdown-item" to="/health">Health</Link></li>
                    <li><Link className="dropdown-item" to="/science">Science</Link></li>
                    <li><Link className="dropdown-item" to="/sports">Sports</Link></li>
                    <li><Link className="dropdown-item" to="/technology">Technology</Link></li>
                  </ul>
                </li>
                {/* <li className="nav-item">
                  <a className="nav-link disabled" href="/" tabIndex="-1" aria-disabled="true">Disabled</a>
                </li> */}
              </ul>
              {/* <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-dark" type="submit">Search</button>
              </form> */}
              <div class="form-check form-switch">
  <label className="form-check-label" style={{color:'azure'}} htmlFor="flexSwitchCheckDefault">{theme.mode==='dark'?<CiBrightnessDown  onClick={theme.toggleMode} color={'orange'} size={'1.5em'} /> :<BsFillBrightnessHighFill color={'orange'} onClick={theme.toggleMode} size={'1.5em'}/>}</label>
  </div>
            </div>
          </div>
        </nav>
        <Outlet/>
      </div>
    ) 
 
}
export default Navbar;

// 


