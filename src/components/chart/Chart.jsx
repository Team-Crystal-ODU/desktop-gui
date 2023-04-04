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
    const [chart, setChart] = useState([]);
    useEffect(() => {
      fetch('http://localhost:4005/carbon?user=ecogamer')
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            setChart(data);
          })
          .catch((err) => {
            console.log(err.message);
          });
    }, []);

    return (
      <div>
        <Line
            data= {{
                //labels: ['Sun', 'Mon', 'Tues', 'Weds', 'Thurs', 'Fri', 'Sat'],
                labels: chart.chart_data?.map(x => x.hour_ending),
                datasets: [{
                    //data: [100, 45, 19, 3, 5, 20, 10],
                    data: chart.chart_data?.map(x => x.average_watts),
                    backgroundColor: ['white'],
                    borderColor: ['#00cb8d'],
                    pointBorderColor: ['white'],
                    drawBorder: false,
                    }
                ]
            }}
            options={{
                responsive: true,
                maintainAspectRatio: false,
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