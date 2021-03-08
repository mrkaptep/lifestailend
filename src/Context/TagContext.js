import axios from 'axios'
import React, {createContext, useState} from 'react'

export const TagContext = createContext(null)
export const TagProvider=(props) => {
   const [tag, setTag] = useState([])

   const getTags = () =>{
      axios
      .get("/api/tags")
      .then((res) => {
         console.log(res.data, 'get tags in context')
         setTag(res.data)
      })
         .catch(() => console.log("there was an error"))
   }

   const deleteTag = (tag_id) => {
      console.log(tag_id)
      axios
      .delete(`/api/tag/${tag_id}`)
      .then(_ => getTags())
      }

   const addTag = (body) => {
      axios
      .post("/api/tag", body)
      .then((res) => setTag(res.data))
      .catch(() => console.log("there was an error"))
   }

   return (
      <TagContext.Provider value={{tag, setTag, getTags, deleteTag, addTag}}>
         {props.children}
      </TagContext.Provider>
   )
}