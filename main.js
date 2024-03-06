import {formatData} from "./formatData.js"
import { getColor } from "./colorize.js";


// let data =d3.scv("...")

export async function getKommunID () {

  let kommunID = [] 

  const dataset = await formatData()
  dataset.forEach( data => {
    kommunID.push(data.id)
  })

  return kommunID;
}
  
function createSVG (){
  let incrementor_x_text1 = 35
  let incrementor_x_text2 = 35
  let buttonData = ["-18", "18-49", "50-64", "65-79"];

  let gVizButtonsContainer = d3.select("svg")
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
      //console.log("clicked", d)
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
    //console.log("clicked", d)
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
      //console.log("clicked", d)
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
    console.log(d)
  });

  

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

}


async function getData(akutellDosEller1Dos, åldersgrupp){
   const dataset = await formatData()

   let sendData = []

   dataset.forEach(data => {
    if(akutellDosEller1Dos === "förstaDos"){
      data.förstaDos.forEach( value => {
        if (value.age === åldersgrupp){
          let Data = {
            "id" : data.id,
            "value": value.value
          } 
            
            sendData.push(Data)
        } 
      })
    }
    if(akutellDosEller1Dos === "andraDos") {
      data.påfyllnadsdos.forEach( value => {
        if (value.age === åldersgrupp){
          let Data = {
            "id" : data.id,
            "value": value.value
          } 
            
            sendData.push(Data)
        } 
      }) 
    }
  })

  if(akutellDosEller1Dos === "förstaDos"){
    getColor(sendData,"förstDos" )
  }

  if(akutellDosEller1Dos === "andraDos"){
    getColor(sendData,"andraDos" )
  }
}


createSVG()