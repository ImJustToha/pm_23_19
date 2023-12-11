async function getData() {
    const response = await fetch('/json/data.json');
    const data = await response.json();
    return data;
  }
  
  async function processData() {
    const data = await getData();
    const number1 = data.datas.map(function(index) {return index.number})
    const number2 = data.datas2.map(function(index) {return index.number})
    const label_month = data.datas3.map(function(index) {return index.month})
    const data_set1 = data.datas3.map(function(index) {return index.number1})
    const data_set2 = data.datas3.map(function(index) {return index.number2})
    const data_set3 = data.datas3.map(function(index) {return index.number3})
    const lab_pie = data.datas4.map(function(index) {return index.name})
    const data_pie = data.datas4.map(function(index) {return index.data})
   
  initializePie(lab_pie, data_pie);  
  initializeBarCh(label_month,data_set1,data_set2,data_set3);
  initializeGauge(number1, "SpeedometrGraph", "graphLabel", "lab");
  initializeGauge(number2, "SpeedometrGraph2", "graphLabel1", "lab1");

  }