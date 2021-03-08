import React, {useState, useContext, useEffect} from 'react';
import {PostContext} from '../../Context/PostContext'
import {AuthContext} from '../../Context/AuthContext'
// import './Post.css';

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
                     <div key={index}>
                        <div>Post ID: {post.post_id} </div>
                        <div>Date: {postDate.getMonth()}/{postDate.getDate()}/{postDate.getFullYear()} </div>
                        <div>Title: {post.title} </div>
                        <div>Tags: {post.tags.map((tag, index)=> {return (
                           <span key={index}>
                              <span>{tag.tag}</span>
                           </span>)})}</div>
                        <div>Content: {post.content}</div>
                        <button onClick={() => deletePost(post.post_id)}>delete</button>
                     </div> 
                  )
               })}
               
            </div>
               
         }
      </div>
   )
}
export default Post;