import {formatData} from "./formatData.js"

let a_snippet_of_data_example = 
{
  år: "2024",
  id: "0114",
  valuesForMinst1Dos: [
    {
      åldersGrupp: "18-49",
      value: 75.0
    },
    {
      åldersGrupp: "50-64",
      value: 88.5
    },
    {
      åldersGrupp: "65-79",
      value: 93.2
    }

  ],
  valuesForAktuellPåfyllnadsdos: [
    {
      åldersGrupp: "18-49",
      value: 2.5
    },
    {
      åldersGrupp: "50-64",
      value: 13.2
    },
    {
      åldersGrupp: "65-79",
      value: 58.9
    }

  ]
}

d3.selectAll("polygon")

let dataValue = d3.selectAll("polygon")._groups[0];
let dataValueG = d3.selectAll("g")._groups[0]


let kommunDOMP = Array.from(dataValue)
let kommunDOMG = Array.from(dataValueG)

let kommunDOM = kommunDOMP.concat(kommunDOMG)

let kommunID = [] 

kommunDOM.forEach(data => {

let id = parseInt(data.id)
if(!isNaN(id)){
kommunID.push(id)
}})

console.log(kommunID)


startViz()

let dataID = [];

async function startViz(){
  const dataset = await formatData()
  dataset.forEach( data => {
      let id = parseInt(data.id)
    dataID.push(id)
  })

  //let extraValues = dataID.filter(value => !kommunID.includes(value));
  //console.log(extraValues);

}



