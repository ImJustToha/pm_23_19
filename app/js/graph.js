
window.onload = function () {

  let wavyGraph = document.getElementById('wavesGraph').getContext('2d');

  const gradient = wavyGraph.createLinearGradient(0, 0, 0, 400);
  gradient.addColorStop(0, 'white');
  gradient.addColorStop(1, 'rgba(68,213,170,0.8)');


  const wavyChart = new Chart(wavyGraph, {
    type: 'line',
    data: {
      labels: ['Jul 16', 'Jul 17', 'Jul 18', 'Jul 19', 'Jul 21', 'Jul 22'],
      datasets: [{
        borderColor: 'rgba(0,0,0,0)',   
        backgroundColor: gradient, // Background color with transparency
        label: 'Active Users',
        tension: 0.4,
        display: false,
       
        fill: true,
        data: [2530, 2300, 1650, 2500, 2000, 3750, 4200],
        pointRadius: 5,
        pointBackgroundColor: 'rgba(0,0,0,0)',
        pointHoverBackgroundColor: 'rgba(0,180,0,0.8)',
        pointHoverRadius: 8,      // Point radius on hover
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      tooltips: {
        enabled: true // Enable tooltips to display data on hover
      },
      legend: {
        display: false,
      },
    }
  });

  // New Point Styling Graph
  let pointStyling = document.getElementById("pointStyling").getContext('2d');



  const pointStylingGraph = new Chart(pointStyling, {
    type: 'line',
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          data: [15, 80, 79, 11, 5, 33, 57],
          label: 'Label 1',
          pointBackgroundColor: 'rgba(33,195,147,1)',
          pointHoverRadius: 5,
          backgroundColor: 'rgb(77, 207, 169)',
          borderColor: 'rgb(77, 207, 169)',
          fill: false,
          pointRadius: 3,
          tension: 0,
          lineTension: 0,
        },
        {
          data: [86, 59, 70, 40, 40, 33, 16],
          label: 'Label 2',
          pointHoverBackgroundColor: 'rgba(250,213,103,1)',
          pointHoverRadius: 5,
          backgroundColor: 'rgb(251, 218, 122)',
          borderColor: 'rgb(251, 218, 122)',
          fill: false,
          pointRadius: 3,
          tension: 0,
        },
        {
          data: [59, 65, 33, 0, 79, 95, 53],
          label: 'Label 3',
          pointHoverBackgroundColor: 'rgba(106,142,227,1)',
          pointHoverRadius: 5,
          backgroundColor: 'rgb(106, 142, 227)',
          borderColor: 'rgb(106, 142, 227)',
          fill: false,
          pointRadius: 3, 
          tension: 0,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display: true,
      },
      scales: {
        y: {
          ticks: {
            // Include a dollar sign in the ticks
            callback: function (value, index, ticks) {
              return value + "%";
            },
            stepSize: 25, // Interval between tick marks
          },
        }
      },
    },
  })

// new graph

const labels = ['June', 'July', 'August', 'September'];
const datas = {
  labels: labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [10, 15, 20 , 12],
      backgroundColor: 'rgb(72, 121, 223)',
      barPercentage: 0.5,
      usePointStyle: true,
      pointStyle: 'circle',
    },
    {
      label: 'Dataset 2',
      data: [25, 15, 2, 10],
      backgroundColor: 'rgb(33, 195, 147)',
      barPercentage: 0.5,
      usePointStyle: true,
      pointStyle: 'circle',
    },
    {
      label: 'Dataset 3',
      data: [4, 22, 16, 24],
      backgroundColor: 'rgb(251, 224, 141)',
      barPercentage: 0.5,
      usePointStyle: true,
      pointStyle: 'circle',
    },
  ]
};
let BarChart = document.getElementById("BarChart").getContext('2d');

const BarChartv = new Chart(BarChart, {
  type: 'bar',
  data: datas,
  options: {
    responsive: true,
    maintainAspectRatio: false,
    
    scales: {
      x:{
        stacked: true,
      },
      y: {
        ticks: {
        // Include a dollar sign in the ticks
        callback: function (value, index, ticks) {
          return value + "%";
        },
        stepSize: 25, // Interval between tick marks
      },
        
        stacked: true,
        min: 0,
        max: 100,
    }
  }
}});


//new graph


const datass = {
  labels: ['Information 1', 'Information 2', 'Information 3'],
  datasets: [
    {
      label: 'Dataset 1',
      data: [28,33,39],
      backgroundColor: ['rgb(174,233,215)', 'rgb(50,153,123)', 'rgb(210,212,216)'],
      cutout: 90,
    }
  ]
};

const doughnutLabel ={
  id:'doughnutLabel,',
  BeforeUnloadEvent(chart, args,pluginOptions) {
    const {cts, data} = chart
    ctx.save();
    const xCoor = chart.getDatasetMeta(0).data[0].x
    const yCoor = chart.getDatasetMeta(0).data[0].y
    ctx.font = 'bold 30px sans-serif';
    ctx.fillStyle  = 'grey';
    ctx.textAlight = 'center';
    ctx.textBaseLine = 'middle';
    ctx.fillText('datass.labels[0]',xCoor,yCoor);
  }
  }


let PieChart = document.getElementById("PieChart").getContext('2d');

const PieCharts = new Chart(PieChart,{
  type: 'doughnut',
  data: datass,
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        
      },
    }, 
    plugin: [doughnutLabel],
  },
});


//new graph

const labelss = [''];
const datasss = {
  labels: labelss,
  datasets: [
    {
      label: 'Information 1',
      data: [40] ,
      backgroundColor: ['rgba(74,233,215,0.55)'],
      borderSkipped: true,
      barPercentage: 0.5, 
    },
    {
        label: 'Information 2',
        data: [55] ,
        backgroundColor: ['rgba(98,220,184,0.7)'],
        borderSkipped: true,
        barPercentage: 0.5, 
    },
    {
        label: 'Information 3',
        data: [80] ,
        backgroundColor: ['rgba(33,195,147,0.85)'],
        borderSkipped: true,
        barPercentage: 0.5, 
    },
    {
      label: 'Information 4',
      data: [55] ,
      backgroundColor: ['rgba(50,153,123,1)'],
      borderSkipped: true,
      barPercentage: 0.5, 
    },
  ]
};

let BarCh = document.getElementById("BarCh").getContext('2d');


const BarChrt = new Chart(BarCh,{
  type: 'bar',
  data: datasss,
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
    },
    scales: {
      y: {
        ticks: {
        // Include a dollar sign in the ticks
        callback: function (value, index, ticks) {
          return value + "%";
        },
        stepSize: 25, // Interval between tick marks
      },
        min: 0,
        max: 100,
    }
  },
}})};