import React, { useState } from "react";
import axios from "axios";
import { v4 as randomString } from "uuid";
import { GridLoader } from 'react-spinners';

const UploadS3 = (props) => {
   const [url, changeURL] = useState();

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
   };


   return (



      <div className={props.className || ""}>
         <form>
            <img alt="" src={url} className="preview" />
            <input
               type="file"
               id="file"
               accept="image/png, image/jpeg"
               onChange={() => getSignedRequest()}
            />
            <label htmlFor="file" className="fileInput">
               Choose a file
            </label>

         </form>
      </div>
   );
}


export default UploadS3;