<template>
  <div class="container">
    <h1 class="title1">XX数值信息柱形图</h1>
    <div id="main1"></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    mounted() {
      var width=500;
      var height=500;
      var dataset=[10, 20, 30, 40, 33, 24, 12, 5,10, 20, 30, 40, 33, 24, 12, 5];
      //console.log("dataset: "+dataset);
      var padding={left:20, right:20, top:20, bottom:20};
      var svg=d3.select("#main1")
        .append("svg")
        .attr("width",width)
        .attr("height",height);
      //x轴的比例尺
      var xScale = d3.scale.ordinal()
        .domain(d3.range(dataset.length))
        .rangeRoundBands([0, width - padding.left - padding.right]);

      //y轴的比例尺
      var yScale = d3.scale.linear()
        .domain([0,d3.max(dataset)])
        .range([height - padding.top - padding.bottom, 0]);

      //定义x轴
      var xAxis = d3.svg.axis()
        .scale(xScale)
        .orient("bottom");

      //定义y轴
      var yAxis = d3.svg.axis()
        .scale(yScale)
        .orient("left");

      //矩形之间的空白
      var rectPadding = 28/dataset.length;

      //定义矩形元素
      var rects=svg.selectAll(".MyRect")
        .data(dataset)
        .enter()
        .append("rect")
        .attr("class","MyRect")
        .attr("fill", "steelblue")
        .attr("transform","translate("+(padding.left+10)+","+padding.top+")")
        .attr("x",function(d,i){
          return xScale(i)+rectPadding/2;
        })
         .attr("y",function(d){
            var min=yScale.domain()[0];
            console.log("min: "+min);
            return yScale(min);
         })
        .attr("y",function(d){
          var min=yScale.domain()[0];
          return yScale(0);
        })
        .attr("width",xScale.rangeBand()-rectPadding)
        .transition()
        .delay(function(d,i){
            return i*200;
        })
        .duration(2000)
        .ease("bounce")//设定过渡样式
        .attr("y",function(d){
          return yScale(d);
        })
        .attr("height",function(d){
          return height-padding.top-padding.bottom-yScale(d);
        });
      //添加文字元素
      var tests=svg.selectAll(".MyText")
        .data(dataset)
        .enter()
        .append("text")
        .attr("class","MyText")
        .attr("fill", "white")
        .attr("transform","translate("+padding.left+","+padding.top+")")
        .attr("x",function(d,i){
          return xScale(i)+rectPadding/2;
        })
        .attr("dx",function(){
          return (xScale.rangeBand()-rectPadding)/2;
        })
        .attr("dy",function(d){
          return 20;
        })
        .text(function(d){
          return d;
        })
         .attr("y",function(d){
         	var min=yScale.domain()[0];
         	return yScale(min);
         })
        .attr("y",function(d){
          // var min=yScale.domain()[0];
          return yScale(0);
        })
         .transition()
         .delay(function(d,i){
             return i*200;
         })
         .duration(2000)
         .ease("bounce")
        .attr("y",function(d){
          return yScale(d);
        });

      //添加x轴
      svg.append("g")
        .attr("class","axis")
        .attr("fill", "none")
        .attr("stroke", "black")
        .attr("shape-rendering", "crispEdges")
        .attr("transform","translate(" + (padding.left+10) + "," + (height - padding.bottom) + ")")
        .call(xAxis);

      //添加y轴
      svg.append("g")
        .attr("class","axis")
        .attr("fill", "none")
        .attr("stroke", "black")
        .attr("shape-rendering", "crispEdges")
        .attr("transform","translate(" + (padding.left+10) + "," + padding.top + ")")
        .call(yAxis);
    }
  }
</script>

<style>
  #main1{
    margin: 0 auto;
    text-align: center;
    vertical-align: middle;
  }
</style>



