import React, {useState, useContext, useEffect} from 'react';
import {GoalContext} from '../../Context/GoalContext';
import {AuthContext} from '../../Context/AuthContext';
import {useHistory, useParams, useLocation, useRouteMatch} from "react-router-dom";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";

const EditGoal = (props) => {
   const [title, setTitle] = useState("")
   const [content, setContent] = useState("")
   const [timeTable, setTimeTable] = useState("")
   const {addGoal, editGoal, goal, getGoal} = useContext(GoalContext)
   const {user} = useContext(AuthContext)
   const {push} = useHistory();

   useEffect (async() =>{
      const goal = await getGoal(props.match.params.goal_id)
      setTitle(goal.title)
      setContent(goal.content)
      setTimeTable(new Date(goal.time_table))
   }, [])


   return (
      <div>
         EDIT Goals component
         {user && (
            <div>
               <div>
                  <input
                     placeholder="Title"
                     value={title}
                     onChange={(e) => setTitle(e.target.value)}
                  />
               </div>
               <div>
                  <input
                     placeholder="Content"
                     value={content}
                     onChange={(e) => setContent(e.target.value)}
                  />   
               </div>
               <div>
                  <DatePicker dateFormat="MMMM d, yyyy" 
                     selected={timeTable} 
                     onChange={date => setTimeTable(date)}
                     />
               </div>
               <button onClick={() => {
                  (
                     goal.goal_id ?
                     editGoal(goal.goal_id,{
                        title,
                        content,
                        timeTable,
                        goal_id:goal.goal_id
                     }) :
                     addGoal({title, content, timeTable})
                  )
                  push("/Goals")
               }}>Save</button>
            </div>
   
         )}
      </div>
   )

}

export default EditGoal;