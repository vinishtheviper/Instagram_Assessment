import React, { useContext, useState } from 'react';
import { FaHome, FaComment, FaRegBell } from 'react-icons/fa'
import DataContext from '../context/DataContext';

const Header = () => {

  const { posts , setPosts , searchInput , setSearchInput } = useContext(DataContext);

  

  const handleSearch = (val) =>{
    setSearchInput(val)
  }

  return (
    <header className="grid main-header">
      <div className="flex-container header-container">
        <span className="logo logo-nav header-item">
          <img src={require("../asset/images/logo.png")} style={{ maxWidth: '150px' }} />
        </span>

        <div className="header-item searchbar ">
          <label htmlFor="searchbar ">
            <div className="flex-container">
              <input id="searchbar" type="text" value={searchInput} onChange={(e) => handleSearch(e.target.value)} className="searchbar-input" placeholder="Search..." />
            </div>
          </label>
        </div>
        <nav className="header-item main-nav desktopview">
          <ul className="navbar flex-container">


            <li className="navbar-item"> <FaHome /> </li>
            <li className="navbar-item"> <FaComment /> </li>
            <li className="navbar-item"> <FaRegBell /> </li>
            <li className="navbar-item no-hover">
              <img src={require("../asset/profile.jpg")} alt="" />
            </li>
          </ul>
        </nav>

        <nav className="header-item main-nav desktopview">

        </nav>

        <nav className="header-item main-nav mobileview">
          <ul className="navbar flex-container">
            <li className="navbar-item no-hover">
            <img src={require("../asset/profile.jpg")} alt="" />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header