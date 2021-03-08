import React, {useState, useEffect, useContext} from 'react';
import {PostContext} from '../../Context/PostContext';
import {AuthContext} from '../../Context/AuthContext';
import {TagContext} from '../../Context/TagContext';
import AsyncCreatableSelect from 'react-select/async-creatable';
import axios from 'axios';

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


const EditPost = (props) => {
   const {addPost} = useContext(PostContext)
   const {user} = useContext(AuthContext)
   // const {getTags, addTag, tag} =useContext(TagContext)
   const [title, setTitle] = useState("")
   const [content, setContent] = useState("")
   const [selectedOption, setSelectedOption] = useState();
   console.log(selectedOption)
   return (
      <div>
         Add Post component
         {user && 
            <form>
               <div>
                  <input
                     placeholder="Title"
                     value={title}
                     onChange={(e) => setTitle(e.target.value)}
                  />
               </div>
               <div>
               <AsyncCreatableSelect
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
               <div>
                  <input
                     placeholder="Content"
                     value={content}
                     onChange={(e) => setContent(e.target.value)}
                  />   
               </div>
               <button onClick={() => addPost({title, content, selectedOption})}>Submit</button>
            </form>
         }
      </div>
   )
}

export default EditPost;