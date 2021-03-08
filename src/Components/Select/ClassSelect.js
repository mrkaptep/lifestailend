import React, { Component } from 'react';
import CreatableSelect from 'react-select/creatable';
import axios from 'axios'


class ClassSelect extends Component {
   constructor(props, context) {
      super(props, context);
      this.state = {
         selectedOption: {},
         tags: []
         // normalSelectOption: null,
      };
   }
   componentDidMount() {
      axios
         .get("/api/tags")
         .then(res => {
            this.setState({
               tags: res.data
            })
            console.log("hello", this.state.tags)
         })
   }


   onSearchChange = (selectedOption) => {
      if (selectedOption) {
         this.setState({
            selectedOption,
         });
      }
   };

   onCreateOption = (tag)=> {
      console.log(tag, 'onCreate before axios')
      axios
      .post("/api/tag", {tag})
   };

   handleChange = (normalSelectOption) => {
      this.setState({ normalSelectOption });
   };



   render() {
      let options = this.state.tags.map(function (tags) {
         return { value: tags.tag_id, label: tags.tag };
         })
      return (
         <CreatableSelect
            cacheOptions={false}
            defaultOptions
            options={options}
            onCreateOption={(e)=> {
               this.onCreateOption(e);
            }}
            isMulti
            isSearchable
         />
      );
   }
}
export default ClassSelect;