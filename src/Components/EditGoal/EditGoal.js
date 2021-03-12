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
      <div>
         {user && (
            <div className="goalTemp">
               <div className="textForm">
                  <div className="space"></div>
                  <div className="goalDateBox">
                     <span className="goalCom">Target Date</span>
                     <span className="space2"></span>
                     <div className="datebox">
                        <DatePicker 
                           placeholder="Target Date"
                           className="date"
                           dateFormat="MMMM d, yyyy" 
                           selected={timeTable} 
                           onChange={date => setTimeTable(date)}
                           />
                     </div>
                  </div>
                  <div className="space"></div>
                  <div className="titlebox">
                     <input
                        className="title"
                        placeholder="Goal Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                     />
                  </div>
                  <div className="space"></div>
                  <div className="contentbox">
                     <input
                        className="content"
                        multiline={true}
                        placeholder="SMART Goal Details"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                     />   
                  </div>
                  <div className="space"></div>
                  
                  <button 
                     className="button"
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
                        push("/Goals")
                     }
                  }>Save</button>
               </div>
            </div>
   
         )}
      </div>
   )

}

export default EditGoal;