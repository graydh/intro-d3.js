// http://bl.ocks.org/alansmithy/e984477a741bc56db5a5

const svg = d3.select('svg');
//2 different data arrays
var dataArray1 = [30,35,45,55,70];
var dataArray2 = [50,55,45,35,20,25,25,40];

//globals
var dataIndex=1;
var xBuffer=50;
var yBuffer=150;
var lineLength=400;


svg.append("text")
    .attr("x",xBuffer+(lineLength/2))
    .attr("y",50)
    .text("dataset"+dataIndex);

//create axis line
svg.append("line")
    .attr("x1",xBuffer)
    .attr("y1",yBuffer)
    .attr("x1",xBuffer+lineLength)
    .attr("y2",yBuffer)

//create basic circles
svg.append("g").selectAll("circle")
    .data(eval("dataArray"+dataIndex))
    .enter()
    .append("circle")
    .attr("cx",function(d,i){
        var spacing = lineLength/(eval("dataArray"+dataIndex).length);
        return xBuffer+(i*spacing)
    })
    .attr("cy",yBuffer)
    .attr("r",function(d,i){return d});

//button to swap over datasets
d3.select("body").append("button")
    .text("change data")
    .on("click",function(){
        //select new data
        if (dataIndex==1) {
            dataIndex=2;
        } else   {
            dataIndex=1;
        }
        //rejoin data
        var circle = svg.select("g").selectAll("circle")
            .data(eval("dataArray"+dataIndex));

        circle.exit().remove();//remove unneeded circles
        circle.enter().append("circle")
            .attr("r",0);//create any new circles needed

        //update all circles to new positions
        circle.transition()
            .duration(500)
            .attr("cx",function(d,i){
                var spacing = lineLength/(eval("dataArray"+dataIndex).length);
                return xBuffer+(i*spacing)
            })
            .attr("cy",yBuffer)
            .attr("r",function(d,i){return d});

        d3.select("text").text("dataset"+dataIndex);
    });
