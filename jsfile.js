

$(document).ready(function() {




var wi=600,he=500;
var pi= d3.select("#zipa")
.append("svg")
.attr("width",wi)
.attr("height",he)
var colors=d3.scaleOrdinal(d3.schemeDark2);




var TotalActiveCases;
var TotalDeaths;
var TotalRecovered;



var detailes=[{state:"Active Cases",number:1515849},{state:"Deaths",number:149156},{state:"Recovered",number:490147}];

var data=d3.pie().sort(null).value(function(d){return d.number;})(detailes);

var segments=d3.arc()
.innerRadius(0)
.outerRadius(200)
.padAngle(0.05)
.padRadius(50);



var sections=pi.append("g").attr("transform","translate(250,250)")
.selectAll("path").data(data);
sections.enter()
.append("path")
.attr("d",segments)
.attr("fill",function(d){ return colors(d.data.number);});



var content=d3.select("g").selectAll("text").data(data);

content.enter().append("text").classed("inside",true).each(function(d){
var center=segments.centroid(d);
d3.select(this).attr("x",center[0]).attr("y",center[1]).text(d.data.number)
});



var legends=pi.append("g").attr("transform","translate(399,1)")
.selectAll(".legends").data(data);
legends.enter().append("g").classed("legends",true);
var legend=legends.enter().append("g").classed("legends",true)
.attr("transform",function(d,i){return "translate(0,"+(i+1)*30+")";})
legend.append("rect").attr("width",20).attr("height",20).attr("fill",function(d){return colors(d.data.number);});
legend.append("text").classed("label",true).text(function(d){return d.data.state;})
.attr("x",30)
.attr("y",20);











































  const w = 1000; 
  const h = 400;  

const projection = d3.geoNaturalEarth1();

const path = d3.geoPath().projection(projection);


  const svg = d3.select('body')
    .append('svg')
    .attr('width', w)
    .attr('height', h);
 svg.append('rect')
   .attr('width', w)
   .attr('height', h)
   .attr('fill', "#006994");





  var g = svg.append("g");
  


d3.json("https://d3js.org/world-50m.v1.json").then(d=>{





 g.append('path')
      .datum(topojson.feature(d, d.objects.countries))
      .attr('d', path)
      .attr('class', 'country');


svg.call(d3.zoom().on('zoom', () => {
  g.attr('transform', d3.event.transform);
}));






var obj=[{"Country":"India","TCases":14352,"Lat":23.291109,"Lon":77.131744,"Color":"#0000cc","TDeaths":486,"TRecovered":2041,"ActiveCases":11825},
{"Country":"USA","TCases":501880,"Lat":38.291109,"Lon":-100.131744,"Color":" #ffff33","TDeaths":350,"TRecovered":350,"ActiveCases":350},
{"Country":"Canada","TCases":31927,"Lat":55.291109,"Lon":-100.131744,"Color":"#ff0000","TDeaths":1310,"TRecovered":10543,"ActiveCases":20074},
{"Country":"Mexico","TCases":6875,"Lat":23.291109,"Lon":-102.131744,"Color":"#663300","TDeaths":546,"TRecovered":2125,"ActiveCases":4204},
{"Country":"France","TCases":147969,"Lat":46.276987,"Lon":2.296249,"Color":" #ff3399","TDeaths":18681,"TRecovered":34420,"ActiveCases":94868},
{"Country":"Germany","TCases":141397,"Lat":51.276987,"Lon":10.296249,"Color":"#66e0ff","TDeaths":4352,"TRecovered":83114,"ActiveCases":53931},
{"Country":"Italy","TCases":172434,"Lat":41.276987,"Lon":14.296249,"Color":" #ff0000","TDeaths":22745,"TRecovered":42727,"ActiveCases":106962},
{"Country":"Ireland","TCases":13980,"Lat":52.547,"Lon":-8.120,"Color":"#80ff80","TDeaths":530,"TRecovered":77,"ActiveCases":13373},
{"Country":"UK","TCases":108692,"Lat":52.547,"Lon":-1.120,"Color":" #ffff00","TDeaths":14576,"TRecovered":"N/A","ActiveCases":93772},
{"Country":"Spain","TCases":190839,"Lat":40.547,"Lon":-3.865,"Color":"","TDeaths":20002,"TRecovered":74797,"ActiveCases":96040}
];




 d3.json('https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/meteorite-strike-data.json').then(t=>{


  



 g.selectAll('circle')
        .data(obj)
        .enter()
        .append('circle') //show the circles
        .attr('cx', function(d) {
          if (d) {

            return projection([d.Lon,d.Lat])[0];

          }

        })

//d.Lon,d.Lat

        .attr('cy', function(d) {
          if (d) {
            return projection([d.Lon,d.Lat])[1];
          }






        })
        .attr('r', function(d) {
          if (d) {

            return Math.pow(parseInt(d.TCases), 1/5);
          }
        })
        .style('fill', function(d) {

          return d.Color;
        })
.on('mouseover', function(d) {
          d3.select(this).style('fill', 'black'); 

          d3.select('#name').text(d.Country);
          d3.select('#TCases').text(d.TCases);
          d3.select('#TDeaths').text(d.TDeaths);
          d3.select('#TRecovered').text(d.TRecovered);
          d3.select('#ActiveCases').text(d.ActiveCases);


          d3.select('#tooltip')
            .style('left', (d3.event.pageX + 20) + 'px')
            .style('top', (d3.event.pageY - 80) + 'px')
            .style('display', 'block')
            .style('opacity', 0.8)
        })
        //Add Event Listeners | mouseout
        .on('mouseout', function(d) { 
          d3.select(this).style('fill', d.Color);
          d3.select('#tip')
            .style('display', 'none');
        });






















  });




});




var margin = {top: 20, right: 20, bottom: 30, left: 40},
    width = 500 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;




var bar= d3.select("#zip").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .attr("class", "mango")
  .append("g")
    .attr("transform", 
          "translate(" + margin.left + "," + margin.right + ")");


var xScale = d3.scale.ordinal()
    .rangeRoundBands([0,width], 0.2, 0.2);

var yScale = d3.scale.linear()
    .range([height, 0]);




var xAxis = d3.axisBottom()
    .scale(xScale);




var yAxis = d3.axisLeft()
    .scale(yScale);


var salesData=[{Year:"Mar 10",Qty:4567},{Year:"Mar 11",Qty:7266},{Year:"Mar 12",Qty:8295},{Year:"Mar 13",Qty:10907},{Year:"Mar 14",Qty:11059},{Year:"Mar 15",Qty:13036},{Year:"Mar 16",Qty:12920},{Year:"Mar 17",Qty:15730},{Year:"Mar 18",Qty:20682},{Year:"Mar 19",Qty:26145},{Year:"Mar 20",Qty:30692},{Year:"Mar 21",Qty:29452},{Year:"Mar 22",Qty:32480},{Year:"Mar 23",Qty:41493},{Year:"Mar 24",Qty:43835},{Year:"Mar 25",Qty:48557},{Year:"Mar 26",Qty:60994},{Year:"Mar 27",Qty:64553},{Year:"Mar 28",Qty:66761},{Year:"Mar 29",Qty:60415},{Year:"Mar 30",Qty:61786},{Year:"Mar 31",Qty:73792},{Year:"Apr 1",Qty:77053},{Year:"Apr 2",Qty:80097},{Year:"Apr 3",Qty:96031},{Year:"Apr 4",Qty:83592},{Year:"Apr 5",Qty:73316},{Year:"Apr 6",Qty:71606},{Year:"Apr 7",Qty:82785},{Year:"Apr 8",Qty:84447},{Year:"Apr9",Qty:85474},{Year:"Apr 10",Qty:93740},{Year:"Apr 11",Qty:80427},{Year:"Apr 12",Qty:72041},{Year:"Apr 13",Qty:71049},{Year:"Apr 14",Qty:77175},{Year:"Apr 15",Qty:83482},{Year:"Apr 16",Qty:90254},{Year:"Apr 17",Qty:86496}];








salesData.forEach(function(d){
d.Year=d.Year;
d.Qty=+d.Qty;


});



 xScale.domain(salesData.map(function(d) { return d.Year; }) );
 yScale.domain([0, d3.max(salesData, function(d) { return d.Qty; } ) ]);




bar.selectAll('rect')
    .data(salesData)
    .enter()
    .append('rect')
    .attr("height", 0)
    .attr("y", height)
    .transition().duration(3000)
    .delay( function(d,i) { return i * 200; })
    .attr("width",xScale.rangeBand())
    .attr("height", function(d) { return  height - yScale(d.Qty); })
    .attr("x", function(d) { return xScale(d.Year); })
    .attr("y", function(d) { return yScale(d.Qty); })
    .style("fill",function(d,i){return 'rgb(20,20,'+((i*30)+100)+')'});

bar.selectAll("text")
 .data(salesData)
 .enter()
 .append("text")
 .text(function(d){return d.Qty;})
 .attr("x",function(d){return xScale(d.Year)+xScale.rangeBand()/2;})
 .attr("y",function(d){return yScale(d.Qty)+12;})
 .style("fill","black")
 .style("text-anchor","middle")




bar.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis)
        .selectAll("text")
        .attr("dx", "-1em")
        .attr("dy", ".25em")
        .attr("transform", "rotate(-60)" )
	.attr("fill","black")

        .attr("font-size", "12px");


bar.append("g")
 .attr("class","y axis")
 .call(yAxis)
 .attr("font-size", "8px");









 

})

