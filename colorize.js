import { getKommunID } from "./main.js";   

export async function getColor(data, akutellDosEller1Dos){
  
    if(akutellDosEller1Dos === "förstDos"){
        let areaKommun = getKommunID();
    
        const colorScale = d3.scaleSequential(d3.interpolateBlues)
                            .domain([70, 100]); 
    
        data.forEach((item,index) => {
            const node = areaKommun.find(node => node.id === item.id);
            
            if (node) {
                d3.select(node)
                    .style("fill", colorScale(item.value))
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
        const colorScale = d3.scaleSequential(d3.interpolateBlues)
        .domain([1, 100]); 
        data.forEach((item,index)=> {
            
            const node = areaKommun.find(node => node.id === item.id);
           
            if (node) {
                d3.select(node)
                .style("fill", colorScale(item.value))
                .on("click", (e) =>  {
                    console.log(item.value)
                    
                })
            } else {
                console.log("Node not found, id: ", item.id);
            }
        });
    }

}



  
