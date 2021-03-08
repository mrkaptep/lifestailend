import React, {useState, useEffect} from 'react';
import {Bar} from 'react-chartjs-2';


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
      responsive: true,
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
         text: "Life's Tailend",
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
                  90
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
      <div>
         <Bar
            data={barData}
            options={barOptions} />
            <div>
               <span>Enter Age:  </span>
               <input value={age} onChange={(e) => setAge(+e.target.value)}/>
            </div>
            <div>
               <span>Life Expectancy:  </span>
               <input value={lifeExpect} onChange={(e) => setLifeExpet(+e.target.value)}/>
            </div>
      </div>
   )


}
export default Tailend;