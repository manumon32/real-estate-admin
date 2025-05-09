import React, { Component } from "react";
import { Line } from "react-chartjs-2";

class WeeklySales1 extends Component {
  render() {
    const data = {
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [
        {
          label: "Sales Stats",
          backgroundColor: "rgba(251,62, 122, .6)",
          borderColor: "#FB3E7A",
          pointBackgroundColor: "#FB3E7A",
          pointBorderColor: "#FB3E7A",
          pointHoverBackgroundColor: "#FB3E7A",
          pointHoverBorderColor: "#FB3E7A",
		  fill:true,
          data: [0, 18, 14, 20, 16, 26],
        },
      ],
    };

    const options = {
      plugins:{
		  title: {
			display: !1,
		  },
		  tooltip: {
			intersect: !1,
			mode: "nearest",
			xPadding: 5,
			yPadding: 5,
			caretPadding: 5,
		  },
		  legend: {
			display: !1,
		  },
		  responsive: !0,
		  hover: {
			mode: "index",
		  },
	  },
      maintainAspectRatio: !1,
      
      scales: {
        x: 
          {
            display: !1,
            gridLines: !1,
            scaleLabel: {
              display: !0,
              labelString: "Month",
            },
            ticks: {
              max: 30,
              min: 0,
            },
          },
        
        y :
          {
            display: !1,
            gridLines: !1,
            scaleLabel: {
              display: !0,
              labelString: "Value",
            },
            ticks: {
              beginAtZero: !0,
            },
          },
        
      },
      elements: {
        line: {
          tension: 0.15,
        },
        point: {
          radius: 2,
          borderWidth: 1,
        },
      },
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
        },
      },
    };

    return (
		<div style={{ height: 290 }}>
			<Line data={data} options={options} height={290} />
		</div>
    );
  }
}

export default WeeklySales1;
