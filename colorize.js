//import { areaRadial } from "d3-shape";


export async function getColor(data, akutellDosEller1Dos){
    
    const colorScaleBlue = d3.scaleLinear([80,100], ["lightblue", "darkgreen"])

    const colorScaleRed = d3.scaleLinear([30,100], ["yellow", "red"])

    if(akutellDosEller1Dos === "förstDos"){
        data.forEach((item, i) => {
            const node = d3.select(`#x${item.id}`)
            .on("mouseover", (e) =>  {
                        
                d3.select("svg").append("g").classed("hoverGroupd",true)
                .append("rect")
                .attr("width", 100)
                .attr("height", 50)
                .attr("fill", "grey")
                .attr("x", `${e.clientX - 170}`)
                .attr("y", `${e.clientY}`)
                d3.select("svg").append("g").classed("hoverGroupd",true)
                .append("text")
                .attr("fill", "white")
                .attr("x", `${e.clientX - 135}`)
                .attr("y", `${e.clientY + 45}`)
                .text(`${item.value}%`)
            })
            .on("mouseleave", (e) =>{
                d3.selectAll(".hoverGroupd").remove();
            })
            .transition()
            .delay(i * 4)
            .duration(10) 
            .style("fill", colorScaleBlue(item.value))

        });
    }
    if(akutellDosEller1Dos === "andraDos"){
        data.forEach((item, i) => {
            const node = d3.select(`#x${item.id}`)
            .on("mouseover", (e) =>  {
                        
                d3.select("svg").append("g").classed("hoverGroupd",true)
                .append("rect")
                .attr("width", 100)
                .attr("height", 50)
                .attr("fill", "grey")
                .attr("x", `${e.clientX - 170}`)
                .attr("y", `${e.clientY}`)
                d3.select("svg").append("g").classed("hoverGroupd",true)
                .append("text")
                .attr("fill", "white")
                .attr("x", `${e.clientX - 135}`)
                .attr("y", `${e.clientY + 30}`)
                .text(`${item.value}%`)
            })
            .on("mouseleave", (e) =>{
                d3.selectAll(".hoverGroupd").remove();
            })
            .transition()
            .delay(i * 4)
            .duration(10) 
            .style("fill", colorScaleBlue(item.value))

        });
    }

}





  
