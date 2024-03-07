import { formatData } from "./formatData.js"
import { getColor } from "./colorize.js";
  
function createSVG (){
  let incrementor_x_text1 = 35
  let incrementor_x_text2 = 35
  let buttonData = ["-18", "18-49", "50-64", "65-79"];

  let svg = d3.select("svg")

  let gVizButtonsContainer = svg
                            .append("g")
                            .attr("transform", "translate(250, 100)");

  let rubrikMinst1Dos = d3.select("svg").append("text")
                                        .text("Minst 1 Dos")
                                        .attr("x", 344) 
                                        .attr("y", 280) 
                                        .style("font-size", 30)

  let rubrikAktuellPåFyllnadsDos = d3.select("svg").append("text")
                                                    .text("Aktuell påfyllnads dos")
                                                    .attr("x", 284) 
                                                    .attr("y", 500) 
                                                    .style("font-size", 30)


  let gVizbuttons = gVizButtonsContainer.selectAll("rect1")
                                          .data(buttonData)
                                          .enter()
                                          .append("rect")
                                          .attr("x", (d, i) => i * 90) 
                                          .attr("y", 250) 
                                          .attr("width", 70)
                                          .attr("height", 35)
                                          .attr("fill", "grey")
                                          .on("click", (i, d) => {
                                            getData("förstaDos", d)
                                          });

 
  let gVizbuttons2 = gVizButtonsContainer.selectAll("rect2")
                                          .data(buttonData)
                                          .enter()
                                          .append("rect")
                                          .attr("x", (d, i) => i * 90) 
                                          .attr("y", 500) 
                                          .attr("width", 70)
                                          .attr("height", 35)
                                          .attr("fill", "grey")
                                          .on("click", (i, d) => {
                                            getData("andraDos", d)
                                          });

  let gVizbuttons2 = gVizButtonsContainer.selectAll("rect2")
    .data(buttonData)
    .enter()
    .append("rect")
    .attr("x", (d, i) => i * 90)
    .attr("y", 500)
    .attr("width", 70)
    .attr("height", 35)
    .attr("fill", "grey")
    .on("click", (i, d) => {
      getData("andraDos", d)
    });


  gVizButtonsContainer.selectAll("textfirst")
                      .data(buttonData)
                      .enter()
                      .append("text")
                      .attr("fill", "white")
                      .attr("x", (d, i) => {
                        let previous = incrementor_x_text1;
                        incrementor_x_text1 += 20
                        return (i * 70) + previous
                      }) 
                      .attr("y", 270)
                      .attr("text-anchor", "middle") 
                      .attr("alignment-baseline", "middle") 
                      .text(d => d + "år") 
                      .style("font-size", 15)
                      .style("cursor", "pointer")
                      .style("user-select", "none") 
                      .on("click", (i, d) => {
                        getData("förstaDos", d)

                      });


  gVizButtonsContainer.selectAll("textfirst")
                      .data(buttonData)
                      .enter()
                      .append("text")
                      .attr("fill", "white")
                      .attr("x", (d, i) => {
                        let previous = incrementor_x_text2;
                        incrementor_x_text2 += 20
                        return (i * 70) + previous
                      }) 
                      .attr("y", 520)
                      .attr("text-anchor", "middle")
                      .attr("alignment-baseline", "middle") 
                      .text(d => d + "år") 
                      .style("font-size", 15)
                      .style("cursor", "pointer")
                      .style("user-select", "none") 
                      .on("click", (i, d) => {
                        getData("andraDos", d)
                      });

                                  //.append("rect")
                                  //      .attr("width", 200)
                                  //      .attr("height", 10)
                                  //      .attr("x", 400)
                                  //      .attr("y", 70) 
  //

// let buttons = gVizbuttons.selectAll("button")
//     .data(buttonData)
//     .enter()
//     .append("text")
//     .attr("class", "button")
//     .attr("x", (d, i) => i * 75) 
//     .attr("y", 250) 
//     .text(d => d + "år")
//     .style("border", "1px solid black")
//     .style("cursor", "pointer")
//     .style("font-size", 10)
//     .style("background-color", "blue")
//     .on("click", (i, d) => {
//       //console.log("clicked", d)
//         getData("förstaDos", d)
//         console.log(d)
//     });

const defaultV = [0, 50, 100];

  let legend = svg.append("g")
                  .classed("gradient", true)

  let rectLegend = legend
                  .append("rect")
                  .attr("transform", "translate(340, 130)")
                  .attr("width", 220)
                  .attr("height", 10)
                  .style("border", "1px solid black")

  let textLegend = legend.selectAll("text")
                  .data(defaultV)
                  .enter()
                  .append("text")
                  .attr("x", (d, i) => { return i * 100 + 340; }) 
                  .attr("y", 160)

          

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

console.log(maxNmin)

  let textLegend = legend.selectAll("text")
                    .data(maxNmin)
                    .enter()
                    .text(d => d)

}


  function createLegend() {
    d3.select("legend")
      .style("fill", "red")
    console.log("inne")
  }


  async function getData(dos, åldersgrupp) {

    const dataset = await formatData()
    console.log(dataset)
    let sendData = []
    let highestValue = dataset[0].forstaDos[0].value;
    let lowestValue = dataset[0].forstaDos[0].value;

    dataset.forEach(data => {
      
      if (dos === "förstaDos") {
        data.forstaDos.forEach(value => {

          if (value.age === åldersgrupp) {

            if (value.value < lowestValue) {
              lowestValue = value.value;
            }

            if (value.value > highestValue) {
              highestValue = value.value;
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

      if (dos === "andraDos") {
        data.påfyllnadsdos.forEach(value => {

          if (value.age === åldersgrupp) {

            if (value.value < lowestValue) {
              lowestValue = value.value;
            }

            if (value.value > highestValue) {
              highestValue = value.value;
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

  if(dos === "förstaDos"){

    let max =  parseInt(lowestValue[0]);
    let min = parseInt(highestValue[0]);
    let middle = Math.round(min + max) / 2;
   
    let maxNmin = {
      "max" : max,
      "middle": middle,
      "min": min,
    }

    getColor(sendData,"förstDos", maxNmin)
    
  }

  if(dos === "andraDos"){

        let max =  parseInt(lowestValue[0]);
    let min = parseInt(highestValue[0]);
    let middle = Math.round(min + max) / 2;

      let maxNmin = {
        "max" : max,
        "middle": middle,
        "min": min,
        
    }

    getColor(sendData,"förstDos", maxNmin)
  }
}

createSVG()