// https://gist.github.com/d3noob/82f4db23d47971c74699abb5f4bf8204

// load population data into dict
var pops = d3.json("pops.json").then(
  function(data){
    var country_data = {};

    for (var i = 0, emp; i < data.length; i++) {
       emp = data[i];
       country_data[ emp.ccn3 ] = emp;
    }

    var color = d3.scaleSequential(d3.interpolate("white", "red"))
      .domain([0,2000]);

  var width = 960,
      height = 500;
  
  var projection = d3.geoMercator();
  
  var svg = d3.select("body").append("svg")
      .attr("width", width)
      .attr("height", height);
  
  var path = d3.geoPath()
      .projection(projection);
  
  var g = svg.append("g");
  
  // load and display the World
  d3.json("world-110m2.json").then(function(topology) {
      g.selectAll("path")
         .data(topojson.feature(topology, topology.objects.countries).features)
         .enter().append("path")
         .attr("d", path)
         .attr("fill", function(d){
           if(d.id in country_data){
             if(country_data[d.id].hasOwnProperty('Density')){
               return color(country_data[d.id].Density);
             }
           }
           return 'white'
         });
  });
  }
);




