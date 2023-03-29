import React, { useState, useEffect } from "react";
import './chart.css';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale, //x axis
    LinearScale, //y axis
    PointElement
} from 'chart.js';

ChartJS.register(
    LineElement,
    CategoryScale, 
    LinearScale,
    PointElement
)

const Chart = () => {
    // fetch world space api data
    const [users, setUser] = useState([]);
    useEffect(() => {
      fetch('http://localhost:4005/carbon?user=ecogamer')
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            setUser(data);
          })
          .catch((err) => {
            console.log(err.message);
          });
    }, []);
    return (
      <div>
        <Line
            data= {{
                labels: ['Sun', 'Mon', 'Tues', 'Weds', 'Thurs', 'Fri', 'Sat'],
                datasets: [{
                    data: [100, 45, 19, 3, 5, 20, 10],
                    //data: [users.ppm],
                    backgroundColor: ['white'],
                    borderColor: ['#00cb8d'],
                    pointBorderColor: ['white'],
                    drawBorder: false,
                    }
                ]
            }}
            options={{
                responsive: true,
                maintainAspectRatio: true,
                scales: {
                  y: {
                      grid: {
                        display: false
                      },
                      border: {
                        display: false
                      },
                      ticks: {
                        color: 'white'
                      },
                      title: {
                        display: true,
                        text: 'Avg Watts',
                        color: ['orange']
                      }
                    },
                  x:{
                      grid: {
                        display: false
                      },
                      border: {
                        display: false
                      },
                      ticks: {
                        color: 'white'
                      }
                    }
                },
                legend: {
                  labels: {
                    fontSize: 25,
                  },
                },
              }}

        ></Line>
      </div>
    )
  }
  
  export default Chart