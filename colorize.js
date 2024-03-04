import { getKommunID } from "./main.js";   

export async function getKommun(data){

    let areaKommun = getKommunID();

    data.forEach(id => {
        areaKommun.forEach( node => {
            if(node.id === id.id){
                d3.select(node)
                .style("fill", "red") 
            } else {
                    console.log("not found")
                }
        })   
        
    })

}

function renderColor(d, i){
    i.interpolateBlues(6)
}
