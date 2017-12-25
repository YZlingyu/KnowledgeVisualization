<template>
  <div id="container">
    <h1 class="title1">手机销售占比</h1>
    <div id="main6"></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    methods:{
     /* pie(property) {
   /!* document.getElementById("#container").innerHTML = '<button id="btn">print</button><h1 class="title1">' + property.title + '</h1><div id="zoom">'
      + '<div class="box"></div><span class="name"></span></div><div id="main"></div>';*!/
    // console.log(property);
    //document.getElementById("#container").style.backgroundColor = property.theme;
    var svg = d3.select("#main6")
      .append("svg")
      .attr("class", "svg")
      .attr("width", property.width)
      .attr("height", property.height);

    var pie = d3.layout.pie()
      .startAngle(property.startAngle)
      .endAngle(property.endAngle)
      .value(function (d) {
        return d[1];
      });

    var piedata = pie(property.dataset);

    var arc;

    var arcs = svg.selectAll("g")
      .data(piedata)
      .enter()
      .append("g")
      .each(function (d) {
        d.dx = property.width / 2;
        d.dy = property.height / 2;
      })
      .attr("transform", "translate(" + (property.width / 2) + "," + (property.height / 2) + ")");

    arcs.append("path")
      .attr("fill", function (d, i) {
        return property.color[i];
      })
      .attr("d", function (d) {
        arc = d3.svg.arc()
          .innerRadius(property.innerRadius)
          .outerRadius(property.outerRadius);
        //d.dx = dx+5;
        return arc(d);
      })
      .on("mouseover", function (d, i) {
        d3.select(this).attr("fill", property.overColor);
        d3.select(this).style("box-shadow", "5px 5px 5px #747474");
        d3.select(this).attr("d", function () {
          arc = d3.svg.arc()
            .innerRadius(property.overInnerRadius)
            .outerRadius(property.overOuterRadius);
          return arc(d);
        })
      })
      .on("mouseout", function (d, i) {
        d3.select(this).attr("fill", property.color[i]);
        d3.select(this).attr("d", function () {
          arc = d3.svg.arc()
            .innerRadius(property.innerRadius)
            .outerRadius(property.outerRadius);
          //d.dx = dx+5;
          return arc(d);
        })
      });

    arcs.append("text")
      .attr("transform", function (d) {
        var x = arc.centroid(d)[0] * 1.4;
        var y = arc.centroid(d)[1] * 1.4;
        return "translate(" + x + "," + y + ")";
      })
      .attr("text-anchor", "middle")
      .attr("font-size", 12)
      .text(function (d) {
        var percent = Number(d.value) /
          d3.sum(property.dataset, function (d) {
            return d[1];
          }) * 100;

        return percent.toFixed(1) + "%";
      });

    arcs.append("line")
      .attr("stroke", function (d, i) {
        return property.color[i];
      })
      .attr("x1", function (d) {
        return arc.centroid(d)[0] * 2;
      })
      .attr("y1", function (d) {
        return arc.centroid(d)[1] * 2;
      })
      .attr("x2", function (d) {
        return arc.centroid(d)[0] * 2.5;
      })
      .attr("y2", function (d) {
        return arc.centroid(d)[1] * 2.5;
      });

    arcs.append("text")
      .attr("transform", function (d) {
        var x = arc.centroid(d)[0] * 2.7;
        var y = arc.centroid(d)[1] * 2.7;
        return "translate(" + x + "," + y + ")";
      })
      .attr("fill", property.textColor)
      .attr("font-size", 12)
      .attr("text-anchor", "middle")
      .text(function (d) {
        return d.data[0];
      });

    //添加提示框
    var tooltip = d3.select(property.toolId)
      .append("div")
      .attr("class", "tooltip")
      .style("opacity", 0.0);

    arcs.on("mouseover", function (d, i) {
      tooltip.html(d.data[0] + property.tooltips[0] + "<br/>" +
        d.data[1] + property.tooltips[1])
        .style("left", (d3.event.pageX) + "px")
        .style("opacity", 1.0);

      tooltip.style("box-shadow", "10px 0 0 " + property.color[i]);
    })
      .on("mousemove", function (d) {
        tooltip.style("left", (d3.event.pageX) + "px")
          .style("top", (d3.event.pageY + 20) + "px");
      })
      .on("mouseout", function (d) {
        tooltip.style("opacity", 0.0);
      })


    //添加拖拽
    var drag = d3.behavior.drag()
      .origin(null)
      .on("drag", dragmove);

    function dragmove(d) {
      d.dx += d3.event.dx;
      d.dy += d3.event.dy;
      d3.select(this)
        .attr("transform", "translate(" + d.dx + "," + d.dy + ")");
    }

    arcs.call(drag);

    //提示信息
    var length = property.color.length;
    var txt = '';
    for (var i = 0; i < length; i++) {
      txt = txt + '<div class="box"></div><span class="name">' + property.dataset[i][0] + '</span>';
    }
    // document.getElementById("#zoom").innerHTML=txt;
    /!*for (i = 0; i < length; i++) {
      document.getElementsByClassName(".box")[i].style.backgroundColor = property.color[i];
    }*!/
  }*/

    },
    mounted() {
     /* var svg;
      var width = 800;
      var height = 400;
      var startAngle = 0,
        endAngle = Math.PI*2;
      var dataset =[
        ["小米",60.8], ["三星",58.4], ["联想",47.3], ["苹果",46.6], ["华为",41.3], ["酷派",40.1], ["其他",111.5]
      ];
      var tooltips = ["出货量是","百万台"]
      var color=["#086cff","#15BCFF","#20F2FF","#25FFDF","#27FFA5","#21FF70","#FFFD66"];
      var property={
        title: "请输入标题",
        theme: "#000",
        width: width,
        height: height,
        startAngle: startAngle,
        endAngle: endAngle,
        dataset: dataset,
        color: color,
        outerRadius: 100,
        innerRadius: 0,
        overOuterRadius: 150,
        overInnerRadius: 0,
        overColor: "pink",
        lineColor: color,
        textColor: "#646464",
        toolId: "body",
        tooltips: tooltips
      }

      this.pie(property);*/

      let echarts = require('echarts/lib/echarts');
      let myChart = echarts.init(document.getElementById('main6'));
      var data = genData(10);

      var option = {
        tooltip : {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          type: 'scroll',
          orient: 'vertical',
          right: 10,
          top: 30,
          bottom: 20,
          data: data.legendData
        },
        series : [
          {
            name: '姓名',
            type: 'pie',
            radius : '55%',
            center: ['40%', '50%'],
            data: data.seriesData,
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      };




      function genData(count) {
        var nameList = [
          '赵', '钱', '孙', '李', '周', '吴', '郑', '王', '冯', '陈', '褚', '卫', '蒋', '沈', '韩', '杨', '朱', '秦', '尤', '许', '何', '吕', '施', '张', '孔', '曹', '严', '华', '金', '魏', '陶', '姜', '戚', '谢', '邹', '喻', '柏', '水', '窦', '章', '云', '苏', '潘', '葛', '奚', '范', '彭', '郎', '鲁', '韦', '昌', '马', '苗', '凤', '花', '方', '俞', '任', '袁', '柳', '酆', '鲍', '史', '唐', '费', '廉', '岑', '薛', '雷', '贺', '倪', '汤', '滕', '殷', '罗', '毕', '郝', '邬', '安', '常', '乐', '于', '时', '傅', '皮', '卞', '齐', '康', '伍', '余', '元', '卜', '顾', '孟', '平', '黄', '和', '穆', '萧', '尹', '姚', '邵', '湛', '汪', '祁', '毛', '禹', '狄', '米', '贝', '明', '臧', '计', '伏', '成', '戴', '谈', '宋', '茅', '庞', '熊', '纪', '舒', '屈', '项', '祝', '董', '梁', '杜', '阮', '蓝', '闵', '席', '季', '麻', '强', '贾', '路', '娄', '危'
        ];
        var legendData = [];
        var seriesData = [];
        for (var i = 0; i < 10; i++) {
          name = Math.random() > 0.65
            ? makeWord(4, 1) + '·' + makeWord(3, 0)
            : makeWord(2, 1);
          legendData.push(name);
          seriesData.push({
            name: name,
            value: Math.round(Math.random() * 100000)
          });
        }

        return {
          legendData: legendData,
          seriesData: seriesData
        };

        function makeWord(max, min) {
          var nameLen = Math.ceil(Math.random() * max + min);
          var name = [];
          for (var i = 0; i < nameLen; i++) {
            name.push(nameList[Math.round(Math.random() * nameList.length - 1)]);
          }
          return name.join('');
        }
      }



      myChart.setOption(option);
    }
  }
</script>

<style>
  #main6{
    margin: 0px auto;
    text-align: center;
    height: 600px;
    width:100%;
  }
</style>



