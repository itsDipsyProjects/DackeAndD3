import { getData } from "./main.js";

let actionsDOM = d3.select("#wrapper").append("div").classed("actions", true);



let buttonData = ["-18", "18-49", "50-64", "65-79"];
let domButtonDivFirst = actionsDOM.append("div")
.classed("divForButtonsFirst", true)
;

let headerFirst = domButtonDivFirst.append("h1")
.text("Första dosen")
;

domButtonDivFirst.selectAll("btns").data(buttonData).enter()
.append("button")
.text((d) => {return d + " år"})
.on("click", (i,d) => {
    getData("firstDos", d)
})


let domButtonDivSecond = actionsDOM.append("div")
.classed("divForButtonsSecond", true)

let headerSecond = domButtonDivSecond.append("h1")
.text("Aktuell påfyllnadsdos")
;
domButtonDivSecond.selectAll("btns").data(buttonData).enter()
.append("button")
.text((d) => {return d + " år"})
.on("click", (i, d) => {

    getData("latestDos", d)
})

