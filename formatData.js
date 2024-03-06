
export async function formatData(){

  let population = await formatPopulation() // [{key: "1144", value: 34567}, ...]

  let datasetArray = await d3.json("./JSON/data_vaccination.json")
  let dataset = datasetArray.data;  // [{key: ["1144", "1", "2", "2", "2024"], values: [75.0]}, ...]
  
  function makeNumberAgeInData(a_number_string){
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

  let newDataSetFormated = [];
  for (let i = 0; i < dataset.length; i += 6) {
    

    let pValue = (population.find(item => item.id === dataset[i].id)).value;
    
    let region_object = {};
    region_object.forstaDos = [];
    region_object.påfyllnadsdos = [];
    
    
    for (let j = i; j < i + 6; j++) { 
      region_object.year = "2024"
      region_object.id = dataset[j].key[0];
      region_object.population = pValue

      if(dataset[j].key[1] === "1"){
          region_object.forstaDos.push({
            age: makeNumberAgeInData(dataset[j].key[2]),
            value: dataset[j].values
          })
        }

      if(dataset[j].key[1] === "2"){
        region_object.påfyllnadsdos.push({
          age: makeNumberAgeInData(dataset[j].key[2]),
          value: dataset[j].values
        })
      }
      
    }
    newDataSetFormated.push(region_object)
  }

  return newDataSetFormated;
}

export async function formatPopulation(){


    let rawData = await d3.json("./JSON/data_population.json")
    let data = rawData.data
    let sendData = [];

    for(let i = 0; i < data.length; i++){
  
      let kommun = {
        kommun : data[i].key[0],
        value: data[i].values[0]
      };

    sendData.push(kommun)

  }



 //  let request = await fetch("https://api.scb.se/OV0104/v1/doris/sv/ssd/START/BE/BE0101/BE0101G/BefforandrKvRLK", {
 //     method: "POST",
 //     headers: { "Content-Type": "application/json" },
 //     body: JSON.stringify(data)
 //   })
//
 // let response = request;
//
 // console.log(response);

 return sendData;
}

formatPopulation()