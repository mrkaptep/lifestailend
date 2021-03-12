import React, {useState, useEffect} from 'react';
import {Bar} from 'react-chartjs-2';
import './Tailend.scss'


const Tailend = (props) => {
   const [age, setAge] = useState(34)
   const [lifeExpect, setLifeExpet] = useState(90)
   const [barData, setBarData] = useState({labels: ['Tailend', 'Age'],
   datasets: [
      {
         label: "Years",
         data: [
               lifeExpect - age,
               age,
               0,
               lifeExpect
         ],
         backgroundColor: [
               'rgba(255, 99, 132, 0.6)',
               'rgba(75, 192, 192, 0.6)'
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
         text: "Life's Tailend in Years",
         fontSize: 25
      },
      legend: {
         display: false,
         position: 'top'
      }
   })

   useEffect(() =>{
      setBarData({labels: ["Life's Tailend", 'Age'],
      datasets: [
         {
            label: 'Years',
            data: [
                  lifeExpect-age,
                  age,
                  0,
                  lifeExpect
            ],
            backgroundColor: [
                  'rgba(255, 99, 132, 0.6)',
                  'rgba(75, 192, 192, 0.6)'
            ],
            borderWidth: 3
         }
      ]
      })
   }, [age, lifeExpect])

   return(
      <div className="tailendComp">
         <Bar
            data={barData}
            options={barOptions} 
         />
         <div className="inputText">
            <span className="inputTitle">
               Enter Age:  
            </span>
            <input value={age} onChange={(e) => setAge(+e.target.value)}/>
         </div>
         <div className="inputText">
            <span className="inputTitle">
               Life Expectancy:  
            </span>
            <input value={lifeExpect} onChange={(e) => setLifeExpet(+e.target.value)}/>
         </div>
         <div className="tailText">
            <i>
               {lifeExpect - age} Years Left
            </i>
         </div>
      </div>
   )


}
export default Tailend;