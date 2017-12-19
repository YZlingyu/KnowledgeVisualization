<template>
  <div class="container">
    <h1 class="title1">XX数值信息柱形图</h1>
    <div id="main1"></div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data() {
      return {

      }
    },
    methods:{
      barGraph(dataset, color1, color2, fontFamily, fontSize, color3){
        let width = 500;
        let height = 500;
       // let dataset = data;
        let padding = {
          left: 20,
          right: 20,
          top: 20,
          bottom: 20
        };
        let svg = d3.select("#main1")
          .append("svg")
          .attr("width", width)
          .attr("height", height);

        //x轴的比例尺
        let xScale = d3.scale.ordinal()
          .domain(d3.range(dataset.length))
          .rangeRoundBands([0, width - padding.left - padding.right]);

        //y轴的比例尺
        let yScale = d3.scale.linear()
          .domain([0,d3.max(dataset)])
          .range([height - padding.top - padding.bottom, 0]);

        //定义x轴
        let xAxis = d3.svg.axis()
          .scale(xScale)
          .orient("bottom");

        //定义y轴
        let yAxis = d3.svg.axis()
          .scale(yScale)
          .orient("left");

        //矩形之间的空白
        let rectPadding = 28/dataset.length;

        //定义矩形元素
        let rects=svg.selectAll(".MyRect")
          .data(dataset)
          .enter()
          .append("rect")
          .attr("class","MyRect")
          .attr("fill", color1)
          .on("mouseover", function(d,i){
            d3.select(this).attr("fill", color2);
          })
          .on("mouseout",  function(d,i){
            d3.select(this).attr("fill", color1);
          })
          .attr("transform","translate("+(padding.left+10)+","+padding.top+")")
          .attr("x", (d,i) => (xScale(i)+rectPadding/2))
          .attr("y", d => {
            let min=yScale.domain()[0];
            return yScale(min);
          })
          .attr("y", d => yScale(0))
          .attr("width",xScale.rangeBand()-rectPadding)
          .transition()
          .delay((d,i) => i*200)
          .duration(2000)
          .ease("bounce")//设定过渡样式
          .attr("y", d => yScale(d))
          .attr("height", d => (height-padding.top-padding.bottom-yScale(d)));

        //添加文字元素
        let tests=svg.selectAll(".MyText")
          .data(dataset)
          .enter()
          .append("text")
          .attr("class","MyText")
          .attr("fill", color3)
          .attr("font-size", fontSize)
          .attr("font-family", fontFamily)
          .attr("transform","translate("+padding.left+","+padding.top+")")
          .attr("x",(d,i) => (xScale(i)+rectPadding/2))
          .attr("dx",()=>(xScale.rangeBand()-rectPadding)/2)
          .attr("dy",d=>20)
          .text(d=>d)
          .attr("y", d=>{
            let min=yScale.domain()[0];
            return yScale(min);
          })
          .attr("y",d=>yScale(0))
          .transition()
          .delay((d,i) => i*200)
          .duration(2000)
          .ease("bounce")
          .attr("y", d=>yScale(d));

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
    },
    mounted(){
      axios.get("",{

        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        }
      }).then(function (res) {
        //成功获取数据
        console.log(res.status);
        if(res.status==200){

          //alert("登录成功");
          //window.location.href="../#/";
        }else{
          alert("用户名或密码错误");
        }
      }).catch(function (err) {
        //请求错误
        console.log(err);
      });
      let dataset=[10, 20, 30, 40, 33, 24, 12, 5,10, 20, 30, 40, 33, 24, 12, 5];
      let color1 = "steelblue";
      let color2 = "#84D0FF";
      let color3 = "#ffffff";
      let fontFamily = "microsoft yahei";
      let fontSize = 16;
      this.barGraph(dataset,color1, color2, fontFamily, fontSize,color3);
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



