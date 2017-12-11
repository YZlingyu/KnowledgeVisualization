<template>
  <div class="container">
    <h1 class="title1">人物关系图谱</h1>
    <div id="main5"></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    mounted() {
      var width  = 700;
      var height = 600;

      var svg = d3.select("#main5").append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", "translate(0,0)");

      var projection = d3.geo.mercator()
        .center([107, 32])
        .scale(550)
        .translate([width/2, height/2]);

      var path = d3.geo.path()
        .projection(projection);


      var color = d3.scale.category20();


      d3.json("/static/china.json", function(error, root) {

        if (error)
          return console.error(error);
       // console.log(root.features);
        var groups = svg.append("g");

        /*var provinces = groups.selectAll("path")
          .data( root.features )
          .enter()
          .append("path")
          .attr("class","province")
          .style("fill", function(d,i){
            return color[i];
          })
          .attr("d", path );*/

        groups.selectAll("path")
          .data( root.features )
          .enter()
          .append("path")
          .attr("stroke","none")
        //  .attr("stroke-width",1)
          .attr("fill", function(d,i){
            return color(i);
          })
          .attr("d", path )
          .on("mouseover",function(d,i){
           // console.log(d)
            d3.select(this)
              .attr("fill","yellow");
          })
          .on("mouseout",function(d,i){
            d3.select(this)
              .attr("fill",color(i));
          });
        d3.json("/static/places.json", function(error, places ) {

          //插入分组元素
          var location = svg.selectAll(".location")
            .data(places.location)
            .enter()
            .append("g")
            .attr("class","location")
            .attr("transform",function(d){
              //计算标注点的位置
              var coor = projection([d.log, d.lat]);
              return "translate("+ coor[0] + "," + coor[1] +")";
            });

          //插入一个圆
          location.append("circle")
            .attr("r",7);

          //插入一张图片
          location.append("image")
            .attr("x",20)
            .attr("y",-40)
            .attr("width",90)
            .attr("height",90)
            .attr("xlink:href",function(d){
              return d.img;
            });

        });

      });

     /* d3.xml("/static/southchinasea.svg", function(error, xmlDocument) {
        svg.html(function(d){
          return d3.select(this).html() + xmlDocument.getElementsByTagName("g")[0].outerHTML;
        });

        var gSouthSea = d3.select("#southsea");

        gSouthSea.attr("transform","translate(540,410)scale(0.5)")
          .attr("class","southsea");

      });*/

    }
  }
</script>

<style>
  #main5{
    margin: 0 auto;
    text-align: center;
    vertical-align: middle;
  }
  .province {
    stroke: black;
    stroke-width: 1px;
  }

  .southsea {
    stroke: black;
    stroke-width: 1px;
    fill: #ccc;
  }

  .location circle{
    fill: blue;
  }

</style>



