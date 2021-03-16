import React, {useState, useContext, useEffect} from 'react';
import {AuthContext} from '../../Context/AuthContext';
import {Bar} from 'react-chartjs-2';
import './FamilyTime.scss'

//react chart js has a resize bug. When you resize browser the height grows indefinetly. 
//https://github.com/reactchartjs/react-chartjs-2/issues/334


const FamilyTime = (props) => {
   const {user} = useContext(AuthContext)
   const [newLifeExpect, setNewLifeExpet] = useState(90)
   const [newAge, setNewAge] = useState(34)
   const timeLeft = (newLifeExpect-newAge)*7
   const timeSpent = (newAge-18)*7
   const [barData, setBarData] = useState({
      labels: ['Time Spent by 18', 'Time spent', 'Time Left'],
      datasets: [
         {
            label: 'Days',
            data: [
                  6552,
                  112,
                  392,
                  0,
                  6600
            ],
            backgroundColor: [
                  'rgb(77, 200, 245)',
                  'rgb(71, 244, 206)',
                  'rgb(240,135,250)'
            ],
            borderWidth: 3
         }
      ]
   });

   const [barOptions, setBarOptions] = useState({
      maintainAspectRatio: false,
      scales: {
         yAxes: [
            {
               ticks: {
                  beginAtZero: true,
                  
               }
            }
         ]
      },
      title: {
         display: true,
         text: 'Time Spent with Family in days',
         fontSize: 25
      },
      legend: {
         display: false,
         position: 'top'
      }
   })

   useEffect (() => {
      setBarData({labels: ['Time Spent by 18', 'Time spent after 18', 'Time Left'],
      datasets: [
         {
            label: 'Days',
            data: [
                  6552,
                  timeSpent,
                  timeLeft,
                  0,
                  6600
            ],
            backgroundColor: [
                  'rgb(77, 200, 245)',
                  'rgb(71, 244, 206)',
                  'rgb(240,135,250)'
            ],
            borderWidth: 3
         }
      ]
      })
   }, [newAge, newLifeExpect, timeLeft, timeSpent])

   return(
      <div className="familyComp">
         <Bar
            data={barData}
            options={barOptions}
         />
         <div className="dataText">
            * Data is dependent on spending 7 days a year with your family after age of 18.
         </div>
         <div className="inputText">
            <span className="inputTitle">
               Enter Age:
            </span>
            <input value={newAge} onChange={(e) => setNewAge(+e.target.value)}/>
         </div>
         <div className="inputText">
            <span className="inputTitle">
               Life Expectancy:
            </span>
            <input value={newLifeExpect} onChange={(e) => setNewLifeExpet(+e.target.value)}/>
         </div>
         <div className="familyText">
            <i><b>{timeLeft} days</b> left to spend with family which is equivilant to <b>{timeLeft/7} weeks</b> or <b>{parseFloat((timeLeft/365)).toFixed(2)} Year(s)</b>
            </i>
         </div>
      </div> 
   )


}
export default FamilyTime;