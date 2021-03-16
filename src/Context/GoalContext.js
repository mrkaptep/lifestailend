import axios from 'axios'
import React, {createContext, useState} from 'react'

export const GoalContext = createContext(null)
export const GoalProvider=(props) => {
   const [goals, setGoals] = useState([]);
   const [goal, setGoal] = useState([{}]);


   const getGoals = () =>{
      axios
      .get("/api/goals")
      .then((res) => {
         setGoals(res.data)
      })
         .catch(() => console.log("there was an error"))
   }

   const getGoal = (goal_id) => {
      console.log('context goal..id ----', goal_id)
      return axios
      .get(`/api/goal/${goal_id}`)
      .then((res) => {
         setGoal(res.data[0])
         return res.data[0]
      })
      .catch(() => console.log("there was an error"))
   }

   const addGoal = (body) => {
      axios
      .post("/api/goal", body)
      .then((res) => setGoals(res.data))
      .catch(() => console.log("there was an error"))
      console.log('goalContext--', goal)
   }

   const deleteGoal = (goal_id) => {
      console.log('delete context------',goal_id)
      axios
      .delete(`/api/goal/${goal_id}`)
      .then(_ => getGoals())
      }


   const editGoal = (goal_id, body) => {
      axios
         .put(`/api/goal/${goal_id}`, body)
         .then((res) => setGoals(res.data))
         .catch(() => console.log("there was an error"))
   }

   return (
      <GoalContext.Provider value={{goal, setGoal, goals, setGoals, getGoals, deleteGoal, addGoal, editGoal, getGoal}}>
         {props.children}
      </GoalContext.Provider>
   )
}