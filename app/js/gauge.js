function createGaugeTemplate(ctx){


    const gradientSegment = ctx.createLinearGradient(0,0,210,0);
    gradientSegment.addColorStop(0, '#f44636');
    gradientSegment.addColorStop(0.7, '#f9df41');
    gradientSegment.addColorStop(1, '#21c393');
    
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
    return [gaugeNeedle, gradientSegment];
    }

function initializeGauge(value, id1, id2, id3){
    const ctx = document.getElementById(id1).getContext('2d');
    let [gaugeNeedle, gradientSegment] = createGaugeTemplate(ctx);
  
    const data = {
      labels: ['Score', 'GreyArea'],
      datasets: [
        {
          label: 'Dataset 1',
          data: [value, 0],
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
    
    data.datasets[0].needleValue = value;
    data.datasets[0].data[1] = 10-value;
    
    const config = {
      type: 'doughnut',
      data: data,
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
  
    let graphLabel = document.getElementById(id2);
  let lab = document.getElementById(id3);
  graphLabel.innerHTML = `${value}</span><span style="color: black; font-size: 70%; font-weight: normal;">/10</span>`;
  lab.style.fontSize = '18px'
  graphLabel.style.fontWeight = 'bold';
  if (value < 4)
  {
    graphLabel.style.color = '#f44636';
    lab.innerText = 'Bad';
    lab.style.background = '#f44636';
  }
  else if (4 <=value &&value <= 6) 
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
  }