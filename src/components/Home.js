import React, { useContext, useMemo, useState } from 'react'
import DataContext from '../context/DataContext'
import Toaster from '../CommonView/Toaster'
import Aside from './Aside';
import Posts from './Posts';
import Suggestion from './Suggestion';
import { FaTimes } from 'react-icons/fa'
import axios from 'axios';
import {FaRegPaperPlane} from 'react-icons/fa'


const Home = () => {
    const { baseURL ,  posts, setPosts, errMsg} = useContext(DataContext);

    const defaultSrc = useMemo(() => require("../asset/images/no_image.png") ,[])

    const [imgSrc , setImgSrc] = useState(defaultSrc)
    const [location, setLoction] = useState('');
    const [caption, setCaption] = useState('');

    const cancelPost = () => {
        document.getElementById("modal_overlay").style.display = "none";
        document.getElementById("post_modal").style.display = "none";
        document.getElementById("comment_modal").style.display = "none";
        document.getElementById("uploadPostForm").reset();
        setImgSrc(defaultSrc)
        setLoction("");
        setCaption("");
    };


    const handleImage = (e) =>{
        if(e.target.files && (e.target.files).length > 0){
            setImgSrc(URL.createObjectURL(e.target.files[0]))
        }else{
            setImgSrc(defaultSrc)
        }
    }


    const uploadPost = async (e) => {
        e.preventDefault();

        const newId = posts.length ? posts[posts.length -1].id + 1 : 1;
        const newPostObj = {
            id : newId,
            no_of_likes: 0,
            post_image_url: imgSrc,
            comments: [],
            captions: caption,
            profile_image_url: "profile.jpg",
            profile_name: "Vinish",
            location: location,
            is_liked: false,
            is_saved: false,
            my_post : true
        }


        try{
            const response = await axios.post(`${baseURL}/posts`, newPostObj);
            if(response){
                setPosts([...posts , newPostObj])
                cancelPost()
            }
        }
        catch(err){
            console.log(err.message)
        }

    }


    const uploadComment = () =>{

    }


    return (
        <>
            <div className="row">
                <div className="col-md-3">
                    <Aside />
                </div>
                <div className="col-md-9">
                    <Posts />
                </div>
            </div>

            <div className="main modalsection">

                <div className="modalcontainer" id="modal_overlay">
                    <a href="javascript:void(0);" id="cancelbutton" onClick={() => cancelPost()}><FaTimes style={{ fontSize: '24px' }} /></a>
                </div>
                <div className="modal" id="post_modal">
                    <div className="content">

                        <h4 className="createPost">Create Post</h4>
                        <form onSubmit={uploadPost} id="uploadPostForm">
                            <div className='row'>
                                <div className='col-12 col-md-7'>
                                    <img className="uploadImage" src={imgSrc} style={{ width: '100%', height: '200px' }} alt="" />
                                    <input required type="file" onChange={(e) => handleImage(e)} name="post_uploading_img" id="post_uploading_img" accept='image/*' />
                                </div>
                                <div className='col-12 col-md-5'>
                                    
                                    <textarea className='form-control' name="caption" id="caption" placeholder="Add a Caption" value={caption} onChange={(e) => setCaption(e.target.value)} />

                                    <br/>
                                    
                                    <input required className='form-control' type="text" name="location" placeholder="Add Location" id="location" value={location} onChange={(e) => setLoction(e.target.value)} />
                                    <br/>
                                    <button type='submit' className='btn btn-success uploadPost'>Share Post</button>
                                
                                </div>
                            </div>
                            
                           
                            
                            
                            
                        </form>
                    </div>

                </div>

                <div className="modal" id="comment_modal">
                    <div className="content">

                        <h4 className="createPost">View Comments</h4>
                        <form id="uploadPostForm">
                            <div className='row'>
                                <div className='col-12 col-md-12'>
                                    <div className="commentSection scrollbar" id="style-2">
                                        <div className='row'>
                                            <div className='col-2'>
                                                <span><img src={require("../asset/profile.jpg")} className="rounded-circle comment_user"/></span>
                                            </div>
                                            <div className='col-10 text-left'>
                                                <h5>miracle_vinish</h5>
                                                <h5><small>this is my commentthis is my commentthis is my commentthis is my commentthis is my commentthis is my comment</small></h5>
                                            </div>
                                        </div>

                                        <div className='row'>
                                            <div className='col-2'>
                                                <span><img src={require("../asset/profile.jpg")} className="rounded-circle comment_user"/></span>
                                            </div>
                                            <div className='col-10 text-left'>
                                                <h5>miracle_vinish</h5>
                                                <h5><small>this is my commentthis is my commentthis is my commentthis is my commentthis is my commentthis is my comment</small></h5>
                                            </div>
                                        </div>

                                        <div className='row'>
                                            <div className='col-2'>
                                                <span><img src={require("../asset/profile.jpg")} className="rounded-circle comment_user"/></span>
                                            </div>
                                            <div className='col-10 text-left'>
                                                <h5>miracle_vinish</h5>
                                                <h5><small>this is my commentthis is my commentthis is my commentthis is my commentthis is my commentthis is my comment</small></h5>
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-2'>
                                                <span><img src={require("../asset/profile.jpg")} className="rounded-circle comment_user"/></span>
                                            </div>
                                            <div className='col-10 text-left'>
                                                <h5>miracle_vinish</h5>
                                                <h5><small>this is my commentthis is my commentthis is my commentthis is my commentthis is my commentthis is my comment</small></h5>
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-2'>
                                                <span><img src={require("../asset/profile.jpg")} className="rounded-circle comment_user"/></span>
                                            </div>
                                            <div className='col-10 text-left'>
                                                <h5>miracle_vinish</h5>
                                                <h5><small>this is my commentthis is my commentthis is my commentthis is my commentthis is my commentthis is my comment</small></h5>
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-2'>
                                                <span><img src={require("../asset/profile.jpg")} className="rounded-circle comment_user"/></span>
                                            </div>
                                            <div className='col-10 text-left'>
                                                <h5>miracle_vinish</h5>
                                                <h5><small>this is my commentthis is my commentthis is my commentthis is my commentthis is my commentthis is my comment</small></h5>
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-2'>
                                                <span><img src={require("../asset/profile.jpg")} className="rounded-circle comment_user"/></span>
                                            </div>
                                            <div className='col-10 text-left'>
                                                <h5>miracle_vinish</h5>
                                                <h5><small>this is my commentthis is my commentthis is my commentthis is my commentthis is my commentthis is my comment</small></h5>
                                            </div>
                                        </div>
                                    
                                    </div>
                                    
                                </div>
                                <div className='col-12 col-md-12'>
                                    
                                    <fieldset className="fieldInput">                                   
                                    
                                        <input className="form-input" type="text" name="comment" placeholder="Add Comment Here" id="comment" value="" />
                                        <button type="submit" class="form-submit"><FaRegPaperPlane /> Post Comment</button>
                                    </fieldset>
                                </div>
                            </div>
                            
                           
                            
                            
                            
                        </form>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Home