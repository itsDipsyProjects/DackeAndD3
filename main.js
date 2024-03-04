import {formatData} from "./formatData.js"
import { getColor } from "./colorize.js";


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
  
function createSVG (){

let buttonData = ["-18", "18-49", "50-64", "65-79"];

let gViz = d3.select("svg")
          .append("g")
          .attr("transform", "translate(250, 100)");

let buttons = gViz.selectAll("button")
    .data(buttonData)
    .enter()
    .append("text")
    .attr("class", "button")
    .attr("x", (d, i) => i * 75) 
    .attr("y", 250) 
    .text(d => d + "år")
    .style("border", "1px solid black")
    .style("cursor", "pointer")
    .style("font-size", 10)
    .style("background-color", "blue")
    .on("click", (i, d) => {
      //console.log("clicked", d)
        getData("förstaDos", d)
    });

}


async function getData(firstEntery, lastEntery){
   const dataset = await formatData()
   let sendData = []
  console.log(firstEntery, lastEntery)
   dataset.forEach(data => {
      data[firstEntery].forEach( value => {
        if (value.age === lastEntery){
          let Data = {
            "id" : data.id,
            "value": value.value
          } 
            console.log(Data)
            sendData.push(Data)

          

        } 
      })
   })
   getColor(sendData)
}

//getData("förstaDos", "18-49")
createSVG()