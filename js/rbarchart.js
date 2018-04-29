d3.csv("data/school-data.csv", drawChart)


//div var
var rbardiv = document.getElementById('rbarchart');

//get div style
var divstyle = window.getComputedStyle(rbardiv);

var svg_width = rbardiv.offsetWidth; //Width of the HTML
var svg_height = rbardiv.offsetHeight;
// chart height vars
var reduce_chart_height = 40;
var barHeight = svg_height / 2 - reduce_chart_height;
// create svg
var svg = d3.select('#rbarchart')
	.append("svg")
	.attr("width", svg_width)
	.attr("height", svg_height)
	.append("g")
	.attr("transform", "translate(" + (svg_width - 400) + "," + (svg_height/2) + ") "); //scale(" + 0.85 + "," + 0.85 + ")
// bar color vars
var color = d3.scaleOrdinal()
    .range(["#93278F","#B091FF","#84143F","#FF7BAC","#ED1E79","#C61300","#FF6600","#F7B21E","#FFE98F","#E2De34","#9FC63F","#239152","#00BDC8","#99ECFF","#459FFF","#2E3192"]);
var colorArry = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

var formatNumber = d3.format(".2%");

function drawChart(error, data){
	
	data.sort(function(a, b){
		return a.School_dist.localeCompare(b.School_dist);})
	
	var keys = data.map(function(d,i) { return d.School_dist; });
	var numBars = keys.length;
	// scales center -> barHeight
	var barScale = d3.scaleLinear()
      .domain([0.5, 1.0])
      .range([0, barHeight]);
	// scales barHeight -> center 
	var x = d3.scaleLinear()
		.domain([0.5, 1.0])
		.range([0, -barHeight]);
	// set .6, .8, 1.0 marks   
	var xAxis = d3.axisLeft()
      .scale(x)
      .ticks(3)
      .tickFormat(formatNumber);
	// dotted circles at ticks  
	var circles = svg.selectAll("circle")
		.data(x.ticks(3))
		.enter()
		.append("circle")
        .attr("r", function(d) {return barScale(d);})
        .style("fill", "none")
        .style("stroke", "white")
        .style("stroke-dasharray", "2,2")
        .style("stroke-width",".5px");
	// data arcs section	
	var arc = d3.arc()
		.startAngle(function(d,i) { return (i * 2 * Math.PI) / numBars; })
		.endAngle(function(d,i) { return ((i + 1) * 2 * Math.PI) / numBars; })
		.innerRadius(0);
		
	var segments = svg.selectAll("path")
		.data(data)
        .enter()
		.append("path")
		.each(function(d) { d.outerRadius = barScale(+d.Grad_perc); })
		.style("fill", function (d) { return color(d.School_dist); })
		.on("click", function(d, i) {
			// This handles the color toggling
			//var currentColor;
			//if (colorArry[i] == 1)
			//{
				//colorArry[i] = 0;
				//currentColor = "Gray";
			//}
			//else
			//{
				//colorArry[i] = 1;
			currentColor = color(d.School_dist)
			//}
			d3.select(this).style("fill", currentColor);
		})
		.style("opacity", 0.6)
		.attr("d", arc);

	// Outer circle
	svg.append("circle")
		.attr("r", barHeight)
		.classed("outer", true)
		.style("fill", "none")
		.style("stroke", "white")
		.style("stroke-width","1.5px");

	var lines = svg.selectAll("line")
		.data(keys)
		.enter().append("line")
		.attr("y2", -barHeight - 20)
		.style("stroke", "white")
		.style("stroke-width",".5px")
		.attr("transform", function(d, i) { return "rotate(" + (i * 360 / numBars) + ")"; });

	svg.append("g")
		.attr("class", "x axis")
		.call(xAxis);

	// Labels
	var labelRadius = barHeight * 1.025;

	var labels = svg.append("g")
		.classed("labels", true);

	labels.append("def")
			.append("path")
			.attr("id", "label-path")
			.attr("d", "m0 " + -labelRadius + " a" + labelRadius + " " + labelRadius + " 0 1,1 -0.01 0");

	labels.selectAll("text")
			.data(keys)
			.enter()
			.append("text")
			.style("text-anchor", "middle")
			.style("font-weight","bold")
			.style("font-size", 12)
			.style("fill", function(d, i) {return "white";})
			.append("textPath")
			.attr("xlink:href", "#label-path")
			.attr("startOffset", function(d, i) {return i * 100 / numBars + 50 / numBars + '%';})
			.text(function(d) {return d.toUpperCase(); });
}
