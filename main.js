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
  

for (let i = 0; i <= 3; i++) {
  let button = d3.select("body").append("button");
    switch(i){
      case 0:
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


async function getData(firstEntery, lastEntery){
   const dataset = await formatData()

   let sendData = []

   dataset.forEach(data => {
      data[firstEntery].forEach( value => {
        if (value.age === lastEntery){
          let Data = {
            "id" : data.id,
            "value": value.value
          } 
          sendData.push(Data)

        } 
      })
   })
   getKommun(sendData)
   console.log(sendData)
}

getData("förstaDos", "18-49")