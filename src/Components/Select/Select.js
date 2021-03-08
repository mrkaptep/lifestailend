import React, { Component } from "react";
import AsyncCreatableSelect from 'react-select/async-creatable';
import axios from 'axios';


class MySelect extends Component {
   constructor(props, context) {
      super(props, context);
      this.state = {
         selectedOption: {},
         // normalSelectOption: null,
      };
   }


   fetchData = (inputValue, callback) => {
      setTimeout(() => {
         axios
         .get("/api/tags")
         .then((res) => {
            return (res.data)
         })
         .then((data) => {
            const tempArray = [];
            if (data) {
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

   onSearchChange = (selectedOption) => {
      if (selectedOption) {
         this.setState({
            selectedOption,
         });
      }
   };

   onCreateOption = (tag)=> {
      console.log(tag)
      axios
      .post("/api/tag", {tag})
      // .then((this.fetchData()))
      // .catch(() => console.log("there was an error"))  
   };

   handleChange = (normalSelectOption) => {
      this.setState({ normalSelectOption });
   };


   render() {
      return (
         <div style={{ marginLeft: "40%", width: "200px" }}>
            

            <div>
               <p>Remote data</p>
               <AsyncCreatableSelect
                  value={this.state.selectedOption}
                  loadOptions={this.fetchData}
                  isMulti
                  isSearchable
                  placeholder="Tag"
                  onChange={(e) => {
                     this.onSearchChange(e);
                  }}
                  onCreateOption={(e)=> {
                     this.onCreateOption(e);
                  }}
                  defaultOptions={true}
               />
            </div>
         </div>
      );
   }
}

export default MySelect;