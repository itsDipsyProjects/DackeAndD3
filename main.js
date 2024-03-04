import {formatData} from "./formatData.js"
import { colorizeKommun } from "./colorize.js"


async function startViz(){
  const dataset = await formatData()
  let testValue = dataset[0];
  
  console.log(dataset);
}
startViz()
