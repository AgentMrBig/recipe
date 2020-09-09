import React,{useEffect, useState} from 'react';
import {Line,Pie} from 'react-chartjs-2';

const TotalDaily = (props) =>{
    const [chartData, setChartData] = useState({});
    var fat;
    var carbs;
    var protien;

    var fatPercent;
    var carbsPercent;
    var protienPercent;

    var macTotal;

    var totalPercent;

    const calcMacros = (fat, carbs, protien) => {
        macTotal = fat + carbs + protien;
        var fatP = (fat / macTotal) * 100;
        var carbsP = (carbs / macTotal) * 100;
        var protienP = (protien / macTotal) * 100;

        fatPercent = parseInt(fatP.toFixed(2));
        carbsPercent = parseInt(carbsP.toFixed(2));
        protienPercent = parseInt(protienP.toFixed(2));

        var totalPercent = fatPercent + carbsPercent  + protienPercent;
        setHundoP();
        
    }

    const setHundoP = () => {
        var tmpTotal = carbsPercent + fatPercent + protienPercent;
        if(tmpTotal != 100){   
            var tmpVal = 100 - fatPercent - protienPercent
            carbsPercent = tmpVal;
            totalPercent = carbsPercent + fatPercent + protienPercent;
            //console.log('tmpTotal was < 100. newTotalPercent ' + totalPercent);
        }
        //console.log('tmpTotal ' + tmpTotal);
    }

    const getMacros = () => {
        {Object.keys(props.totalDailyInfo).map(key => {
            if(props.totalDailyInfo[key].label === 'Fat'){
                fat = props.totalDailyInfo[key].quantity;
            }else if(props.totalDailyInfo[key].label === 'Carbs'){
                carbs = props.totalDailyInfo[key].quantity;
            }else if(props.totalDailyInfo[key].label === 'Protein'){
                protien = props.totalDailyInfo[key].quantity;
            }
        })}

        calcMacros(fat, carbs, protien);
        totalPercent = fatPercent + carbsPercent + protienPercent;
        //console.log('fat is ' + fatPercent + ' %', 'carb is ' + carbsPercent + ' %', 'protien is ' + protienPercent + ' %');   
        //console.log('totalPercent = ' + totalPercent);
    }

    const pieChart = () =>{
        setChartData({
            labels: ['Fat', 'Carbs', 'Protien'],
            datasets: [
                {
                    label: 'Macros',
                    data: [fatPercent, carbsPercent, protienPercent],
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

    useEffect(() => {
        getMacros()
        pieChart()
      }, []);

    const pieMacro = () => {
        return(
            <div style={{height: "100%", width: "100%"}}>
            <Pie data={chartData} options={{
                responsive: true,
                title: {text: 'Macro % Ratios', display: true},
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

    const dailyInfo = () => {
        return(
            <div>
                {Object.keys(props.totalDailyInfo).map(key => (
                <li 
                    key={key}>
                        {props.totalDailyInfo[key].label}:  {props.totalDailyInfo[key].quantity.toFixed(2)} {props.totalDailyInfo[key].unit}
                </li> 
            ))}
            </div>
        )
    }

    return(
        <div>
            {props.displayFlag ? pieMacro() : dailyInfo()}

        </div>
    )

}

export default TotalDaily;
