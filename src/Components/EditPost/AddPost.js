import React, {useState, useEffect, useContext} from 'react';
import {PostContext} from '../../Context/PostContext';
import {AuthContext} from '../../Context/AuthContext';
import {useHistory} from "react-router-dom";
import AsyncCreatableSelect from 'react-select/async-creatable';
import axios from 'axios';
import './AddPost.scss'

// import './Post.css';
const fetchData = (inputValue, callback) => {
   setTimeout(() => {
      axios
      .get("/api/tags")
      .then((res) => {
         return (res.data)
      })
      .then((data) => {
         const tempArray = [];
         if (data) {
            inputValue && (data = data.filter((tag) => tag.tag.toLowerCase().includes(inputValue.toLowerCase())))
            if (data.length) {
               data.forEach(({tag, tag_id}) => {
                  tempArray.push({
                     label: `${tag}`,
                     value: tag_id,
                  });
               });
            }
         }
         callback(tempArray);
      })
      .catch((error) => {
         console.log(error, "catch the hoop");
      });
   }, 1000);
};

const onCreateOption = (tag,selectedOption, setSelectedOption)=> {
   console.log(tag)
   axios
   .post("/api/tag", {tag}).then(({data:tags})=>{
      const tag = tags[0];
      setSelectedOption((selectedOption || []).concat({label:tag.tag,value:tag.tag_id}))
   })
};


const AddPost = (props) => {
   const {addPost} = useContext(PostContext)
   const {user} = useContext(AuthContext)
   const [title, setTitle] = useState("")
   const [content, setContent] = useState("")
   const [selectedOption, setSelectedOption] = useState();
   const {push} = useHistory() 
   console.log('select ---', selectedOption)

   return (
      <div>
         <div className="addPostHeader">
            Add Post
         </div>
         <div className="addPostContainer">
            <div className="addPostSpace"></div>
            <div className="addPostBox">
               <div className="addPostTitle">
                  <input
                     className="addPostInput"
                     placeholder="Title"
                     value={title}
                     onChange={(e) => setTitle(e.target.value)}
                  />
               </div>
               <div className="addPostSpace"></div>
               <div className="addPostTags">
                  <AsyncCreatableSelect
                     className="tagSelect"
                     value={selectedOption}
                     cacheOptions={false}
                     onChange={setSelectedOption}
                     createOptionPosition={'first'}
                     loadOptions={fetchData}
                     onCreateOption={(e)=> {
                        onCreateOption(e,selectedOption, setSelectedOption);
                     }}
                     isMulti={true}
                     isSearchable={true}
                     defaultOptions={true}
                  />
               </div>
               <div className="addPostSpace"></div>
               <div className="addPostContent">
                  <textarea
                     resize='vertical'
                     className="addPostInput"
                     placeholder="Journal Entry"
                     value={content}
                     onChange={(e) => setContent(e.target.value)}
                  />   
               </div>
               <div className="addPostSpace2"></div>
               <button 
                  className="addPostButton"
                  onClick={() => {
                     addPost({title, content, selectedOption})
                  push("/Main/Post")}
                  }
               >Submit</button>
            </div>
         </div>
      </div>
   )
}

export default AddPost;