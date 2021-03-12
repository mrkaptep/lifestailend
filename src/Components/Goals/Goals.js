import React, {useState, useContext, useEffect} from 'react';
import{useHistory} from "react-router-dom";
import {GoalContext} from '../../Context/GoalContext'
import {AuthContext} from '../../Context/AuthContext'
import './Goals.scss'

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
      <div>
         Goals component

         {user && (

            <div className='goal content-box'>
               <div> 
                  <button onClick={() => push("/Goals/Edit")}>Add Goal</button>
               </div>
               {goals.map((goal, index) =>{
                  const newDate = new Date (goal.time_table)
                  const dateNew = new Date (goal.date_created)
                  return(
                     <div className="goalTemp" key={index}>
                        <div className='textForm'>
                           {/* <div className="goalId">Goal ID: {goal.goal_id} </div>
                           <div className="space"></div> */}
                           {/* <div className="dateSet">{dateNew.getMonth()}/{dateNew.getDate()}/{dateNew.getFullYear()} </div>
                           <div className="space"></div> */}
                           <div className="space"></div>
                           <div className="goalDateBox">
                              <span className="goalCom">Target</span>
                              <span className="space2"></span>
                              <div className="dateTarget">
                                 {newDate.getMonth()}/{newDate.getDate()}/{newDate.getFullYear()}
                              </div>
                           </div>
                           <div className="space"></div>
                           <div className="goalTitle">{goal.title} </div>
                           <div className="space"></div>
                           <div className="goalContent">{goal.content}</div>
                           <div className="space"></div>
                           <div className="buttonBox">
                              <button 
                                 className="goalButton"
                                 onClick={() => deleteGoal(goal.goal_id)}>delete</button>
                              <button
                                 className="goalButton"
                                 onClick={() =>{
                                 push(`/Goals/Edit/${goal.goal_id}`)
                              }
                              }>edit</button>
                           </div>
                        </div>
                     </div>
                  )   
               })}
            </div>
         )
         }
      </div>
      
   )

}

export default Goals;