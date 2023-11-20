window.onload=function(){var e=document.getElementById("wavesGraph").getContext("2d"),a=e.createLinearGradient(0,0,0,400),e=(a.addColorStop(0,"white"),a.addColorStop(1,"rgba(68,213,170,0.8)"),new Chart(e,{type:"line",data:{labels:["Jul 16","Jul 17","Jul 18","Jul 19","Jul 21","Jul 22"],datasets:[{borderColor:"rgba(0,0,0,0)",backgroundColor:a,label:"Active Users",tension:.4,display:!1,fill:!0,data:[2530,2300,1650,2500,2e3,3750,4200],pointRadius:5,pointBackgroundColor:"rgba(0,0,0,0)",pointHoverBackgroundColor:"rgba(0,180,0,0.8)",pointHoverRadius:8}]},options:{responsive:!0,maintainAspectRatio:!1,tooltips:{enabled:!0},legend:{display:!1}}}),document.getElementById("pointStyling").getContext("2d")),a=(new Chart(e,{type:"line",data:{labels:["January","February","March","April","May","June","July"],datasets:[{data:[15,80,79,11,5,33,57],label:"Label 1",pointBackgroundColor:"rgba(33,195,147,1)",pointHoverRadius:5,backgroundColor:"rgb(77, 207, 169)",borderColor:"rgb(77, 207, 169)",fill:!1,pointRadius:3,tension:0,lineTension:0},{data:[86,59,70,40,40,33,16],label:"Label 2",pointHoverBackgroundColor:"rgba(250,213,103,1)",pointHoverRadius:5,backgroundColor:"rgb(251, 218, 122)",borderColor:"rgb(251, 218, 122)",fill:!1,pointRadius:3,tension:0},{data:[59,65,33,0,79,95,53],label:"Label 3",pointHoverBackgroundColor:"rgba(106,142,227,1)",pointHoverRadius:5,backgroundColor:"rgb(106, 142, 227)",borderColor:"rgb(106, 142, 227)",fill:!1,pointRadius:3,tension:0}]},options:{responsive:!0,maintainAspectRatio:!1,legend:{display:!0},scales:{y:{ticks:{callback:function(e,a,t){return e+"%"},stepSize:25}}}}}),{labels:["June","July","August","September"],datasets:[{label:"Dataset 1",data:[10,15,20,12],backgroundColor:"rgb(72, 121, 223)",barPercentage:.5,usePointStyle:!0,pointStyle:"circle"},{label:"Dataset 2",data:[25,15,2,10],backgroundColor:"rgb(33, 195, 147)",barPercentage:.5,usePointStyle:!0,pointStyle:"circle"},{label:"Dataset 3",data:[4,22,16,24],backgroundColor:"rgb(251, 224, 141)",barPercentage:.5,usePointStyle:!0,pointStyle:"circle"}]}),e=document.getElementById("BarChart").getContext("2d"),e=(new Chart(e,{type:"bar",data:a,options:{responsive:!0,maintainAspectRatio:!1,scales:{x:{stacked:!0},y:{ticks:{callback:function(e,a,t){return e+"%"},stepSize:25},stacked:!0,min:0,max:100}}}}),{id:"doughnutLabel,",BeforeUnloadEvent(e,a,t){var{}=e,o=(ctx.save(),e.getDatasetMeta(0).data[0].x),e=e.getDatasetMeta(0).data[0].y;ctx.font="bold 30px sans-serif",ctx.fillStyle="grey",ctx.textAlight="center",ctx.textBaseLine="middle",ctx.fillText("datass.labels[0]",o,e)}}),a=document.getElementById("PieChart").getContext("2d"),a=(new Chart(a,{type:"doughnut",data:{labels:["Information 1","Information 2","Information 3"],datasets:[{label:"Dataset 1",data:[28,33,39],backgroundColor:["rgb(174,233,215)","rgb(50,153,123)","rgb(210,212,216)"],cutout:90}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"top"}},plugin:[e]}}),{labels:[""],datasets:[{label:"Information 1",data:[40],backgroundColor:["rgba(74,233,215,0.55)"],borderSkipped:!0,barPercentage:.5},{label:"Information 2",data:[55],backgroundColor:["rgba(98,220,184,0.7)"],borderSkipped:!0,barPercentage:.5},{label:"Information 3",data:[80],backgroundColor:["rgba(33,195,147,0.85)"],borderSkipped:!0,barPercentage:.5},{label:"Information 4",data:[55],backgroundColor:["rgba(50,153,123,1)"],borderSkipped:!0,barPercentage:.5}]}),e=document.getElementById("BarCh").getContext("2d");new Chart(e,{type:"bar",data:a,options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"top"}},scales:{y:{ticks:{callback:function(e,a,t){return e+"%"},stepSize:25},min:0,max:100}}}})};