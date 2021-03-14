import React, {useState, useContext, useEffect} from 'react';
import{useHistory} from "react-router-dom";
import {GoalContext} from '../../Context/GoalContext'
import {AuthContext} from '../../Context/AuthContext'
import './Goals.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserCircle, faUser, faLock, faEnvelope, faHome, faPlus } from "@fortawesome/free-solid-svg-icons";


library.add(
   faUserCircle,
   faUser,
   faLock,
   faEnvelope,
   faHome,
   faPlus
)

const Goals = (props) => {
   const {goals, getGoals, deleteGoal, addGoal, editGoal, getGoal} = useContext(GoalContext)
   const {user} = useContext(AuthContext)
   const [title, setTitle] = useState("")
   const [content, setContent] = useState("")
   const [timeTable, setTimeTable] = useState("")
   const {push} = useHistory()

   useEffect(() => {
      getGoals()
   }, [])

   return (
      <div className="goalMainContainer">
         <div className="goalsHeader">
            <div className="goalHeaderText">
               Goals
            </div>
            <div className="addGoalButtonBox">
            <button
                     className="editGoalNav"
                     onClick={() => {
                        push(`/Main/Goals/Edit`)}
                     }
                  >
                     <FontAwesomeIcon icon={["fa", "plus"]}/>  New Goal
                  </button>
            </div>
         </div>
            <div className='goalBox'>
               {goals.map((goal, index) =>{
                  const newDate = new Date (goal.time_table)
                  const dateNew = new Date (goal.date_created)
                  return(
                     <div className="goalTemp" key={index}>
                        <div className='goalTextForm'>
                           {/* <div className="space"></div> */}
                           <div className="goalDateBox">
                              <span className="goalCom">Target Date</span>
                              <span className="goalSpace2"></span>
                              <div className="dateTarget">
                                 {newDate.getMonth()}/{newDate.getDate()}/{newDate.getFullYear()}
                              </div>
                           </div>
                           <div className="goalSpace"></div>
                           <div className="goalTitle">{goal.title} </div>
                           <div className="goalSpace"></div>
                           <div className="goalContent">{goal.content}</div>
                           <div className="goalSpace"></div>
                           <div className="buttonBox">
                              <button 
                                 className="goalButton"
                                 onClick={() => deleteGoal(goal.goal_id)}>delete</button>
                              <button
                                 className="goalButton"
                                 onClick={() =>{
                                 push(`/Main/Goals/Edit/${goal.goal_id}`)
                              }
                              }>edit</button>
                           </div>
                        </div>
                     </div>
                  )   
               })}
            </div>
      </div>
      
   )

}

export default Goals;