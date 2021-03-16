import axios from 'axios'
import React, {createContext, useState} from 'react'

export const PostContext = createContext(null)
export const PostProvider=(props) => {
   const [post, setPost] = useState([])
   


   const getPosts = (search) =>{
      const fullSearch = '?search='+ search
      axios
      .get(`/api/posts${search ? fullSearch: ''}`)
      .then((res) => {
         setPost(res.data)
      })
         .catch(() => console.log("there was an error"))
   }

   const deletePost = (post_id) => {
      axios
      .delete(`/api/post/${post_id}`)
      .then(_ => getPosts())
      }


   const addPost = (body) => {
      axios
      .post("/api/post", body)
      .then((res) => setPost(res.data))
      .catch(() => console.log("there was an error"))
   }

   // const editPost = (post_id, body) => {
   //    axios
   //    .put(`/api/post/${post_id}`, body)
   //    .then((res) => setPost(res.data))
   //    .catch(() => console.log("there was an error"))
   // }

   return (
      <PostContext.Provider value={{post, setPost, getPosts, deletePost, addPost}}>
         {props.children}
      </PostContext.Provider>
   )
}