import React, {useState, useContext, useEffect} from 'react';
import {AuthContext} from '../../Context/AuthContext';
import {Bar} from 'react-chartjs-2';


const FamilyTime = (props) => {
   const {user} = useContext(AuthContext)
   const [newLifeExpect, setNewLifeExpet] = useState(90)
   const [newAge, setNewAge] = useState(34)
   const percent = 7/(newLifeExpect-18)
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
      responsive: true,
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
                  100
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
      <div>
         <Bar
            data={barData}
            options={barOptions} />
         <div>
            <div>Data is dependent on you spending 7 days a year with your family after age of 18.</div>
            <span>Enter Age:  </span>
            <input value={newAge} onChange={(e) => setNewAge(+e.target.value)}/>
         </div>
         <div>
            <span>Life Expectancy:  </span>
            <input value={newLifeExpect} onChange={(e) => setNewLifeExpet(+e.target.value)}/>
         </div>
         <div>
            <div>
               <h3> If you had only {timeLeft} days left to spend with family, How would you spend it with them?</h3>
               <div>
                  <h4>The three takeways ares:</h4>
               </div>
               <div><b>1. Living in the same place as the people you love matters.</b> You'll probably have 10X the time left with the people who live in the same city as you do with the people who live somewhere else. </div>
               <div><b>2. Priorities matter.</b> Your remaining face time with any person depends largely on where that person falls on your list of life priorities. Make sure this list is set by you—not by unconscious inertia. </div>
               <div><b>3. Quality time matters.</b> If you’re in your last 10% of time with someone you love, keep that fact in the front of your mind when you’re with them and treat that time as what it actually is: precious. </div>
            </div>
         </div>
      </div> 
   )


}
export default FamilyTime;