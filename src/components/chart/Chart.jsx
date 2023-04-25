import React, { useState, useEffect } from "react";
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale, //x axis
    LinearScale, //y axis
    PointElement,
    Tooltip
} from 'chart.js';

ChartJS.register(
    LineElement,
    CategoryScale, 
    LinearScale,
    PointElement,
    Tooltip
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
        {/*<div className="ctx" style={{position: 'relative', width: 730, height: 300, margin: 'auto'}}>*/}
        <div className="ctx" style={{position: 'relative', width: 1200, height: 300, margin: 'auto'}}>
          <Line
              data= {{
                  labels: chart.chart_data?.map(x => x.hour_ending),
                  //labels: chart.chart_data?.map(x => x.hour_ending.substring(0, 10)),
                  //labels: ['2023-02-16', '2023-02-17', '2023-02-18', '2023-02-19', '2023-02-20'],
                  datasets: [{
                      //data: [130, 145, 154, 140, 116],
                      label: 'Dataset 1',
                      data: chart.chart_data?.map(x => x.average_watts),
                      backgroundColor: ['white'],
                      borderColor: ['#00cb8d'],
                      pointBorderColor: ['white'],
                      drawBorder: false,
                      lineTension: 0.4,
                      yAxisID: 'y',
                      },
                      {
                        label: 'Dataset 2',
                        data: [130, 145, 154, 140, 116],
                        borderColor: ['orange'],
                        backgroundColor: ['white'],
                        yAxisID: 'y1',
                      }
                  ]
              }}

              options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  scales: {
                    y: {
                        grid: {
                          display: true
                        },
                        border: {
                          display: true
                        },
                        ticks: {
                          color: 'white'
                        },
                        title: {
                          display: true,
                          text: 'Avg Watts',
                          color: ['orange']
                        },
                        tooltip: {
                          enabled: true
                        }
                      },
                      y1: {
                        grid: {
                          display: false
                        },
                        border: {
                          display: true
                        },
                        ticks: {
                          color: 'white'
                        },
                        title: {
                          display: true,
                          text: 'Avg Watts',
                          color: ['orange']
                        },
                        tooltip: {
                          enabled: true
                        },
                        position: 'right'
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
                        },
                        min: 0,
                        max: 23
                      }
                  },
                  legend: {
                    labels: {
                      fontSize: 25,
                    },
                  }
                }}
          ></Line>
        </div>
      </div>
    )
  }
  
  export default Chart