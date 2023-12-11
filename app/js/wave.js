function initializeWavy() {

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
          data: [25, 23, 16, 25, 20, 37, 42],
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
      scales: {
        y: {
          ticks: {
            // Include a dollar sign in the ticks
            callback: function (value, index, ticks) {
              return value + "k";
            },
          },
        }
      },
      
      }
    });
  }