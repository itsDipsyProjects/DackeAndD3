
export async function formatData(){

  let population = await formatPopulation() 
  let kommunNamn = await formatKommun()
  


  let datasetArray = await d3.json("./API/realData.json")
  let dataset = datasetArray.data;  
  console.log(dataset)
  
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
          value: parseInt(dataset[j].values)
        })
      }

      if (dataset[j].key[1] === "2"){
        region_object.latestDos.push({
          age: keyValue(dataset[j].key[2]),
          value: parseInt(dataset[j].values)
        })
      }
      
    }
    sendData.push(region_object)
  }

  for (let k = 0; k < sendData.length; k++) {
    let sendDataInstance = sendData[k];
    sendDataInstance.population = population[k].value
    sendDataInstance.kommunNamn = kommunNamn[k].kommunNamn
  }
  console.log(sendData)
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
