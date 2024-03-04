
export async function formatData(){


  async function returnKommunerAntal(){
    let datasetArray = await d3.json("./data.json")
    let datasetArray1 = datasetArray.data;
    let kommunIdArray = [];
    let aktivKommunID = 0;
    let previousKommunID = 0;
    
    for (let i = 0; i < datasetArray1.length; i++) {
      previousKommunID = aktivKommunID;
      aktivKommunID = datasetArray1[i].key[0]

      if(aktivKommunID !== previousKommunID){
        kommunIdArray.push(previousKommunID);
      }
      
    }
    
    return kommunIdArray.length
  }

  let datasetArray = await d3.json("./data.json")
  let datasetArray1 = datasetArray.data;
  let kommunID = await returnKommunerAntal();
  
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
  for (let i = 0; i < datasetArray1.length; i += 6) {
    
    let a_region_object = {};
    a_region_object.valuesForMinst1Dos = [];
    a_region_object.valuesForAktuellPåfyllnadsdos = [];
    
    for (let j = i; j < i + 6; j++) { 
      a_region_object.år = "2024"
      a_region_object.id = datasetArray1[j].key[0];

      if(datasetArray1[j].key[1] === "1"){
        a_region_object.valuesForMinst1Dos.push({
          åldersGrupp: makeNumberAgeInData(datasetArray1[j].key[2]),
          value: datasetArray1[j].values
        })
      }

      if(datasetArray1[j].key[1] === "2"){
        a_region_object.valuesForAktuellPåfyllnadsdos.push({
          åldersGrupp: makeNumberAgeInData(datasetArray1[j].key[2]),
          value: datasetArray1[j].values
        })
      }
      
    }
    newDataSetFormated.push(a_region_object)
  }



  return newDataSetFormated;
}

