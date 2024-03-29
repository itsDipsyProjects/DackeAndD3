
export async function formatData(){

  let datasetArray = await d3.json("./API/realData.json")
  let dataset = datasetArray.data;  
  
  function keyValue(a_number_string){

    if(a_number_string === "0"){
      return "-18"
    }

    if(a_number_string === "1"){
      return "18-49"
    }

    if(a_number_string === "2"){
      return "50-64"

    }
    if(a_number_string === "3"){
      return "65-79"
    }
  }

  let sendData = [];

  for (let i = 0; i < dataset.length; i += 8) {
        
    let region_object = {};
    region_object.firstDos = [];
    region_object.latestDos = [];
    
    
    for (let j = i; j < i + 8; j++) { 
      region_object.id = dataset[j].key[0];

      if (dataset[j].key[1] === "1"){
        region_object.firstDos.push({
          age: keyValue(dataset[j].key[2]),
          value: parseFloat(dataset[j].values)
        })
      }

      if (dataset[j].key[1] === "2"){
        region_object.latestDos.push({
          age: keyValue(dataset[j].key[2]),
          value: parseFloat(dataset[j].values)
        })
      }
      
    }
    sendData.push(region_object)
  }

  for (let k = 0; k < sendData.length; k++) {
    let areaKommun = await formatKommun();
    let populationData = await formatPopulation();
    let instance = sendData[k];

    instance.kommunNamn = areaKommun.find(node => node.kommunId === instance.id).kommunNamn
    instance.population = populationData.find(node => node.kommun === instance.id).value
  }

  sendData.reverse()
  return sendData;
}

export async function formatPopulation(){

  let rawData = await d3.json("./API/data_population.json")
  
  let data = rawData.data
  let sendData = [];

    for(let i = 0; i < data.length; i++){
  
      let kommun = {
        kommun : data[i].key[0],
        value: data[i].values[0]
      };

    sendData.push(kommun)

  }

 return sendData;
}

export async function formatKommun(){

  let data = await d3.json("./API/kommunlanData3.json")
  return data;
}
