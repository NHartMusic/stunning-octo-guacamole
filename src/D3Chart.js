import * as d3 from 'd3'

const url = 'https://udemy-react-d3.firebaseio.com/tallest_men.json'

export default class D3Chart {
    constructor(element) {
        const svg = d3.select(element)
            .append('svg')
            .attr('width', 800)
            .attr('height', 800)

        d3.json(url).then(data=> {
            const y = d3.scaleLinear()
                .domain([0, 272])
                .range([0, 500])  
                
            const x = d3.scaleBand()
                .domain(data.map(d => d.name))
                .range([0, 800])
                .padding(0.4)

            const rects = svg.selectAll('rect')
                .data(data)

            rects.enter().append('rect')
                .attr('x', d => x(d.name))
                .attr('y', 50)
                .attr('width', x.bandwidth)
                .attr('height', d => y(d.height))
                .attr('fill', 'grey')
        })
    }
}
