import React, {useState, useEffect} from 'react';
import {Bar} from 'react-chartjs-2';
import './Months.scss'

//react chart js has a resize bug. When you resize browser the height grows indefinetly. 
//https://github.com/reactchartjs/react-chartjs-2/issues/334


const Months = (props) => {
   const [theAge, setTheAge] = useState(34)
   const [theLifeExpect, setTheLifeExpet] = useState(90)
   const monthsLeft = (theLifeExpect *12) - (theAge*12)

   const [barData, setBarData] = useState({labels: ['Months Left', 'Months Lived'],
   datasets: [
      {
         label: "Months",
         data: [
               (theLifeExpect *12) - (theAge*12),
               (theAge*12),
               0,
               (theLifeExpect *12)
         ],
         backgroundColor: [
               'rgb(220,243,255)',
               'rgb(162,210,223)'
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
         text: 'Tail End in Months',
         fontSize: 25
      },
      legend: {
         display: false,
         position: 'top'
      }
   })

   useEffect(() =>{
      setBarData({labels: ['Months Left', 'Months Lived'],
      datasets: [
         {
            label: 'Months',
            data: [
               (theLifeExpect *12) - (theAge*12),
               (theAge*12),
               0,
               (theLifeExpect *12)
         ],
         backgroundColor: [
               'rgb(220,243,255)',
               'rgb(162,210,223)'
         ],
            borderWidth: 3
         }
      ]
      })
   }, [theAge, theLifeExpect])

   return(
      <div className="monthComp">
         <Bar
            data={barData}
            options={barOptions} 
         />
         <div className="inputText">
            <span className="inputTitle">Enter Age:  </span>
            <input value={theAge} onChange={(e) => setTheAge(+e.target.value)}/>
         </div>
         <div className="inputText">
            <span  className="inputTitle">Life Expectancy:  </span>
            <input value={theLifeExpect} onChange={(e) => setTheLifeExpet(+e.target.value)}/>
         </div>
         <div className="monthText">
            <i>
               {monthsLeft} Months Left
            </i>
         </div>
      </div>
   )


}
export default Months;