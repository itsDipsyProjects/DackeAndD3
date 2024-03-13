import { UpdateLegend } from "./main.js";

export async function getColor(data, dos, maxNmin) {
    let { max, middle, min } = maxNmin;

    const colorScale = d3.scaleLinear([min, max], ["rgb(236, 94, 89)", "rgb(89, 95, 236)"]);

    let colors = [
        { offset: "0", color: colorScale(min) },
        { offset: "50%", color: colorScale(middle) },
        { offset: "100%", color: colorScale(max) }
    ];

    let minmax = [max, middle, min];

    UpdateLegend(minmax, colors);

    data.forEach((item, i) => {
        const node = d3.select(`#x${item.id}`).on("mouseover", (e) => {
            const svgElement = d3.select("svg").node();
            const rect = svgElement.getBoundingClientRect(); 

            const rectWidth = 200;
            const rectHeight = 55;
            const rectX = e.clientX - rect.left - rectWidth / 2;
            const rectY = e.clientY - rect.top - rectHeight - 5;

            const hoover = d3.select("svg").append("g").classed("hoverGroupd", true);

            hoover.append("rect")
                .attr("width", rectWidth)
                .attr("height", rectHeight)
                .attr("x", rectX)
                .attr("y", rectY - 30);

            hoover.append("text")
                .attr("x", rectX + 5)
                .attr("y", rectY - 5)
                .text(item.kommunNamn)
                .style("font-size", "22px")
                .style("font-weight", "bold");

            hoover.append("text")
                .attr("x", rectX + 5)
                .attr("y", rectY + 45 -25)
                .text(`Befolkning: ${item.population}`)
                .style("font-size", "12px");

            hoover.append("text")
                .attr("x", rectX + rectWidth - 55)
                .attr("y", rectY + 35 - 25)
                .text(`${item.value}%`)
                .style("font-size", "20px");

        }).on("mouseleave", () => {
            d3.selectAll(".hoverGroupd").remove();
        }).transition()
            .delay(i * 4)
            .duration(10)
            .style("fill", colorScale(item.value));
    });
}
