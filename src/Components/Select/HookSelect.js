import React, { useState, useEffect, useContext } from "react";
import Select from "react-select";
import axios from 'axios';
import {TagContext} from '../../Context/TagContext';

const options = [
   { value: 'chocolate', label: 'Chocolate' },
   { value: 'strawberry', label: 'Strawberry' },
   { value: 'vanilla', label: 'Vanilla' },
];

export default function HookSelect() {
   const {getTags, addTag, tag} =useContext(TagContext)
   const [selectedOption, setSelectedOption] = useState(null);
   const [loadOptions, setLoadOptions] = useState([])

   
   // const [options, setOptions] = useState([{}])

   // const options = tag.map(v => ({
   //    label: v,
   //    value: v
   // }));


   useEffect(() => {
      // axios
      // .get("/api/tags")
      //    .then((res) => {
      //       setOptions(res.data)
      //    })
      //    .catch((err) => console.log(err))
         getTags()
         setLoadOptions({tag})
   },[])

   const handleClick = () => {
      setLoadOptions([...loadOptions, {tag}])
   }

   console.log(options, 'hook select')
   console.log(tag, 'tag hook select')

   return (
      <div className="App">
         <Select
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
         />
      </div>
   );
}