import { getData } from "./main.js";

export function renderDOM(){

    let actionsDOM = d3.select("#wrapper").append("div").classed("actions", true);
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
    .on("click", (event, d,) => {
        unselectBtns();
        event.srcElement.classList.add("selected")

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
    .on("click", (event, d) => {
        unselectBtns();
        event.srcElement.classList.add("selected")
        renderTypeData(d, "latestDos")
    })


    let allFilterButtons = d3.selectAll(".divForButtonsFirst button, .divForButtonsSecond button");
    allFilterButtons.attr("disabled", false);

    let optionData = ["Absolut", "Relativ"];

    options.selectAll("button")
            .data(optionData)
            .enter()
            .append("button")
            .text( d => {return d})
            .on("click", function () {
                toggleButtonColor(this)
            });


    function toggleButtonColor(element) {

        unselectBtns()

        let hasClass = d3.select(element).classed("on");

        if(hasClass === true){
            d3.select(element).classed("on",false);
            allFilterButtons.attr("disabled", true);
            let unselectedButton = d3.selectAll(".options button:not(.on)");
            unselectedButton.attr("disabled", null)

        }
        if(hasClass === false) {
            allFilterButtons.attr("disabled", null);
            d3.select(element).classed("on", true);
            let unselectedButtons = d3.selectAll(".options button:not(.on)");
            unselectedButtons.attr("disabled", true)

        }

    }   
}


function renderTypeData(d, dos){

    let dataType = d3.select(".on").text();
    getData(dos, d, dataType)
}

function unselectBtns(){
    let btn_selected = d3.selectAll("button.selected");
    btn_selected.classed("selected", false);
}


