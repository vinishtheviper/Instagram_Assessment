import React from 'react';
import {FaHome , FaSearch , FaPlusSquare , FaRegHeart} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="container">

        <section className="bottom-bar">
            <button className="bottom-bar__btn">
                <FaHome />
            </button>
            <button className="bottom-bar__btn bottom-bar__btn--active">
                <FaSearch />
            </button>
            <button className="bottom-bar__btn" id="bottom-createbtn">
                <FaPlusSquare />
            </button>
            <button className="bottom-bar__btn">
                <FaRegHeart />
            </button>
            <button className="bottom-bar__btn">
                <img src={require("../asset/profile.jpg")} className="bottom-imageicon" alt="profile picture" />
            </button>
        </section>
    </div>
  )
}

export default Footer