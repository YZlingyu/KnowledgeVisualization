<template>
  <div class="container">
    <h1 class="title1">人物关系图谱</h1>
    <div id="main2"></div>
    <div class="toolBar"></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        dataset1:'',
        nodeLevel1:'',
        nodeRadius1:'',
        nodeColor1:'',
        chooseColor1:'',
        chooseRadius1:'',
        relationship1:'',
        linkWidth1:'',
        linkColor1:'',
        textFont1:'',
        textSize1:'',
        textColor1:''
      }
    },
    watch:{
      dataset(){
        this.dataset1 = this.dataset;
        console.log(this.dataset1);
      },
      nodeLevel(){
        console.log(this.nodeLevel);
      },
      nodeRadius(){
        console.log(this.nodeRadius);
      },
      nodeColor(){
        console.log(this.nodeColor);
      },
      chooseColor(){
        console.log(this.chooseColor);
      },
      chooseRadius(){
        console.log(this.chooseRadius);
      },
      relationship(){
        console.log(this.relationship);
      },
      linkWidth(){
        console.log(this.linkWidth);
      },
      linkColor(){
        console.log(this.linkColor);
      },
      textFont(){
        console.log(this.textFont);
      },
      textSize(){
        console.log(this.textSize);
      },
      textColor(){
        console.log(this.textColor);
      },
      deep: true
    },
  mounted(){
     // console.log(this.dataset1);

      var nodes = [
        { "name": "云天河"   , "image" : "tianhe.png" },
        { "name": "韩菱纱"   , "image" : "lingsha.png" },
        { "name": "柳梦璃"   , "image" : "mengli.png" },
        { "name": "慕容紫英" , "image" : "ziying.png" },
        { "name": "云天青" , "image" : "tianqing.png" },
        { "name": "夙玉" , "image" : "suyu.png" },
        { "name": "玄霄" , "image" : "xuanxiao.png" },
        { "name": "夙瑶" , "image" : "suyao.png" },
        { "name": "太清" , "image" : "taiqing.png" },
        { "name": "宗炼" , "image" : "zonglian.png" },
        { "name": "婵幽" , "image" : "chanyou.png" },
        { "name": "奚仲" , "image" : "xizhong.png" },
        { "name": "归邪" , "image" : "guixie.png" }
      ];

      var edges = [
        { "source": 0 , "target": 1 , "relation":"挚友" },
        { "source": 0 , "target": 2 , "relation":"挚友" },
        { "source": 0 , "target": 3 , "relation":"挚友" },
        { "source": 1 , "target": 2 , "relation":"挚友" },
        { "source": 1 , "target": 3 , "relation":"挚友" },
        { "source": 2 , "target": 3 , "relation":"挚友" },
        { "source": 0 , "target": 4 , "relation":"父子" },
        { "source": 0 , "target": 5 , "relation":"母子" },
        { "source": 4 , "target": 5 , "relation":"夫妻" },
        { "source": 0 , "target": 6 , "relation":"义兄弟" },
        { "source": 4 , "target": 6 , "relation":"同门" },
        { "source": 5 , "target": 6 , "relation":"同门" },
        { "source": 4 , "target": 7 , "relation":"同门" },
        { "source": 5 , "target": 7 , "relation":"同门" },
        { "source": 6 , "target": 7 , "relation":"同门" },
        { "source": 4 , "target": 8 , "relation":"师徒" },
        { "source": 5 , "target": 8 , "relation":"师徒" },
        { "source": 6 , "target": 8 , "relation":"师徒" },
        { "source": 7 , "target": 8 , "relation":"师徒" },
        { "source": 8 , "target": 9 , "relation":"同门" },
        { "source": 3 , "target": 9 , "relation":"师徒" },
        { "source": 2 , "target": 10 , "relation":"母子" },
        { "source": 10 , "target": 11 , "relation":"主臣" },
        { "source": 10 , "target": 12 , "relation":"主臣" },
        { "source": 11 , "target": 12 , "relation":"同僚" }
      ];

      var width = 500;
      var height = 600;


      var svg = d3.select("#main2")
        .append("svg")
        .attr("width",width)
        .attr("height",height);

      var force = d3.layout.force()
        .nodes(nodes)		//指定节点数组
        .links(edges)		//指定连线数组
        .size([width,height])	//指定范围
        .linkDistance(150)	//指定连线长度
        .charge(-400);	//相互之间的作用力

      force.start();	//开始作用

     // console.log(nodes);
      //console.log(edges);

//添加连线
      var svg_edges = svg.selectAll("line")
        .data(edges)
        .enter()
        .append("line")
        .style("stroke","#ccc")
        .style("stroke-width",1);

     // var color = d3.scale.category20();
        var color = ["#7C5053", "#6B1901", "#B42A01", "#B45A2D", "#B48733", "#D9B318", "#D9D316",
        "#85B02F", "#6EB04A", "#2FA2B0", "#2A87B0", "#35AADE", "#4D6CDE"];

//添加节点
      var svg_nodes = svg.selectAll("circle")
        .data(nodes)
        .enter()
        .append("circle")
        .attr("r",20)
        .style("fill",function(d,i){
          return color[i];
        })
        .on("mouseover", function(d, i){
          //console.log(d)
          if(nodes.name === d.name){
            forceImg.style("fill-opacity",1.0);
          }
        })
        .on("mouseout",function(d,i) {
          if(nodes.name === d.name){
            forceImg.style("fill-opacity",0.0);
          }
        })
        .call(force.drag);	//使得节点能够拖动

//添加描述节点的文字
      var svg_texts = svg.selectAll("text")
        .data(nodes)
        .enter()
        .append("text")
        .style("fill", "black")
        .attr("dx", 20)
        .attr("dy", 8)
        .attr("opacity", 0.0)
        .text(function(d){
          return d.name;
        });

      var edges_text = svg.selectAll(".linetext")
        .data(edges)
        .enter()
        .append("text")
        .attr("class","linetext")
        .style("fill", "black")
        .text(function(d){
          return d.relation;
        });


      force.on("tick", function(){	//对于每一个时间间隔

//更新连线坐标
        svg_edges.attr("x1",function(d){ return d.source.x; })
          .attr("y1",function(d){ return d.source.y; })
          .attr("x2",function(d){ return d.target.x; })
          .attr("y2",function(d){ return d.target.y; });

//更新节点坐标
        svg_nodes.attr("cx",function(d){ return d.x; })
          .attr("cy",function(d){ return d.y; });

//更新文字坐标
        svg_texts.attr("x", function(d){ return d.x; })
          .attr("y", function(d){ return d.y; });

        edges_text.attr("x",function(d){ return (d.source.x + d.target.x) / 2 ; });
        edges_text.attr("y",function(d){ return (d.source.y + d.target.y) / 2 ; });
      });
   // console.log(color);
      var toolBar = document.getElementsByClassName("toolBar")[0];
      var tool = "";
      for(var j=0; j<color.length;j++){
        tool += '<div class="circle1" style="background-color:'+color[j]+';"></div><span class="label2">'+nodes[j].name+'</span>';
      }
      toolBar.innerHTML=tool;
    },
  props:["dataset", "nodeLevel", "nodeRadius", "nodeColor", "chooseColor", "chooseRadius", "relationship", "linkWidth", "linkColor", "textFont", "textSize", "textColor"]
  };
</script>

<style>
  #main2{
    margin: 0 auto;
    text-align: center;
    vertical-align: middle;
  }
  .toolBar{
    text-align: center;
    margin-bottom: 10px;
  }
  .circle1{
    width: 10px;
    height: 10px;
    border-radius: 50px;
    display: inline-block;
  }
  .label2{
    margin-left: 10px;
  }
</style>



