import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";
import Search from "../components/Search";
import logo from "../google_logo.png";

function Home() {
  return (
    <div className="home">
      <div className='home_header'>
          <div className='header_left'>
             <Link to="">About</Link>
             <Link to="">Store</Link>
          </div>
          <div className='header_right'>
            <Link to="">Gmail</Link>
            <Link to="">Images</Link>
            <AppsIcon titleAccess='Google apps'/>  
            <Avatar titleAccess='Google account'/>
          </div>
      </div>

      <div className='home_body'>
          <img 
           src={logo}
            alt="google-logo" />
          <div className='input'>
            <Search />
          </div>
      </div>
    </div>
  );
}

export default Home;
