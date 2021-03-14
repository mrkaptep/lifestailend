import React, { useEffect, useState } from "react";
import axios from "axios";
import {useHistory} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserCircle, faUser, faLock, faEnvelope, faHome } from "@fortawesome/free-solid-svg-icons";
import './Photos.scss'

library.add(
   faUserCircle,
   faUser,
   faLock,
   faEnvelope,
   faHome
)



const Photos = (props) => {
   const [databaseUrl, setDatabaseUrl] = useState();
   const {push} = useHistory() 

   useEffect(() => {
      axios
      .get("/api/photos")
      .then((res) => {
         console.log(res.data, 'get photos in context')
         setDatabaseUrl(res.data)
      })
         .catch(() => console.log("there was an error"))
   },[])

      console.log('photo----', databaseUrl)

      return (

         <div className="photoContainer">
            <div className="photoHeader">
               <div className="photoHeaderText">
                  Photos
               </div>
               <div className="addPhotoButtonBox">
                  <button
                        className="addPhotoNav"
                        onClick={() => {
                           push(`/Main/Picture/Load`)}
                        }
                     >
                        <FontAwesomeIcon icon={["fa", "plus"]}/>  New Photo
                  </button>
               </div>  
            </div>
            <div className='photoMapBox'>
               <div className="photoFormBox">
                  {databaseUrl?.map((dataurl, index) =>{
                     const newURLDate = new Date (dataurl.date_created)
                     return(
                        <div className="awsPhoto" key={index}>
                           <div className="photoSpace2"></div>
                           <div className="photoDate">{newURLDate.getMonth()}/{newURLDate.getDate()}/{newURLDate.getFullYear()}
                           </div>
                           <div className="photoSpace"></div>
                           <div className="photoLinkBox">
                              <img 
                                 className="imgPhoto"
                                 src={dataurl.photo_link}/>
                           </div>
                           <div className="photoSpace2"></div>
                        </div>
                     )
                  })}
               </div>
            </div>
         </div>

      )

}

export default Photos;