import * as d3 from 'd3'

const Margin = { Top: 10, Bottom: 50, Left: 70, Right: 10 }
const Width = 800 - Margin.Left - Margin.Right
const Height = 500 - Margin.Top - Margin.Bottom

export default class D3Chart {
    constructor(element) {
        const vis = this

        vis.svg = d3.select(element)
            .append('svg')
                .attr('width', Width + Margin.Left + Margin.Right)
                .attr('height', Height + Margin.Top + Margin.Bottom)
            .append('g')
                .attr('transform', `translate(${Margin.Left}, ${Margin.Top})`)

            vis.svg.append('text')
                .attr('x', Width / 2)
                .attr('y', Height + 50)
                .attr('text-anchor', 'middle')
                .text("The World's Tallest Men")

            vis.svg.append('text')
                .attr('x', -(Height / 2))
                .attr('y', -50)
                .attr('text-anchor', 'middle')
                .text('Height in cm')
                .attr('transform', 'rotate(-90)')

            vis.xAxisGroup = vis.svg.append('g')
                .attr('transform', `translate(0, ${Height})`)

            vis.yAxisGroup = vis.svg.append('g')

            Promise.all([
                d3.json('https://udemy-react-d3.firebaseio.com/tallest_men.json'),
                d3.json('https://udemy-react-d3.firebaseio.com/tallest_women.json')
            ]).then((datasets) => {
               const [men, women] = datasets
               let flag = true

               vis.data = men
               vis.update()

                d3.interval(() => {
                    vis.data = flag ? men : women
                    vis.update()
                    flag =! flag
                }, 1000)
            })
        }

    update() {
        const vis = this

        const y = d3.scaleLinear()
        .domain([
            d3.min(vis.data, d => d.height) * 0.95, 
            d3.max(vis.data, d =>  d.height)
        ])
        .range([Height, 0])  
        
    const x = d3.scaleBand()
        .domain(vis.data.map(d => d.name))
        .range([0, Width])
        .padding(0.4)

    const xAxisCall = d3.axisBottom(x)
        vis.xAxisGroup
        .transition().duration(500)
        .call(xAxisCall)
        
    const yAxisCall = d3.axisLeft(y)
        vis.yAxisGroup
        .transition().duration(500)
        .call(yAxisCall)
  
    // data join
    const rects = vis.svg.selectAll('rect')
        .data(vis.data)
    
    //exit
    rects.exit()
        .transition().duration(500)
            .attr('height', 0)
            .attr('y', Height)
            .remove()

    // update 
    rects.transition().duration(500)
        .attr('x', d => x(d.name))
        .attr('y', d => y(d.height))
        .attr('width', x.bandwidth)
        .attr('height', d => Height - y(d.height))
    
    // enter 
    rects.enter().append('rect')
        .attr('x', d => x(d.name))
        .attr('width', x.bandwidth)
        .attr('fill', 'grey')
        .attr('y', Height)
        .transition().duration(500)
            .attr('height', d => Height - y(d.height))
            .attr('y', d => y(d.height))

        console.log(rects)
    }
}
