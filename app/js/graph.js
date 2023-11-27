
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
        pointHoverBackgroundColor: 'rgba(60,180,170,0.8)',
        pointHoverRadius: 8,      // Point radius on hover
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      tooltips: {
        enabled: true // Enable tooltips to display data on hover
      },
      plugins:{
      legend: {
        display: false,
      },
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
          label: 'Information 01',
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
          label: 'Information 02',
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
          label: 'Information 03',
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
      plugins:{
        legend:{
          labels:{
            usePointStyle: true,
            boxWidth: 5,
            boxHeight: 5,
            
          },
          //position: 'left',
          align: 'start',
        },
      },
      responsive: true,
      maintainAspectRatio: false,
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
    plugins:{
      legend:{
        labels:{
          boxWidth: 10,
          boxHeight: 10,
        },
        align: 'start',
      },
    },
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
      labels: ['','',''],
      data: [28,33,39],
      backgroundColor: ['rgb(174,233,215)', 'rgb(50,153,123)', 'rgb(210,212,216)'],
      cutout: 95,
    }
  ]
};

const innerLabel = {
  id: 'innerLabel',
  afterDatasetDraw(chart, args, pluginOptions) {
    const { ctx } = chart;
    const meta = args.meta;
    const xCoor = meta.data[0].x;
    const yCoor = meta.data[0].y;
    const lab = chart.data.datasets[0].data[0] +chart.data.datasets[0].data[1];

    ctx.save();
    ctx.textAlign = 'center';
    ctx.font = '48px sans-serif';
    ctx.fillStyle = 'rgb(52,58,65)';
    chart.legend.options.align = 'start';
    chart.legend.options.labels.boxWidth = 10;
    chart.legend.options.labels.boxHeight = 10;
    ctx.fillText( lab + "%", xCoor, yCoor);
    ctx.restore();
  },  
};


let PieChart = document.getElementById("PieChart").getContext('2d');

const PieCharts = new Chart(PieChart,{
  type: 'doughnut',
  data: datass,
  options: {
    responsive: true,
    maintainAspectRatio: false, 
  },
  plugins: [innerLabel],
  
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
      plugins:{
        legend:{
          labels:{
            boxWidth: 10,
            boxHeight: 10,
          },
          align: 'start',
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
}})

const ctx = document.getElementById("SpeedometrGraph").getContext('2d');
const gradientSegment = ctx.createLinearGradient(0,0,210,0);
gradientSegment.addColorStop(0, '#f44636');
gradientSegment.addColorStop(0.7, '#f9df41');
gradientSegment.addColorStop(1, '#21c393');

const datata = {
  labels: ['Score', 'GreyArea'],
  datasets: [
    {
      label: 'Dataset 1',
      data: [6, 0],
      backgroundColor: [gradientSegment, '#f2f4f4'],
      borderColor: [gradientSegment, '#f2f4f4' ],
      circumference: 180,
      rotation: 270,
      cutout: '80%',
      //borderRadius: 10,
      //needleValue: datata.datasets[0].data[0],
    }
  ]
};

datata.datasets[0].needleValue = datata.datasets[0].data[0];
datata.datasets[0].data[1] = 10-datata.datasets[0].data[0];


const gaugeNeedle ={
  id: 'gaugeNeedle',
  afterDatasetDraw(chart, args,plugins){
    const{ctx, data, chartArea: {top, bottom, left,right,width,height}, scales: {r}} = chart;

    ctx.save();
    const needleValue = data.datasets[0].needleValue;
    const xCenter = chart.getDatasetMeta(0).data[0].x;
    const yCenter = chart.getDatasetMeta(0).data[0].y;
    const outerRadius = chart.getDatasetMeta(0).data[0].outerRadius-1;
    //const innerRadius = chart.getDatasetMeta(0).data[0].innerRadius;
    const angle = Math.PI;

    const dataTotal = data.datasets[0].data.reduce((a,b)=> a+b, 0);
    let circumference = ((chart.getDatasetMeta(0).data[0].circumference/ Math.PI )/ data.datasets[0].data[0]*needleValue);
    const needleValueAngle = circumference+1.5;

    ctx.translate(xCenter,yCenter);
    ctx.rotate(angle*needleValueAngle);

    ctx.beginPath();
    ctx.strokeStyle = 'black';
    ctx.fillStyle = 'black';
    ctx.moveTo(0 - 5, 0);
    ctx.lineTo(0,  - outerRadius);
    ctx.lineTo(0 + 5, 0);
    ctx.stroke();   
    ctx.fill();                 


    

    ctx.beginPath();
    ctx.arc(0,0, 5.5, angle*0,angle*2, false);
    ctx.fill();
    ctx.restore();

    ctx.font = '12px sans-serif';
    ctx.fillStyle ="#666";
    ctx.textBaseline = 'top';
    ctx.textAlign = 'left';
    ctx.fillText('Low', left, 5+yCenter);
    ctx.textAlign = 'right';
    ctx.fillText('High', right, 5+yCenter);

    ctx.restore();
  }
}

const config = {
  type: 'doughnut',
  data: datata,
  options: {
    aspectRatio: 1.4,
    plugins:{
      legend:{
        display: false,
      },
      tooltip:{
        enabled: false,
      }
    }
  },
  plugins:[gaugeNeedle]
};

const Graph = new Chart(ctx, config);
let graphLabel = document.getElementById("graphLabel");
let lab = document.getElementById("lab");
//graphLabel.innerText = datata.datasets[0].needleValue + '/10';
graphLabel.innerHTML = `${datata.datasets[0].needleValue}</span><span style="color: black; font-size: 70%; font-weight: normal;">/10</span>`;
// graphLabel.fontSize = '38px'
lab.style.fontSize = '18px'
graphLabel.style.fontWeight = 'bold';
if (datata.datasets[0].needleValue < 4)
{
  graphLabel.style.color = '#f44636';
  lab.innerText = 'Bad';
  lab.style.background = '#f44636';
}
else if (4 <=datata.datasets[0].needleValue && datata.datasets[0].needleValue <= 6) 
{
  lab.innerText = 'Fair';
  lab.style.backgroundColor = '#f8b83e';
  graphLabel.style.color = '#f8b83e';
}
else 
{
  lab.innerText = 'Good';
  lab.style.background = '#21c393';
  graphLabel.style.color = '#21c393';
}

const ctx2 = document.getElementById("SpeedometrGraph2").getContext('2d');

const datatata = {
  labels: ['Score', 'GreyArea'],
  datasets: [
    {
      label: 'Dataset 1',
      data: [8, 0],
      backgroundColor: [gradientSegment, '#f2f4f4'],
      borderColor: [gradientSegment, '#f2f4f4' ],
      circumference: 180,
      rotation: 270,
      cutout: '80%',
      //borderRadius: 10,
      //needleValue: datata.datasets[0].data[0],
    }
  ]
};

datatata.datasets[0].needleValue = datatata.datasets[0].data[0];
datatata.datasets[0].data[1] = 10-datatata.datasets[0].data[0];
const config2 = {
  type: 'doughnut',
  data: datatata,
  options: {
    aspectRatio: 1.4,
    plugins:{
      legend:{
        display: false,
      },
      tooltip:{
        enabled: false,
      }
    }
  },
  plugins:[gaugeNeedle]
};

let graphLabel1 = document.getElementById("graphLabel1");
let lab1 = document.getElementById("lab1");
//graphLabel.innerText = datata.datasets[0].needleValue + '/10';
graphLabel1.innerHTML = `${datatata.datasets[0].needleValue}</span><span style="color: black; font-size: 70%; font-weight: normal;">/10</span>`;
// graphLabel.fontSize = '38px'
lab1.style.fontSize = '18px'
graphLabel1.style.fontWeight = 'bold';
if (datatata.datasets[0].needleValue < 4)
{
  graphLabel1.style.color = '#f44636';
  lab1.innerText = 'Bad';
  lab1.style.background = '#f44636';
}
else if (4 <=datatata.datasets[0].needleValue && datatata.datasets[0].needleValue <= 6) 
{
  lab1.innerText = 'Fair';
  lab1.style.backgroundColor = '#f9df41';
  graphLabel1.style.color = '#f9df41';
}
else 
{
  lab1.innerText = 'Good';
  lab1.style.background = '#21c393';
  graphLabel1.style.color = '#21c393';
}

const Graph2 = new Chart(ctx2, config2)
};