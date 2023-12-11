function initializeBarCh(labels,set1,set2,set3){
  const datas = {
    labels: labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: set1,
        backgroundColor: 'rgb(72, 121, 223)',
        barPercentage: 0.5,
        usePointStyle: true,
        pointStyle: 'circle',
      },
      {
        label: 'Dataset 2',
        data: set2,
        backgroundColor: 'rgb(33, 195, 147)',
        barPercentage: 0.5,
        usePointStyle: true,
        pointStyle: 'circle',
      },
      {
        label: 'Dataset 3',
        data: set3,
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
}

function initializeBar() {

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
  }