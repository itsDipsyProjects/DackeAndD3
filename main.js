import {formatData} from "./formatData.js"

let a_snippet_of_data_example = 
{
  år: "2024",
  id: "0114",
  valuesForMinst1Dos: [
    {
      åldersGrupp: "18-49",
      value: 75.0
    },
    {
      åldersGrupp: "50-64",
      value: 88.5
    },
    {
      åldersGrupp: "65-79",
      value: 93.2
    }

  ],
  valuesForAktuellPåfyllnadsdos: [
    {
      åldersGrupp: "18-49",
      value: 2.5
    },
    {
      åldersGrupp: "50-64",
      value: 13.2
    },
    {
      åldersGrupp: "65-79",
      value: 58.9
    }

  ]
}


d3.selectAll("polygon")

let dataValue = d3.selectAll("polygon")._groups[0]
let kommunDOM = array.from(dataValue)

console.log(kommunDOM)


startViz()


async function startViz(){
  const dataset = await formatData()
  console.log(dataset);
}
