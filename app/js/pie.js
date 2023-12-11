function initializePie(labels, datas) {
    const data= {
      labels: labels,
      datasets: [
        {
          labels: ['','',''],
          data: datas,
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
        const sum = chart.data.datasets[0].data.reduce((sum, value) => sum + value, 0);
        const lab = (chart.data.datasets[0].data[0] +chart.data.datasets[0].data[1])/sum*100;
    
        ctx.save();
        ctx.textAlign = 'center';
        ctx.font = '48px sans-serif';
        ctx.fillStyle = 'rgb(52,58,65)';
        chart.legend.options.align = 'start';
        chart.legend.options.labels.boxWidth = 10;
        chart.legend.options.labels.boxHeight = 10;
        ctx.fillText((lab % 1 === 0 ? lab : lab.toFixed(2)) + "%", xCoor, yCoor);
        ctx.restore();
      },  
    };
    
    
    let PieChart = document.getElementById("PieChart").getContext('2d');
    
    const PieCharts = new Chart(PieChart,{
      type: 'doughnut',
      data: data,
      options: {
        responsive: true,
        maintainAspectRatio: false, 
      },
      plugins: [innerLabel],
      
    });
  }