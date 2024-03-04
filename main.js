import {formatData} from "./formatData.js"
import { getKommun } from "./colorize.js";


export function getKommunID () {
  d3.selectAll("polygon")

  let dataValue = d3.selectAll("polygon")._groups[0]
  let dataValueG = d3.selectAll("g")._groups[0];

  let kommunDOMP = Array.from(dataValue)
  let kommunDOMG = Array.from(dataValueG)

  let kommunDOM = kommunDOMP.concat(kommunDOMG)

  let kommunID = [] 

  kommunDOM.forEach(data => {

  let id = parseInt(data.id)
  if(!isNaN(id)){
  kommunID.push(id)
  }})

  return kommunDOM;
}
getKommun()



export async function startViz(){

  let dataID = [];

  const dataset = await formatData()
  console.log(dataset)
  dataset.forEach( data => {
    dataID.push(data.id)
  })
  return dataID;
}

for (let i = 0; i <= 3; i++) {
  let button = d3.select("body").append("button");
  console.log(i)
  switch(i){
    case 0:
      console.log("hej")
      button.text("-18 år")
      button.style("margin", "5px")
      
      break;
    case 1:
      button.text("18-49 år")
      button.style("margin", "5px")
      break;
    case 2:
      button.text("50-64 år")
      button.style("margin", "5px")
      break;

    case 3:
      button.text("65-79 år")
      button.style("margin", "5px")
      break;
  }
}

