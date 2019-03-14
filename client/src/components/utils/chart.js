import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';

class Chart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chartData: {},
      budgetPeriod: this.props.period,
      totalIncome: this.props.income,
      colors: [
        'yellow',
        'blue',
        'red',
        'green',
        'purple',
        'pink',
        'orange',
        'brown',
        'grey',
        'turquoise',
        'beige',
        'cyan',
        'lime',
        'magenta',
        'mistyrose'
      ]
    };
  }

  componentDidMount() {
    const labels = this.props.categories.map(l => {
      const name = l.cateName;
      return name;
    });

    const data = this.props.categories.map(l => {
      const input = l.incomeInput;
      return input;
    });

    let colorsArr = [];
    let i = 0;
    labels.forEach(() => {
      colorsArr.push(this.state.colors[i]);
      i++;
    });

    this.setState({
      chartData: {
        labels: labels,
        datasets: [
          {
            label: this.props.name,
            data: data,
            backgroundColor: colorsArr
          }
        ]
      }
    });
  }

  static defaultProps = {
    displayLegend: true,
    legendPosition: 'bottom'
  }

  render() {
    return (
      <>
        {Object.entries(this.state.chartData).length !== 0 &&
        this.state.chartData.constructor === Object ? (
          <Doughnut data={this.state.chartData} options={{
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition
            }
          }} />
        ) : (
          <></>
        )}
      </>
    );
  }
}

export default Chart;
