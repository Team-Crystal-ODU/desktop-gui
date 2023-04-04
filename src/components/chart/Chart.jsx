import React, { useState, useEffect } from "react";
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
        <div style={{position: 'relative', width: 730, height: 300, margin: 'auto'}}>
          <Line
              data= {{
                  labels: chart.chart_data?.map(x => x.hour_ending),
                  //labels: chart.chart_data?.map(x => x.hour_ending.substring(0, 10)),
                  //labels: ['2023-02-16', '2023-02-17', '2023-02-18', '2023-02-19', '2023-02-20'],
                  datasets: [{
                      //data: [130, 145, 154, 140, 116],
                      data: chart.chart_data?.map(x => x.average_watts),
                      backgroundColor: ['white'],
                      borderColor: ['#00cb8d'],
                      pointBorderColor: ['white'],
                      drawBorder: false,
                      lineTension: 0.4
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
      </div>
    )
  }
  
  export default Chart