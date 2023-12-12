async function getData(direct) {
    const response = await fetch(direct);
    const data = await response.json();
    return data;
  }
  
  async function processData() {
    const data = await getData('/json/data.json');
    const number1 = data.sp1.map(function(index) {return index.number})
    const number2 = data.sp2.map(function(index) {return index.number})
    const label_month = data.bar.map(function(index) {return index.month})
    const data_set1 = data.bar.map(function(index) {return index.number1})
    const data_set2 = data.bar.map(function(index) {return index.number2})
    const data_set3 = data.bar.map(function(index) {return index.number3})
    const lab_pie = data.pie.map(function(index) {return index.name})
    const data_pie = data.pie.map(function(index) {return index.data})
   
  initializePie("PieChart", lab_pie, data_pie);  
  initializeBarCh("BarChart",label_month,data_set1,data_set2,data_set3);
  initializeGauge(number1, "SpeedometrGraph", "graphLabel", "lab");
  initializeGauge(number2, "SpeedometrGraph2", "graphLabel1", "lab1");

  }