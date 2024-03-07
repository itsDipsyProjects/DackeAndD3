import { formatData } from "./formatData.js"
import { getColor } from "./colorize.js";
  
function createSVG (){
  let incrementor_x_text1 = 35
  let incrementor_x_text2 = 35
  let buttonData = ["-18", "18-49", "50-64", "65-79"];

  let svg = d3.select("svg")


const defaultV = [0, 50, 100];

  let legend = svg.append("g")
                  .classed("gradient", true)

  let rectLegend = legend
                  .append("rect")
                  .classed("legend", true)
                  .attr("transform", "translate(340, 130)")
                  .attr("width", 220)
                  .attr("height", 10)
                  .style("fill", "white")
                  .style("stroke", "black")
                  .style("stroke-width", "0.2px")
                  ;
                  
 // let ticks = legend.selectAll("line")
 //                   .data(defaultV)
 //                   .enter()
 //                   .append("line")
 //                   .attr("x1", (d, i) => i * 100 + 350)
 //                   .attr("x2", (d, i) => i * 100 + 350)
 //                   .attr("y1", 150) 
 //                   .attr("y2", 160) 
 //                   .style("stroke", "black");
//
  let textLegend = legend.selectAll("text")
                  .data(defaultV)
                  .enter()
                  .append("text")
                  .attr("x", (d, i) => { return i * 100 + 335; }) 
                  .attr("y", 160)
                  .text(d => d + "%")

          

  legend.append("linearGradient")
        .attr("id", "myGradient")
        .attr("x1", 0)
        .attr("y1", 1)
        .attr("x2", 1)
        .attr("y2", 1)
  
}

export function UpdateLegend(maxNmin, color){

  let legend = d3.select("#myGradient");

  legend.selectAll("stop")
        .data(color)
        .enter()
        .append("stop")
        .attr("offset", (d, i) => { return d.offset; })
        .attr("stop-color", (d, i) => { return d.color; });

  let rect = d3.select(".gradient rect")
          .style("fill", "url(#myGradient)")


  let textElement = d3.select(".gradient").selectAll("text")
                                        .data(maxNmin)                                                                  
                                        .text(d => d + "%")     

}

export async function getData(dos, agegroup) {
 console.log("hello")
  const dataset = await formatData()
    console.log(dataset)
  let sendData = [];
  let highestValue = 0;
  let lowestValue = 101;

    dataset.forEach(data => {
      if (dos === "firstDos") {
        data.firstDos.forEach(value => {

          if (value.age === agegroup) {

            highestValue = Math.max(highestValue, value.value);
            lowestValue = Math.min(lowestValue, value.value);

            let Data = {
              "id": data.id,
              "value": value.value,
              "population": data.population,
              "kommunNamn": data.kommunNamn,
            }

            sendData.push(Data)
          }
        })
      }

      if (dos === "latestDos") {
        data.latestDos.forEach(value => {

          if (value.age === agegroup) {

            highestValue = Math.max(highestValue, value.value);
            lowestValue = Math.min(lowestValue, value.value);

            let Data = {
              "id": data.id,
              "value": value.value,
              "population": data.population,
              "kommunNamn": data.kommunNamn,
              }

            sendData.push(Data)
          }
        })
      }
    })

  if(dos === "firstDos"){
    let max =  highestValue;
    let min = lowestValue;
    let middle = Math.round(min + max) / 2;
   
    let maxNmin = {
      "max" : max,
      "middle": middle,
      "min": min,
    }

    getColor(sendData,"firstDos", maxNmin)
    
  }

  if(dos === "latestDos"){

    let max = highestValue;
    let min = lowestValue;
    let middle = Math.round(min + max) / 2;

      let maxNmin = {
        "max" : max,
        "middle": middle,
        "min": min,   
    }

    getColor(sendData,"latestDos", maxNmin)
  }
}

createSVG()