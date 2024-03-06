//import { areaRadial } from "d3-shape";


export async function getColor(data, akutellDosEller1Dos){
    
    const colorScaleBlue = d3.scaleSequential(d3.interpolateBlues)
                        .domain([50, 100]); 

    const colorScaleRed = d3.scaleSequential(d3.interpolateReds)
                        .domain([10, 100])

    if(akutellDosEller1Dos === "förstDos"){
        
        data.forEach((item, i) => {
            const node = d3.select(`#x${item.id}`)
                    .style("fill", colorScaleBlue(item.value))
                    .on("mouseenter", (e) =>  {
            
                        
                         
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
                    .on("mouseleave", (e) =>  {
            
                        
                         
                        d3.selectAll(".hoverGroupd").remove();
                        
                    })
        });
    }
    if(akutellDosEller1Dos === "andraDos"){
           
        data.forEach((item, i) => {
        const node = d3.select(`#x${item.id}`)
                .style("fill", colorScaleRed(item.value))
                .on("click", (e) =>  {
                      
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
                .on("mouseleave", (e) =>  {
            
                        
                         
                    d3.selectAll(".hoverGroupd").remove();
                    
                })
        });

    }

}




  
