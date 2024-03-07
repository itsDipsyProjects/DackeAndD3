export async function getColor(data, akutellDosEller1Dos, maxNmin){

    let max = maxNmin.max;
    let min = maxNmin.min;
    let middle = Math.round(min + max) / 2

    console.log("max value:",max)
    console.log("min value:", min)
    console.log("middle value", middle)

    const colorScale = d3.scaleLinear([min, max], ["yellow", "darkgreen"])

    let minColor = colorScale(min)
    let maxColor = colorScale(max)
    let middleColor = colorScale(middle)



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
                .attr("y", `${e.clientY + 30}`)
                .text(`${item.value}%`)
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

    if (akutellDosEller1Dos === "andraDos"){
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
            .style("fill", colorScale(item.value))

        });
    }

}