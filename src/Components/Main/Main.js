import React, {useState, useContext} from 'react';
import {AuthContext} from '../../Context/AuthContext';
import axios from 'axios';
import {Link} from "react-router-dom";
import Post from '../Posts/Post'
import './Main.scss';


const Main = (props) => {
   const {logout, getUser} = useContext(AuthContext)
   const [postVisible, setPostVisible] = useState(false)
   const [addPosit]
   const [goalVisible, setGoalVisible] = useState(false) 
   return (
      <div className="mainComp">
         <div className="mainBar">
            <div className="sidemenu">
               <button className="mainNav">Post</button>
               <button className="mainNav2">- Add Post</button>
               <button className="mainNav">Goals</button>
               <button className="mainNav2">- Add Goal</button>
               <button className="mainNav">Pictures</button>

            </div>
         </div>
         <div className="mainContainer">
            <Link to="/Home">Home</Link>
            <Link to="/post">Post</Link>
            <Link to="/goals">Goals</Link>
            <Link to="/Uploads3">Upload S3</Link>
            <div className="postComp">
               <Post/>
            </div>
         </div>
      </div>
   )




}

export default Main;