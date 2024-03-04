import { getKommunID } from "./main.js";   

export async function getColor(data){

    let areaKommun = getKommunID();

    const colorScale = d3.scaleSequential(d3.interpolateBlues)
                        .domain([70, 100]); 

   
    data.forEach(item => {
        
        const node = areaKommun.find(node => node.id === item.id);
        
        if (node) {
            d3.select(node)
                .style("fill", colorScale(item.value));
        } else {
            console.log("Node not found, id: ", item.id);
        }
    });
}
  
  
