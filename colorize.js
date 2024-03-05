import { getKommunID } from "./main.js";   

export async function getColor(data, akutellDosEller1Dos){

    const colorScaleBlue = d3.scaleSequential(d3.interpolateBlues)
                        .domain([50, 100]); 

    const colorScaleRed = d3.scaleSequential(d3.interpolateReds)
                        .domain([10, 100]); 
  
    if(akutellDosEller1Dos === "förstDos"){
        let areaKommun = getKommunID();
        
        data.forEach((item, i) => {
            const node = areaKommun.find(node => node.id === item.id);
            
            if (node) {
                d3.select(node)
                    .style("fill", colorScaleBlue(item.value))
                    .on("click", (e) =>  {
                        console.log(item.value)
                        
                    })
            } else {
                console.log("Node not found, id: ", item.id);
            }
        });
    }
    if(akutellDosEller1Dos === "andraDos"){
        let areaKommun = getKommunID();

        data.forEach((item, i)=> {
            
            const node = areaKommun.find(node => node.id === item.id);
           
            if (node) {
                d3.select(node)
                .style("fill", colorScaleRed(item.value))
                .on("click", (e) =>  {
                    console.log(item.value)
                    
                })
            } else {
                console.log("Node not found, id: ", item.id);
            }
        });
    }

}



  
