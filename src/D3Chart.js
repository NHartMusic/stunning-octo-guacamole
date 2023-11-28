import * as d3 from 'd3'

const url = 'https://udemy-react-d3.firebaseio.com/tallest_men.json'
const Width = 800
const Height = 500

export default class D3Chart {
    constructor(element) {
        const svg = d3.select(element)
            .append('svg')
            .attr('width', Width)
            .attr('height', Height)

        d3.json(url).then(data=> {
            const y = d3.scaleLinear()
                .domain([0, d3.max(data, d =>  d.height)])
                .range([0, Height])  
                
            const x = d3.scaleBand()
                .domain(data.map(d => d.name))
                .range([0, Width])
                .padding(0.4)

            const xAxisCall = d3.axisBottom(x)
            svg.call(xAxisCall)

            const yAxisCall = d3.axisLeft(y)
            svg.call(yAxisCall)

            const rects = svg.selectAll('rect')
                .data(data)

            rects.enter().append('rect')
                .attr('x', d => x(d.name))
                .attr('y', d => Height - y(d.height))
                .attr('width', x.bandwidth)
                .attr('height', d => y(d.height))
                .attr('fill', 'grey')
        })
    }
}
