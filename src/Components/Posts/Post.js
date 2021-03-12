import React, {useState, useContext, useEffect} from 'react';
import {PostContext} from '../../Context/PostContext'
import {AuthContext} from '../../Context/AuthContext'
import './Post.scss';

const Post = (props) => {
   const {post, setPost, getPosts, deletePost, addPost} = useContext(PostContext)
   const {user} = useContext(AuthContext)
   
   useEffect(() => {
      getPosts()
   }, [])

   console.log (post)

   // const postFilter = (post, string) => {
   //    filterByValue(post, 'plop')

   // // }

   return (
      <div>
         {user && 
            <div className='post content-box'>
         
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
                           <div className="title">{post.title} 
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
                           <div className="content">
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
               
         }
      </div>
   )
}
export default Post;