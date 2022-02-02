const xValue = d => d.Horsepower;
const yValue = d => d.Displacement;
const margin = { left: 30, right: 20, top: 20, bottom: 20 };

const svg = d3.select('svg');
const width = svg.attr('width');
const height = svg.attr('height');
const innerWidth = width - margin.left - margin.right;
const innerHeight = height - margin.top - margin.bottom;

const g = svg.append('g')
    .attr('transform', `translate(${margin.left}, ${margin.top})`);
const xAxisG = g.append('g')
    .attr('transform', `translate(0, ${innerHeight})`);
const yAxisG = g.append('g');

const xScale = d3.scaleLinear();
const yScale = d3.scaleLinear();

const xAxis = d3.axisBottom().scale(xScale);
const yAxis = d3.axisLeft().scale(yScale);

const row = d => {
  d.Horsepower = +d.Horsepower;
  d.Displacement = +d.Displacement;
  return d;
};

d3.csv('cars.csv', row)
  .then(data => {
    xScale
      .domain(d3.extent(data, xValue))
      .range([0, innerWidth]);

    yScale
      .domain(d3.extent(data, yValue))
      .range([innerHeight, 0]);

    g.selectAll('circle').data(data)
      .enter().append('circle')
      .attr('cx', d => xScale(xValue(d)))
      .attr('cy', d => yScale(yValue(d)))
      .attr('r', 5);

    xAxisG.call(xAxis);
    yAxisG.call(yAxis);
  });
