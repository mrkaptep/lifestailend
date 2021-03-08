import React, {useState, useContext, useEffect} from 'react';
import{useHistory} from "react-router-dom";
import {GoalContext} from '../../Context/GoalContext'
import {AuthContext} from '../../Context/AuthContext'

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
                     <div key={index}>
                        <div>Goal ID: {goal.goal_id} </div>
                        <div>Goal Set: {dateNew.getMonth()}/{dateNew.getDate()}/{dateNew.getFullYear()} </div>
                        <div>Title: {goal.title} </div>
                        <div>Content: {goal.content}</div>
                        <div>Goal Target Date: {newDate.getMonth()}/{newDate.getDate()}/{newDate.getFullYear()} </div>
                        <button onClick={() => deleteGoal(goal.goal_id)}>delete</button>
                        <button onClick={() =>{
                           push(`/Goals/Edit/${goal.goal_id}`)
                        }
                        }>edit</button>
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