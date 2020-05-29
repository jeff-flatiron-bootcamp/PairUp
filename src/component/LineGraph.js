import React from 'react';
import {Line} from 'react-chartjs-2';

export default class LineGraph extends React.Component {
    state = {
        labels: ['January', 'February', 'March',
                 'April', 'May'],
        datasets: [
          {
            label: 'Score',
            fill: false,
            lineTension: 0.5,
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: this.props.scores
          }
        ]
      }

      componentDidMount(){
         let labels=[]
         for (let i=1; i<this.props.scores.length; i++){
            labels.push(i)
         }
         this.setState({labels: labels})
      }

  render() {
    return (
      <div className="chart">
        <Line
          data={this.state}
          options={{
            title:{
              display:true,
              text:'Your Scores Over Time',
              fontColor: "black",
              fontSize: 20
            },
            legend:{
              display:true,
              position:'left'
            }
          }}
        />
      </div>
    );
  }
}