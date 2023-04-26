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
        <div className="ctx" style={{position: 'relative', width: 1200, height: 300, margin: 'auto'}}>
          <Line
              data= {{
                  //labels: ['2023-02-16', '2023-02-17', '2023-02-18', '2023-02-19', '2023-02-20'],
                  //labels: chart.chart_data?.map(x => x.hour_ending),
                  //labels: chart.chart_data?.map(x => x.hour_ending.substring(5, 16)),
                  labels: chart.chart_data?.map(x => x.activity),
                  datasets: [{
                        label: 'Average Watts',
                        data: chart.chart_data?.map(x => x.average_watts),
                        backgroundColor: ['white'],
                        borderColor: ['#00cb8d'],
                        pointBorderColor: ['white'],
                        drawBorder: false,
                        lineTension: 0.4,
                        stepped: true,
                        yAxisID: 'y',
                      },
                      {
                        label: '% From Fossil Fuels',
                        data: chart.chart_data?.map(x => x.perc_from_fossil_fuels),
                        borderColor: ['orange'],
                        backgroundColor: ['white'],
                        yAxisID: 'y1',
                      }
                  ]
              }}

              options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  //tooltips: {
                  //  enabled: true,
                  //  callbacks: {
                  //    footer: (context) => {
                  //      const activity = ['line 1', 'line 2'];
                  //      return activity;
                  //    }
                  //  }
                  //},
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