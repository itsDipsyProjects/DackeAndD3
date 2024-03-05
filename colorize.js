//import { areaRadial } from "d3-shape";

export async function getColor(data, akutellDosEller1Dos){

    const colorScaleBlue = d3.scaleLinear([80,100], ["lightblue", "purple"])
                        .domain([50, 100]); 

      const colorScaleRed = d3.scaleLinear([50,100], ["blue", "red"])
                        .domain([50, 100]); 
  

    if(akutellDosEller1Dos === "förstDos"){
        
        data.forEach((item, i) => {
            const node = d3.select(`#x${item.id}`)
                    .style("fill", colorScaleBlue(item.value))
                    .on("click", (e) =>  {
                        console.log(item.value)
                        
                    })
        });
    }
    if(akutellDosEller1Dos === "andraDos"){
           
        data.forEach((item, i) => {
        const node = d3.select(`#x${item.id}`)
                .style("fill", colorScaleRed(item.value))
                .on("click", (e) =>  {
                    console.log(item.value)

                })
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


  
