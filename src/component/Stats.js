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

        new Chart(myChartRef, {
            type: "bar",
            data: {
                //Bring in data
                labels: ["Easy", "Medium", "Hard"],
                datasets: [
                    {
                        label: "Number Solved",
                        data: [easy.length, medium.length, hard.length],
                        backgroundColor: ["green", "yellow", "red"]
                    },
                    {
                        label: "Average Score",
                        data: [easy.reduce((a,b) => a + b, 0)/easy.length, medium.reduce((a,b) => a + b, 0)/medium.length, hard.reduce((a,b) => a + b, 0) / hard.length],
                        backgroundColor: ["blue", "purple", "orange"]
                    }
                ]
            },
            options: {
                title: {
                    text: "Games Played per Difficulty Level", 
                    display: true
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