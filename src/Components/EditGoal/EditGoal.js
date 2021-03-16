import React, {useState, useContext, useEffect} from 'react';
import {GoalContext} from '../../Context/GoalContext';
import {AuthContext} from '../../Context/AuthContext';
import {useHistory, useParams, useLocation, useRouteMatch} from "react-router-dom";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import './EditGoal.scss'

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
      <div className="editFormBox">
         <div className="editGoalHeader">
            Edit Goal
         </div>
         <div className="editGoalTemp">
            <div className="editTextForm">
               <div className="editGoalSpace"></div>
               <div className="editGoalDateBox">
                  <span className="editGoalCom">Target Date</span>
                  <span className="editGoalSpace2"></span>
                  <div className="editDatePickerbox">
                     <DatePicker 
                        placeholder="Target Date"
                        className="editDate"
                        dateFormat="MMMM d, yyyy" 
                        selected={timeTable} 
                        onChange={date => setTimeTable(date)}
                        />
                  </div>
               </div>
               <div className="editGoalSpace"></div>
               <div className="editGoalTitlebox">
                  <input
                     className="editGoalTitle"
                     placeholder="Goal Title"
                     value={title}
                     onChange={(e) => setTitle(e.target.value)}
                  />
               </div>
               <div className="editGoalSpace"></div>
               <div className="contentbox">
                  <textarea
                     className="editGoalContent"
                     multiline={true}
                     placeholder="SMART Goal Details"
                     value={content}
                     onChange={(e) => setContent(e.target.value)}
                  />   
               </div>
               <div className="editGoalSpace"></div>
               
               <button 
                  className="editGoalButton"
                  onClick={() => {
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
                     push("/Main/Goals")
                  }
               }>Save</button>
            </div>
         </div>
   
      </div>
   )

}

export default EditGoal;