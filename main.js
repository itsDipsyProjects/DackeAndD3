import {formatData} from "./formatData.js"


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
  



startViz()



async function startViz(){

  let dataID = [];

  const dataset = await formatData()
  dataset.forEach( data => {
      let id = parseInt(data.id)
    dataID.push(id)
  })

  let svg = d3.select("svg2")

  //let extraValues = dataID.filter(value => !kommunID.includes(value));
  //console.log(extraValues);

}
startViz()
