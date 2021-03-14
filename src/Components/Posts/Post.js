import React, {useState, useContext, useEffect} from 'react';
import {PostContext} from '../../Context/PostContext'
import {useHistory} from "react-router-dom";
import './Post.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserCircle, faUser, faLock, faEnvelope, faHome, faPlus } from "@fortawesome/free-solid-svg-icons";


library.add(
   faUserCircle,
   faUser,
   faLock,
   faEnvelope,
   faHome,
   faPlus
)

const Post = (props) => {
   const {post, setPost, getPosts, deletePost, addPost} = useContext(PostContext)
   const {push} = useHistory() 
   
   useEffect(() => {
      getPosts()
   }, [])

   console.log (post)

   // const postFilter = (post, string) => {
   //    filterByValue(post, 'plop')

   // // }

   return (
      <div className="postMainContainer">
         <div className="postHeader">
            <div className="postHeaderText">
               Posts
            </div>
            <div className="addPostButtonBox">
            <button
                     className="postNav"
                     onClick={() => {
                        push(`/Main/Post/Edit`)}
                     }
                  >
                     <FontAwesomeIcon icon={["fa", "plus"]}/>  New Post
                  </button>
            </div>

         </div>
         <div className='postBox'>
            {post.map((post, index) => {
               const postDate = new Date (post.date_created)
               return(
                  <div className="postTemp" key={index}>
                     <div className='textForm'>
                        {/* <div className="postId">Post ID: {post.post_id} 
                        </div>
                        <div className="space"></div> */}
                        <div className="date">{postDate.getMonth()}/{postDate.getDate()}/{postDate.getFullYear()} 
                        </div>
                        <div className="space"></div>
                        <div className="postTitle">{post.title} 
                        </div>
                        <div className="space"></div>
                        <div className="tags">
                           {post.tags.map((tag, index)=>{
                              return (
                                 <span key={index}>
                                    <span className="tagme">{tag.tag}
                                    </span>
                                 </span>
                              )
                           })}
                        </div>
                        <div className="space"></div>
                        <div className="postContent">
                           {post.content}
                        </div>
                        <div className="space2"></div>
                        <button
                           className="postButton"
                           onClick={() => deletePost(post.post_id)}
                        >
                           delete
                        </button>
                     </div>
                  </div> 
               )
            })}
            
         </div>
      </div>
   )
}
export default Post;