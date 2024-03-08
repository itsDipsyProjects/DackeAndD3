import { getData } from "./main.js";

let actionsDOM = d3.select("#wrapper").append("div").classed("actions", true);

//actionsDOM.append("h1")
//.text("Vilken typ av jämförelse du vill göra?")
let options = actionsDOM.append("div").classed("options", true)

let optionData = ["Totalt", "Inom gruppen"];

options.selectAll("button")
        .data(optionData)
        .enter()
        .append("button")
        .text( d => {return d})
        .on("click", function () {
            toggleButtonColor(this)
        });

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
    getData("firstDos", d)
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
    getData("latestDos", d)
    
})


function toggleButtonColor(element) {

    let hasClass = d3.select(element).classed("on");

    if(hasClass){
        return d3.select(element).classed("on", false);
    }
    else {
        return d3.select(element).classed("on", true);
        }

}
