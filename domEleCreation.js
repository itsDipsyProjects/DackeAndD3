import { getData } from "./main.js";


let buttonData = ["-18", "18-49", "50-64", "65-79"];
let domButtonDivFirst = d3.select("body").append("div")
.classed("divForButtonsFirst", true)
domButtonDivFirst.selectAll("btns").data(buttonData).enter()
.append("button")
.text((d) => {return d})
.on("click", (i,d) => {
    getData("firstDos", d)
})


let domButtonDivSecond = d3.select("body").append("div")
.classed("divForButtonsSecond", true)
domButtonDivSecond.selectAll("btns").data(buttonData).enter()
.append("button")
.text((d) => {return d})
.on("click", (i,d) => {
    getData("latestDos", d)
})

