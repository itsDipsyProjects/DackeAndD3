//import { areaRadial } from "d3-shape";

export async function getColor(data, akutellDosEller1Dos){

    const colorScaleBlue = d3.scaleLinear([80,100], ["lightblue", "darkgreen"])

    const colorScaleRed = d3.scaleLinear([30,100], ["yellow", "red"])


    if(akutellDosEller1Dos === "förstDos"){
        
        data.forEach((item, i) => {
            const node = d3.select(`#x${item.id}`)
                    .on("mouseover", (e) =>  {
                        console.log(item.value)    
                    })
                    .transition()
                    .delay(i * 4)
                    .duration(100) 
                    .style("fill", colorScaleBlue(item.value))

        });
    }
    if(akutellDosEller1Dos === "andraDos"){
           
        data.forEach((item, i) => {
        const node = d3.select(`#x${item.id}`)
                .on("click", (e) =>  {
                    console.log(item.value)
                })
                .transition()
                .delay(i * 4)
                .duration(100) 
                .style("fill", colorScaleRed(item.value))

        });

    }

}

function XYcor(event){
    const svgDom = document.querySelector("svg");
    let point = svgDom.createSVGPoint();
    point.x = event.clientX;
    point.y = event.clientY;
    return point.matrixTransform(svgDom.getScreenCTM()).inverse();
}


  
