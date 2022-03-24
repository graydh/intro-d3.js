var myData = [
	{day : 'Mon', value: 10},
	{day : 'Tue', value: 40},
	{day : 'Wed', value: 30},
	{day : 'Thu', value: 60},
	{day : 'Fri', value: 30}
];

var height = 100;

var bandScale = d3.scaleBand()
	.domain(['Mon', 'Tue', 'Wed', 'Thu', 'Fri'])
	.range([0, 300])
	.paddingInner(0.05);

d3.select('#wrapper')
	.selectAll('rect')
	.data(myData)
	.enter()
	.append('rect')
	.attr('x', function(d) {
		return bandScale(d.day);
	})
  .attr('y', function(d){return height - d.value;})
	.attr('width', bandScale.bandwidth())
	.attr('height', function(d) {
		return d.value;
	});