import * as d3 from 'd3'

const url = 'https://udemy-react-d3.firebaseio.com/tallest_men.json'
const Margin = { Top: 10, Bottom: 50, Left: 50, Right: 10 }
const Width = 800 - Margin.Left - Margin.Right
const Height = 500 - Margin.Top - Margin.Bottom

export default class D3Chart {
    constructor(element) {
        const svg = d3.select(element)
            .append('svg')
                .attr('width', Width + Margin.Left + Margin.Right)
                .attr('height', Height + Margin.Top + Margin.Bottom)
            .append('g')
                .attr('transform', `translate(${Margin.Left}, ${Margin.Top})`)

        d3.json(url).then(data=> {
            const y = d3.scaleLinear()
                .domain([0, d3.max(data, d =>  d.height)])
                .range([0, Height])  
                
            const x = d3.scaleBand()
                .domain(data.map(d => d.name))
                .range([0, Width])
                .padding(0.4)

            const xAxisCall = d3.axisBottom(x)
            svg.append('g')
                .attr('transform', `translate(0, ${Height})`)
                .call(xAxisCall)
                

            const yAxisCall = d3.axisLeft(y)
            svg.append('g').call(yAxisCall)

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
