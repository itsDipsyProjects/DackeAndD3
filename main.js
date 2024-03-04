import {formatData} from "./formatData.js"


d3.selectAll("polygon")

let dataValue = d3.selectAll("polygon")._groups[0]
let kommunDOM = array.from(dataValue)

console.log(kommunDOM)


startViz()


async function startViz(){
  const dataset = await formatData()
  console.log(dataset);
}
