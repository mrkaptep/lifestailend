import React, {useState, useContext} from 'react';
import {AuthContext} from '../../Context/AuthContext';
import {useHistory, Switch, Route, Redirect} from "react-router-dom";
import Post from '../Posts/Post'
import Goal from '../Goals/Goals'
import EditGoal from '../EditGoal/EditGoal'
import AddPost from '../EditPost/AddPost'
import UploadS3 from '../UploadS3/UploadS3';
import Photos from '../Photos/Photos';
import './Main.scss';
import PostCarousel from '../Carousel/PostCarousel';
import GoalCarousel from '../Carousel/GoalCarousel';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserCircle, faUser, faLock, faEnvelope, faHome } from "@fortawesome/free-solid-svg-icons";


library.add(
   faUserCircle,
   faUser,
   faLock,
   faEnvelope,
   faHome
)



const Main = (props) => {
   const {push} = useHistory() 


   return (
      <div className="mainComp">
         <div className="mainBar">
            <div className="sidemenu">
               <div className="homebox">
                  <button
                     className="mainNav"
                     onClick={() => {
                        push(`/Main/Post`)}
                     }
                  >
                   Home  {/* <FontAwesomeIcon icon={["fa", "home"]}/> */}
                  </button>
               </div>
               <button 
                  className="mainNav"
                  onClick={() => {
                     push(`/Main/Post`)}
                  }
               >
                  Posts
               </button>
               <button 
                  className="mainNav"
                  onClick={() => {
                     push(`/Main/Goals`)}
                  }
               >Goals
               </button>
               {/* <button className="mainNav2">- Add Goal</button> */}
               <button
                  onClick={() => {
                     push(`/Main/Picture`)}
                  }
                  className="mainNav"
               >Pictures
               </button>

            </div>
         </div>
         <div className="mainContainer">
            <Switch>
               <Route exact path="/Main/Post" component={Post}/>
               <Route exact path="/Main/Post/Edit" component={AddPost}/>
               <Route exact path="/Main/Goals" component={Goal}/>
               <Route exact path="/Main/Goals/Edit" component={EditGoal}/>
               <Route exact path="/Main/Goals/Edit/:goal_id" component={EditGoal}/>
               <Route exact path="/Main/Picture" component={Photos}/>
               <Route exact path="/Main/Picture/Load" component={UploadS3}/>
               <Redirect to={{pathname: "/Main/Post"}}/>
            </Switch>
         </div>
         <div className="adContainer">
            <div className="postAds">
            <Route path="/Main/Post" component={PostCarousel}/>
            </div>
            <div className="goalAds">
            <Route exact path="/Main/Goals" component={GoalCarousel}/>
            <Route path="/Main/Goals/Edit" component={GoalCarousel}/>
            </div>
         </div>
      </div>
   )




}

export default Main;