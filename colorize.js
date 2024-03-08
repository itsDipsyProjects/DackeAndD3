
import { UpdateLegend } from "./main.js"


export async function getColor(data, dos, maxNmin){
    console.log(maxNmin)

let { max, middle, min} = maxNmin

     console.log("max value:",max)
     console.log("min value:", min)
     console.log("middle value", middle)

    const colorScale = d3.scaleLinear([min, max], ["yellow", "darkgreen"])

    let colors = [
       { offset: "0", color: colorScale(min)},
       { offset: "50%", color: colorScale(middle)},
       {offset: "100%", color: colorScale(max)}
    ]

    let minmax = [min, middle, max]

    UpdateLegend(minmax, colors)
    

    if(dos === "firstDos"){
        data.forEach((item, i) => {
            const node = d3.select(`#x${item.id}`)
            .on("mouseover", (e) =>  {
                d3.select("svg").append("g").classed("hoverGroupd",true)
                .append("rect")
                .attr("width", 150)
                .attr("height", 80)
                .attr("fill", "grey")
                .attr("x", `${e.clientX - 170}`)
                .attr("y", `${e.clientY}`);

                d3.select("svg").append("g").classed("hoverGroupd",true)
                .append("text")
                .attr("fill", "white")
                .attr("x", `${e.clientX - 155}`)
                .attr("y", `${e.clientY + 20}`)
                .text(`${item.value}%`);

                d3.select("svg").append("g").classed("hoverGroupd",true)
                .append("text")
                .attr("fill", "white")
                .attr("x", `${e.clientX - 155}`)
                .attr("y", `${e.clientY + 40}`)
                .text(`${item.population} Population`);

                d3.select("svg").append("g").classed("hoverGroupd",true)
                .append("text")
                .attr("fill", "white")
                .attr("x", `${e.clientX - 155}`)
                .attr("y", `${e.clientY + 70}`)
                .text(`${item.kommunNamn}`);

            })
            .on("mouseleave", (e) =>{
                d3.selectAll(".hoverGroupd").remove();
            })
            .transition()
            .delay(i * 4)
            .duration(10) 
            .style("fill", colorScale(item.value))

        })
        
    }

    if (dos=== "latestDos"){
        data.forEach((item, i) => {
            const node = d3.select(`#x${item.id}`)
                .on("mouseover", (e) =>  {

                    d3.select("svg").append("g").classed("hoverGroupd",true)
                    .append("rect")
                    .attr("width", 150)
                    .attr("height", 80)
                    .attr("fill", "grey")
                    .attr("x", `${e.clientX - 170}`)
                    .attr("y", `${e.clientY}`);

                    d3.select("svg").append("g").classed("hoverGroupd",true)
                    .append("text")
                    .attr("fill", "white")
                    .attr("x", `${e.clientX - 155}`)
                    .attr("y", `${e.clientY + 20}`)
                    .text(`${item.value}%`);

                    d3.select("svg").append("g").classed("hoverGroupd",true)
                    .append("text")
                    .attr("fill", "white")
                    .attr("x", `${e.clientX - 155}`)
                    .attr("y", `${e.clientY + 40}`)
                    .text(`${item.population} Population`);

                    d3.select("svg").append("g").classed("hoverGroupd",true)
                    .append("text")
                    .attr("fill", "white")
                    .attr("x", `${e.clientX - 155}`)
                    .attr("y", `${e.clientY + 70}`)
                    .text(`${item.kommunNamn}`);
            })
                
            .on("mouseleave", (e) =>{
                d3.selectAll(".hoverGroupd").remove();
            })
            .transition()
            .delay(i * 4)
            .duration(10) 
            .style("fill", colorScale(item.value))

        });
    }

}