import React, { useEffect, useState } from "react";
import axios from "axios";
import { v4 as randomString } from "uuid";
import './UploadS3.scss'
import {useHistory} from "react-router-dom";



const UploadS3 = (props) => {
   const [url, changeURL] = useState();
   const {push} = useHistory() 

   const getSignedRequest = () => {
      let file = document.getElementById("file").files[0];
      console.log(file);
      const fileName = `${randomString()}-${file.name.replace(/\s/g, "-")}`;
      axios
      .get("/api/aws3", {
         params: {
            "file-name": fileName,
            "file-type": file.type
         }
      })
      .then(res => {
         const { signedRequest, url } = res.data;
         uploadFile(file, signedRequest, url);
      })
      .catch(err => console.log(err));
   };

   const uploadFile = (file, signedRequest, url) => {
      const options = {
         headers: {
            "Content-Type": file.type
         }
      };
      console.log(signedRequest, file, options);

      axios
      .put(signedRequest, file, options)
      .then(res => {
         changeURL(url);
         // props.changeImage(url);
         console.log('upload response',res);
         axios
         .post("/api/photo", ({photo_link:url}))
      })
      .catch(err => {
         console.log(err);
      });
      push('/Main/Picture')
   };

   
   return (


      <div className="aws3">
         <div className="photoAddSpace2"></div>
         <div className="addPicture">
            <div className="photoAddSpace2"></div>
            <img src={url} className="preview" />
            {/* <div>

            </div> */}
            <input
               className="addAWSNav"
               type="file"
               id="file"
               accept="image/png, image/jpeg"
               onChange={() => getSignedRequest()}
            />
         </div> 
         <div className="photoSpace2"></div>      
            <label htmlFor="file" className="fileInput">
            </label>
            {/* <div className="photoAddSpace2"></div> */}
      </div>
   );
}


export default UploadS3;