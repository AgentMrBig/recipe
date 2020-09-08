import React, { useState, useEffect } from 'react';
import {Line,Pie} from 'react-chartjs-2';

const MacroChart = () => {
    const [chartData, setChartData] = useState({});

    const pieChart = () =>{
        setChartData({
            labels: ['Fat', 'Carbs', 'Protien'],
            datasets: [
                {
                    label: 'Macros',
                    data: [75, 5, 20],
                    backgroundColor:[
                        
                        'rgba(248, 235, 169, 0.85)',
                        'rgba(153, 214, 106, 0.85)',
                        'rgba(241, 64, 64, 0.85)'
                    ],
                    borderWidth: 4
                }
            ]
        })
    }

    const lineChart = () =>{
        setChartData({
            labels: ['monday', 'tuesday', 'bitch'],
            datasets: [
                {
                    label: 'level of thickness',
                    data: [32,55,88],
                    backgroundColor:[
                        'rgba(75,192, 192, 0.6)'
                    ],
                    borderWidth: 4
                }
            ]
        })
    }

    useEffect(() => {
        pieChart()
    },[])

    return(
        
            
        <div style={{height: "100%", width: "100%"}}>
            <Pie data={chartData} options={{
                responsive: true,
                title: {text: 'Macro Ratios', display: true},
                scales:{
                    yAxes: [
                        {
                            ticks: {
                                display:false
                            },
                            gridLines: {
                                display:false
                            }
                        }
                    ],
                    xAxes: [
                        {
                            ticks: {
                                display: false
                            },
                            gridLines:{
                                display:false
                            }
                        }
                    ]
                }
            }}/>
        </div>
        
    )
}

export default MacroChart;