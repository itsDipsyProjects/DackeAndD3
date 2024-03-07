
export async function formatData(){

  let population = await formatPopulation() 

  let datasetArray = await d3.json("./API/data_vaccination.json")
  let dataset = datasetArray.data;  
  
  function keyValue(a_number_string){
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

  for (let i = 0; i < dataset.length; i += 6) {
        
    let region_object = {};
    region_object.forstaDos = [];
    region_object.påfyllnadsdos = [];
    
    
    for (let j = i; j < i + 6; j++) { 
      region_object.id = dataset[j].key[0];

      if (dataset[j].key[1] === "1"){
          region_object.forstaDos.push({
            age: keyValue(dataset[j].key[2]),
            value: dataset[j].values
          })
        }

      if (dataset[j].key[1] === "2"){
        region_object.påfyllnadsdos.push({
          age: keyValue(dataset[j].key[2]),
          value: dataset[j].values
        })
      }
      
    }
    sendData.push(region_object)
  }

  for (let k = 0; k < sendData.length; k++) {
    let sendDataInstance = sendData[k];
    sendDataInstance.population = population[k].value
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

  let data = await d3.csv("./API/kommunlankod.csv")
  console.log(data)
  return data;
}
