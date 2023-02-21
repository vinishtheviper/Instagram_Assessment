import React from 'react'
import { FaHome, FaSearch, FaRegCompass, FaVideo, FaRegComment, FaBell, FaPlusSquare, FaBars } from 'react-icons/fa'

const Aside = () => {

    // document.getElementById("create-button").onclick = function () {
    //     document.getElementById("modal_overlay").style.display = "block";
    //     document.getElementById("post_modal").style.display = "block";
    // };

    const createPost = () =>{
        document.getElementById("modal_overlay").style.display = "block";
        document.getElementById("post_modal").style.display = "block";
    }

   
    // document.getElementById("bottom-createbtn").onclick = function () {
    //     document.getElementById("modal_overlay").style.display = "block";
    //     document.getElementById("post_modal").style.display = "block";
    // };

    // document.getElementById("cancelbutton").onclick = function () {
    //     document.getElementById("modal_overlay").style.display = "none";
    //     document.getElementById("post_modal").style.display = "none";
    // };
    return (
        <div className="asidebar">
            <header className="asidebar_header">
                <img src={require("../asset/images/logo.png")} style={{ maxWidth: '140px' }} />
            </header>
            <nav className="asidebar_menu">
                <button className="active">
                    <span><FaHome /><span>Home</span></span>
                </button>
                <button>
                    <span><FaSearch /><span>Search</span></span>
                </button>
                <button>
                    <span><FaRegCompass /><span>Explore</span></span>
                </button>
                <button>
                    <span><FaVideo /><span>Reels</span></span>
                </button>
                <button>
                    <span><FaRegComment /><span>Messages</span></span>
                </button>
                <button>
                    <span><FaBell /><span>Notifications</span></span>
                </button>
                <button id="create-button" onClick={() => createPost()}>
                    <span><FaPlusSquare /><span>Create</span></span>
                </button>
                <button>
                    <span><img src={require("../asset/profile.jpg")} /><span>Profile</span></span>
                </button>
                <button>
                    <span><FaBars /><span>More</span></span>
                </button>
            </nav>
        </div>
    )
}

export default Aside