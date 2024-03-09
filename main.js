import { formatData } from "./formatData.js"
import { getColor } from "./colorize.js";
  
function createSVG (){

  const defaultV = [100, 50, 0];
  const legendH = 400; 
  const rectY = 150;
  const rectX = 330;
  
  let svg = d3.select("svg")

  let legend = svg.append("g")
                  .classed("gradient", true);

  let rectLegend = legend
                  .append("rect")
                  .classed("legend", true)
                  .attr("transform", `translate(${rectX}, ${rectY})`)
                  .attr("width", 10)
                  .attr("height", legendH)
                  .style("fill", "white")
                  .style("stroke", "black")
                  .style("stroke-width", "1px")
                  ;
                  
  let ticks = legend.selectAll("line")
                    .data(defaultV)
                    .enter()
                    .append("line")
                    .attr("x1", rectX + 10)
                    .attr("x2", rectX + 15)
                    .attr("y1", (d, i) => rectY + i * (legendH / (defaultV.length - 1))) 
                    .attr("y2", (d, i) => rectY + i * (legendH / (defaultV.length - 1))) 
                    .style("stroke", "black")
                    ;

  let textLegend = legend.selectAll("text")
                  .data(defaultV)
                  .enter()
                  .append("text")
                  .style("font-family", "Roboto")
                  .attr("x", rectX + 17) 
                  .attr("y", (d, i) => rectY + i * (legendH / (defaultV.length - 1)) + 5)
                  .text(d => d + "%")
                  ;       

  legend.append("linearGradient")
        .attr("id", "myGradient")
        .attr("x1", 1)
        .attr("y1", 1)
        .attr("x2", 1)
        .attr("y2", 0)
        ;
  
}

export function UpdateLegend(maxNmin, color){

  let legend = d3.select("#myGradient");

  legend.selectAll("stop")
        .data(color)
        .enter()
        .append("stop")
        .attr("offset", (d, i) => { return d.offset })
        .attr("stop-color", (d, i) => { return d.color })
        ;

  let rect = d3.select(".gradient rect")
          .style("fill", "url(#myGradient)")
          .transition()
          .duration(5000)
          .style("fill", "url(#myGradient)")
          ;


  let textElement = d3.select(".gradient").selectAll("text")
                                        .data(maxNmin)                                                                  
                                        .text(d => d + "%") 
                                        ;    

}

export async function getData(dos, agegroup, dataType) {
  console.log(dataType)

  const dataset = await formatData()
  let sendData = [];
  let highestValue = 0;
  let lowestValue = 101;

    dataset.forEach(data => {
      if (dos === "firstDos") {
        data.firstDos.forEach(value => {

          if (value.age === agegroup) {
            
            if(dataType === "Absolut"){
              highestValue = 100;
              lowestValue = 0;
            } else {
              highestValue = Math.max(highestValue, value.value);
              lowestValue = Math.min(lowestValue, value.value);
            }

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

            if(dataType === "Absolut"){
              highestValue = 100;
              lowestValue = 0;
            } else {
              highestValue = Math.max(highestValue, value.value);
              lowestValue = Math.min(lowestValue, value.value);
            }


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

      console.log(maxNmin)

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