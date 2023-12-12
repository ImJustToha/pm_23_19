function initializePoints(id){

    let pointStyling = document.getElementById(id).getContext('2d');
  
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
  
  }