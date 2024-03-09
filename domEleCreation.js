import { getData } from "./main.js";

let actionsDOM = d3.select("#wrapper").append("div").classed("actions", true);

//actionsDOM.append("h1")
//.text("Vilken typ av jämförelse du vill göra?")

let options = actionsDOM.append("div").classed("options", true)

let buttonData = ["-18", "18-49", "50-64", "65-79"];
let domButtonDivFirst = actionsDOM.append("div")
.classed("divForButtonsFirst", true)
;

let headerFirst = domButtonDivFirst.append("h1")
.text("Första dosen")
;

domButtonDivFirst.selectAll("button").data(buttonData).enter()
.append("button")
.text(d => {return d + " år"})
.on("click", (i, d) => {
    renderTypeData(d, "firstDos")
})


let domButtonDivSecond = actionsDOM.append("div")
.classed("divForButtonsSecond", true)

let headerSecond = domButtonDivSecond.append("h1")
.text("Aktuell påfyllnadsdos")
;
domButtonDivSecond.selectAll("button").data(buttonData).enter()
.append("button")
.text(d => {return d + " år"})
.on("click", (i, d) => {
    renderTypeData(d, "latestDos")
    
})

domButtonDivFirst.selectAll("button").attr("disabled", true);
domButtonDivSecond.selectAll("button").attr("disabled", true);

let optionData = ["Absolut", "Relativ"];

options.selectAll("button")
        .data(optionData)
        .enter()
        .append("button")
        .text( d => {return d})
        .on("click", function () {
            toggleButtonColor(this)

        });


function renderTypeData(d, dos){

    let dataType = d3.select(".on").text();
    getData(dos, d, dataType)
}


function toggleButtonColor(element) {

    console.log(element.innerText)

    let hasClass = d3.select(element).classed("on");

    if(hasClass){
        domButtonDivFirst.selectAll("button").attr("disabled", true);
        domButtonDivSecond.selectAll("button").attr("disabled", true);
        return d3.select(element).classed("on", false);
         
    }
    else {
        domButtonDivFirst.selectAll("button").attr("disabled", null);
        domButtonDivSecond.selectAll("button").attr("disabled", null);
        return d3.select(element).classed("on", true);
            
    }

}
