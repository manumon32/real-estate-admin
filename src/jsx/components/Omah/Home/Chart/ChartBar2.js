import React from 'react'

import ReactApexChart from 'react-apexcharts'

class ApexBar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      series: [
        {
          name: 'series1',
          data: [800, 440, 360, 510, 420, 680, 400, 200, 700],
        },
      ],
      chart: {
        height: 350,
        type: 'area',
        toolbar: false,
      },
      options: {
        chart: {
          type: 'bar',
          height: 230,
          toolbar: {
            show: false,
          },
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '60%',
            endingShape: 'flat',
          },
        },

        colors: ['#FF9432', '#1EA7C5'],
        legend: {
          show: false,
          position: 'top',
          horizontalAlign: 'left',
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: 'smooth',
          width: 5,
          colors: ['#3B4CB8'],
        },
        legend: {
          show: false,
        },
        markers: {
          size: 0,
          border: 0,
          colors: ['#3B4CB8'],
          hover: {
            size: 8,
          },
        },
        yaxis: {
          labels: {
            style: {
              colors: '#3e4954',
              fontSize: '14px',
              fontFamily: 'Poppins',
              fontWeight: 100,
            },
            formatter: function (y) {
              return y.toFixed(0) + 'k'
            },
          },
        },
        xaxis: {
          type: 'month',
          categories: [
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
          ],
        },
        colors: ['#3B4CB8'],
        fill: {
          colors: ['#3B4CB8'],
        },
        tooltip: {
          x: {
            format: 'month',
          },
        },
      },
    }
  }

  render() {
    return (
      <div id='chart'>
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type='area'
          height={350}
          // responsive={this.state.responsive}
        />
      </div>
    )
  }
}
export default ApexBar
