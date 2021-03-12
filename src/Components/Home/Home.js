import React, {useState, useContext} from 'react';
import {AuthContext} from '../../Context/AuthContext';
import Tailend from '../Tailend/Tailend';
import FamilyTime from '../FamilyTime/FamilyTime';
import Months from '../Months/Months';
import './Home.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPowerOff} from "@fortawesome/free-solid-svg-icons";
// import './Main.css';

library.add(
   faPowerOff,
)

const Home = (props) => {
   return (
      <div className="homeContainer">
         <div className="homeView">
            <div className="imgBox">
               <div className="lifeTextBox">
                  <div className="lifeTailendText">
                     Life's Tail End is a unique place where people can record life events, set goals, and track what is important to them.
                  </div>
                  <div className="lifeTailendText2">
                     Life's Tail End Goal is to help you make the most of the tailend by helping you track your daily adventures; relive past adventures; plan future ones with a purpose in mind.
                  </div>
               </div>
               <img className="img" src="https://us.123rf.com/450wm/belchonock/belchonock1212/belchonock121203765/16894995-business-woman-s-hands-typing-on-laptop-computer-on-white-background-close-up.jpg?ver=6"/>
               
            </div>
            <div>
               <div className="tailendText">
                  <b><i>
                     What does your Life's Tail End look like?
                  </i></b>
               </div>
               
            </div>
            <div className="box">
               <div className="chartContainer">
                  <div className="chart">
                     <Tailend></Tailend>
                  </div>
                  <div className="chart">
                     <Months/>
                  </div>
                  <div className="textContainer"> 
                        <div className="text">After looking at the charts, What crosses your mind?</div>
                        <div className="text">We tend to neglect the things that they assume will always be there.</div>
                        <div className="text">How are you spending your time?</div>
                        <div className="text">Is it on what is important?</div>
                  </div>
               </div>
            </div>
            <div className="box2">
               <div className="chartContainer2">
                  <div className="chart2">
                     <FamilyTime/>
                  </div>
                  <div className="textBox">
                     <div className="takeaway">
                        Three takeways:
                     </div>
                     <div className="takeawayText">
                        <b>1. Living in the same place as the people you love matters.</b> You'll probably have 10X the time left with the people who live in the same city as you do with the people who live somewhere else. 
                     </div>
                     <div className="takeawayText">
                        <b>2. Priorities matter.</b> Your remaining face time with any person depends largely on where that person falls on your list of life priorities. Make sure this list is set by you—not by unconscious inertia. 
                     </div>
                     <div className="takeawayText">
                        <b>3. Quality time matters.</b> If you’re in your last 10% of time with someone you love, keep that fact in the front of your mind when you’re with them and treat that time as what it actually is: precious. 
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )




}

export default Home;