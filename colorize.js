
import { UpdateLegend } from "./main.js"


export async function getColor(data, dos, maxNmin){

let { max, middle, min} = maxNmin


    const colorScale = d3.scaleLinear([min, max], ["yellow", "darkgreen"])

    let colors = [
       { offset: "0", color: colorScale(min)},
       { offset: "50%", color: colorScale(middle)},
       {offset: "100%", color: colorScale(max)}
    ]

    let minmax = [max, middle, min]

    UpdateLegend(minmax, colors)
    

    if(dos === "firstDos"){
        data.forEach((item, i) => {
            const node = d3.select(`#x${item.id}`)
            .on("mouseover", (e) =>  {
            let hoover = d3.select("svg").append("g").classed("hoverGroupd",true)

                hoover
                .append("rect")
                .attr("width", 200)
                .attr("height", 55)
                .attr("rx", 6) 
                .attr("ry", 6)
                .attr("x", `${e.clientX - 170}`)
                .attr("y", `${e.clientY}`);

    
                hoover
                .append("text")
                .attr("x", `${e.clientX - 165}`)
                .attr("y", `${e.clientY + 25}`)
                .text(`${item.kommunNamn}`)
                .style("font-size", "22px")

                hoover
                .append("text")
                .attr("x", `${e.clientX - 165}`)
                .attr("y", `${e.clientY + 45}`)
                .text(`Befolkning: ${item.population}`)
                .style("font-size", "12px")

                hoover
                .append("text")
                .attr("x", `${e.clientX - 15}`)
                .attr("y", `${e.clientY + 35}`)
                .text(`${item.value}%`)
                .style("font-size", "20px")


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

                let hoover = d3.select("svg").append("g").classed("hoverGroupd",true)

                hoover
                .append("rect")
                .attr("width", 200)
                .attr("height", 55)
                .attr("rx", 6) 
                .attr("ry", 6)
                .attr("x", `${e.clientX - 170}`)
                .attr("y", `${e.clientY}`);


                hoover
                .append("text")
                .attr("x", `${e.clientX - 165}`)
                .attr("y", `${e.clientY + 25}`)
                .text(`${item.kommunNamn}`)
                .style("font-size", "22px")

                hoover
                .append("text")
                .attr("x", `${e.clientX - 165}`)
                .attr("y", `${e.clientY + 45}`)
                .text(`Befolkning: ${item.population}`)
                .style("font-size", "12px")

                hoover
                .append("text")
                .attr("x", `${e.clientX - 15}`)
                .attr("y", `${e.clientY + 35}`)
                .text(`${item.value}%`)
                .style("font-size", "20px")


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