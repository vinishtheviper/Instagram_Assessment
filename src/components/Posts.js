import React, { useContext, useMemo, useState } from 'react';
import DataContext from '../context/DataContext';
import { FaRegHeart, FaHeart, FaComment, FaRegPaperPlane, FaRegBookmark, FaEllipsisV, FaBookmark } from 'react-icons/fa'
import axios from 'axios';

const Posts = () => {

    const bgImage = require("../asset/profile.jpg")

    const { baseURL, posts, setPosts, errMsg, searchInput, stories, setStoryImage} = useContext(DataContext);

    const orderedPost = useMemo(() => [...posts].sort((a, b) => b.id - a.id), [posts]);

    const viewComments = (id) => {

        document.getElementById("modal_overlay").style.display = "block";
        document.getElementById("comment_modal").style.display = "block";
    }

    const handleLikes = async (id) => {
        const thisPost = posts.find((obj) => obj.id === id);
        const thisUpdatedPost = { ...thisPost, is_liked: !thisPost.is_liked, no_of_likes: thisPost.is_liked ? thisPost.no_of_likes - 1 : thisPost.no_of_likes + 1 }

        try {
            const response = await axios.put(`${baseURL}/posts/${id}`, thisUpdatedPost);
            if (response.status === 200) {
                const updatedPosts = posts.map((data) => {
                    if (data.id === id) {
                        return response.data
                    } else {
                        return data
                    }
                })
                setPosts(updatedPosts)
            }
        }
        catch (err) {
            console.log(err.message)
        }
    }

    const handleSaves = async (id) =>{
        const thisPost = posts.find((obj) => obj.id === id);
        const thisUpdatedPost = { ...thisPost, is_saved: !thisPost.is_saved }

        try {
            const response = await axios.put(`${baseURL}/posts/${id}`, thisUpdatedPost);
            if (response.status === 200) {
                const updatedPosts = posts.map((data) => {
                    if (data.id === id) {
                        return response.data
                    } else {
                        return data
                    }
                })
                setPosts(updatedPosts)
            }
        }
        catch (err) {
            console.log(err.message)
        }
    }


    const viewStory = (img) => {
        setStoryImage(img)
        document.getElementById("modal_overlay").style.display = "block";
        document.getElementById("story_modal").style.display = "block";    
    }


    return (
        <main>

            <section className="main-content grid">
                <div className="main-gallery-wrapper flex-container">
                    <div className="pop-wrapper flex-container">
                        <section className="stories">

                            {stories.length ? (
                                stories.map((data) => (
                                    <div key={data.id} className="stories__single">
                                        <div className="stories__single__img-holder"  onClick={() => viewStory(data.url)}>
                                            <div className="stories__single__img-holder__inner" style={{ backgroundImage: "url(" + require("../asset/" + data.url) + ")" }}>
                                            </div>
                                        </div>
                                        <p className="stories__single__description">{data.description}</p>
                                    </div>
                                ))
                            ) : (
                                <h1>No Stories to Load</h1>
                            )}

                        </section>
                    </div>

                    {errMsg === null ? (
                        orderedPost.length ? (
                            orderedPost.filter((obj) => {
                                if (searchInput === '') {
                                    return obj
                                } else if (
                                    ((obj.captions).toLowerCase()).includes(searchInput.toLowerCase()) ||
                                    ((obj.location).toLowerCase()).includes(searchInput.toLowerCase())
                                ) {
                                    return obj
                                }
                            }).map((data) => (
                                <div key={data.id} className="card-wrapper flex-container">
                                    <div className="card-header grid">
                                        <div className="header-img-container flex-container">
                                            {data.my_post ? (
                                                <img className="card-header-img" src={(require("../asset/" + data.profile_image_url))} alt="" />
                                            ) : (
                                                <img className="card-header-img" src={((data.profile_image_url))} alt="" />
                                            )}
                                        </div>
                                        <span className="card-title">{data.profile_name}</span>

                                        <span className="card-subtitle">{data.location}</span>
                                        <div className="card-opt-btn flex-container"><FaEllipsisV /></div>
                                    </div>
                                    <div className="card-img-container">
                                        <img className="card-img" src={(data?.post_image_url)} alt={data.profile_name} />
                                        <div class="instagram-heart"></div>
                                    </div>
                                    <div className="card-data flex-container">
                                        <div className="card-icons flex-container">
                                            <span className="card-icon card-icon-left" style={{ color: data.is_liked ? 'red' : 'black', cursor: 'pointer' }} onClick={() => handleLikes(data.id)}>{data.is_liked ? <FaHeart /> : <FaRegHeart />}</span>
                                            <span className="card-icon card-icon-left" onClick={() => viewComments()}><FaComment /></span>
                                            <span className="card-icon card-icon-left"><FaRegPaperPlane /></span>
                                            <span className="card-icon card-icon-right" onClick={() => handleSaves(data.id)}>{data.is_saved ? <FaBookmark /> : <FaRegBookmark />}</span>
                                        </div>
                                        <span className="bold card-text">{data.no_of_likes} Likes</span>
                                        
                                        <span className="card-text">
                                            <span className="bold title-margin">{data.profile_name}</span>
                                            {data.captions}
                                        </span>

                                        <span className="card-time"></span>

                                    </div>

                                </div>
                            ))

                        ) : (
                            <h1>No More Posts</h1>
                        )
                    ) : (
                        <h1>Failed to Load Posts</h1>
                    )}





                </div>
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
                                Antony Donald
                            </span>
                            <span className="card-subtitle sidebar-subtitle sidebar-subtitle-alt">antony_donald</span>
                            <span className="sidebar-btn">
                                Follow
                            </span>
                        </div>
                        <div className="sidebar-card sidebar-card-alt grid">
                            <img src={require("../asset/images/3.jpeg")}
                                alt="" className="sidebar-img side-bar-img-alt" />
                            <span className="sidebar-title card-title">
                                Paul Prabhakaran
                            </span>
                            <span className="card-subtitle sidebar-subtitle sidebar-subtitle-alt">paul_prabhakaran</span>
                            <span className="sidebar-btn">
                                Follow
                            </span>
                        </div>




                    </div>
                </div>
            </section>

        </main>
    )
}

export default Posts