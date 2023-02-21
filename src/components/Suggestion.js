import React from 'react'

const Suggestion = () => {
  return (
    
    <div className="sidebar">
      <div className="sidebar-menu-container">
        <div className="sidebar-card sidebar-header grid">
          <img src={require("../asset/profile.jpg")}
            alt="" className="sidebar-img sidebar-hd-img" />
          <span className="sidebar-title card-title">
            miracle_vinish
          </span>
          <span className="card-subtitle sidebar-subtitle">vinish_kevin</span>
          <span className="sidebar-btn">Change</span>
        </div>
        <div className="suggestions-header grid">
          <span className="suggestions-text">
            Suggestions for you
          </span>
          <span className="sidebar-btn-alt">
            See all
          </span>
        </div>
        <div className="sidebar-card sidebar-card-alt grid">
          <img src={require("../asset/images/2.png")}
            alt="" className="sidebar-img side-bar-img-alt" />
          <span className="sidebar-title card-title">
            Sandy VS
          </span>
          <span className="card-subtitle sidebar-subtitle sidebar-subtitle-alt">Sandy</span>
          <span className="sidebar-btn">
            Follow
          </span>
        </div>




      </div>
    </div>
  )
}

export default Suggestion