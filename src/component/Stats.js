//npm install chart.js --save
import Chart from 'chart.js';
import React, { Component } from 'react'
import classes from "./Stats.css";

//solve time by difficulty level

export default class LineGraph extends Component {
    chartRef = React.createRef();
    
    componentDidMount() {
        const myChartRef = this.chartRef.current.getContext("2d");
        // debugger
        let {easy, medium, hard} = this.props.scores

        function average(array){
            return Math.round(array.reduce((a,b) => a + b, 0)/array.length)
        }

        new Chart(myChartRef, {
            type: "bar",
            data: {
                labels: ["Easy", "Medium", "Hard"],
                datasets: [
                    {
                        label: "Total Number Solved",
                        data: [easy.length, medium.length, hard.length],
                        backgroundColor: ["#60a3bc", "#60a3bc", "#60a3bc"]
                    },
                    {
                        label: "Average Score",
                        data: [average(easy), average(medium), average(hard)],
                        backgroundColor: ["#c0392b", "#c0392b", "#c0392b"]
                    }
                ]
            },
            options: {
                title: {
                    text: "Games Stats By Difficulty Level", 
                    display: true,
                    fontColor: "black",
                    fontSize: 30
                },
                legend: {
                    display: true,
                    labels: {
                        fontColor: 'black',
                        fontSize: 20
                    }
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            fontSize: 20
                        }
                    }],
                    xAxes: [{
                        ticks: {
                            fontSize: 20
                        }
                    }]
                }
            }
        });
    }
    render() {
        return (
            <div className={classes.graphContainer}>
                <canvas
                    id="myChart"
                    ref={this.chartRef}
                />
            </div>
        )
    }
}