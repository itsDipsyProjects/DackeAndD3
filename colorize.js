import { getKommunID } from "./main.js";

import {startViz} from "./main.js";




export function colorizeKommun(kommunId, polygonList, dataset,  minstEnDos, akutellpåfyllnadsDOs, åldersGrupp) 
{
   
}

export async function getKommun(){

    let areaKommun = getKommunID();
    let idkommun = await startViz()  

    idkommun.forEach(id => {
        areaKommun.forEach( node => {
            if(node.id === id){
                d3.select(node)
                .style("fill", "red")
                console.log("match")
            }
        })   
        
    })

}
