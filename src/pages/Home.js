import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";
import Search from "../components/Search";

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
           src='https://png2.cleanpng.com/sh/ebc4ae0e67202242909c0a6dabdb6246/L0KzQYm3VsIzN5hqjJH0aYP2gLBuTfdwd5hxfZ91b3fyPbj2jBdtbaFxfeo2Z3Byd73sTgNmaaNogJ8AYkLmdIjthMY3aWoASpC6NEW6RIO8VME2Omo7TqcAM0O3QoG8TwBvbz==/kisspng-google-logo-googleplex-google-search-5b2cd7fd66a992.1457425415296655334205.png'
            alt="google-logo" />
          <div className='input'>
            <Search />
          </div>
      </div>
    </div>
  );
}

export default Home;
