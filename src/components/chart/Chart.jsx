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
        <div className="ctx" style={{position: 'relative', width: 1200, height: 250, margin: 'auto'}}>
          <Line
              data= {{
                  labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
                  //labels: chart.chart_data?.map(x => x.hour_ending),
                  //labels: chart.chart_data?.map(x => x.hour_ending.substring(5, 16)),
                  //labels: chart.chart_data?.map(x => x.activity),
                  datasets: [{
                        label: 'Average Watts',
                        data: [55, 65, 43, 2, 23, 70, 1, 34, 69, 20, 11, 100],
                        //data: chart.chart_data?.map(x => x.average_watts),
                        backgroundColor: ['white'],
                        borderColor: ['#00cb8d'],
                        pointBorderColor: ['white'],
                        drawBorder: false,
                        lineTension: 0.4,
                        //stepped: true,
                        yAxisID: 'y',
                      },
                      {
                        label: '% From Fossil Fuels',
                        data: [0.6, 0.61, 0.45, 0.35, 0.5, 0.7, 0.3, 0.65, 0.3, 0.11, 0.23, 0.27],
                        //data: chart.chart_data?.map(x => x.perc_from_fossil_fuels),
                        borderColor: ['orange'],
                        backgroundColor: ['white'],
                        lineTension: 0.4,
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
                          text: 'Average Watts',
                          color: ['#00cb8d']
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
                          text: '% From Fossil Fuels',
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