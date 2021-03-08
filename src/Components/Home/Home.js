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
   const {logout, getUser} = useContext(AuthContext)
   return (
      <div>
         This is the Home component
         <div className="chartContainer">
            <div className="chart">
               <Tailend></Tailend>
            </div>
            <div className="chart">
               <Months/>
            </div>
         </div>
         <div>
            <div className="text"> 
                  <div>If knowing know you had only so many months or years left to live, Would you change anything?</div>
                  <div>Would you ask yourself what is important in your in your life?</div>
                  <div>The list could be long of what is important so let's narrow it down.</div>
                  <div>What are the five most important things in your life?</div>
                  <div>We tend to neglect the things that we assume will always be there.</div>
            </div>
         </div>
            <div className="chart2">
               <FamilyTime></FamilyTime>
            </div>
         
         
      </div>
   )




}

export default Home;