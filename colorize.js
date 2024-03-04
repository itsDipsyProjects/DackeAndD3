
// 


export function findValueForKommun(kommunID, dataset, minstEnDos, akutellpåfyllnadsDOs, åldersGrupp){
    for (let i = 0; i < dataset.length; i++) {
        if(dataset[i].id === kommunID){
            return dataset[i].value 
        }
    }    
}

export function colorizeKommun(kommunId, polygonList, dataset,  minstEnDos, akutellpåfyllnadsDOs, åldersGrupp) 
{
    if(minstEnDos === true){

        let colors = ["skyblue", "blue", "darkblue", "yellow", "red", "orange"];
        const procentValuesForComparision = [65, 75, 80, 85, 90, 95];
        for (let i = 0; i < polygonList.length; i++) {
            if(polygonList[i].id === kommunId) {
               let value = findValueForKommun(kommunId, dataset) // måste mata in värden
               switch (value) {
                case Math.round(value) <= procentValuesForComparision[0]:
                        polygonList[i].attr("fill", colors[0]);
                    break;
    
                case Math.round(value) <= procentValuesForComparision[1] && Math.round(value) >= procentValuesForComparision[0]:
                        polygonList[i].attr("fill", colors[1]);
                    break;
    
                case Math.round(value) <= procentValuesForComparision[2] && Math.round(value) >= procentValuesForComparision[1]:
                        polygonList[i].attr("fill", colors[2]);
                    break;
                
                case Math.round(value) <= procentValuesForComparision[3] && Math.round(value) >= procentValuesForComparision[2]:
                        polygonList[i].attr("fill", colors[3]);
                    break;
    
                case Math.round(value) <= procentValuesForComparision[4] && Math.round(value) >= procentValuesForComparision[3]:
                        polygonList[i].attr("fill", colors[4]);
                    break;
    
                case  Math.round(value) <= procentValuesForComparision[5] && Math.round(value) >= procentValuesForComparision[4]:
                        polygonList[i].attr("fill", colors[5]);
                    break;
               
                default:
                    console.log("inget numeriskt värde insatt")
                    break;
               }
            }
            
        }    
    }

}

