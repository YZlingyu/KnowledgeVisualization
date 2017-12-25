<template>
  <div id="container" ref="myBox">
    <h1 class="title1">GDP走势图</h1>
    <div id="zoom">
      <span class="name"></span>
    </div>
    <div id="main4"></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        //property:''
      }
    },
    methods: {

    },
    mounted() {
      /*var dataset = [{
        describe: "china",
        value: [
          [2000, 11920],
          [2001, 13170],
          [2002, 14550],
          [2003, 16500],
          [2004, 19440],
          [2005, 22870],
          [2006, 27930],
          [2007, 35040],
          [2008, 45470],
          [2009, 51050],
          [2010, 59490],
          [2011, 73140],
          [2012, 83860],
          [2013, 103550]
        ]
      }, {
        describe: "japan",
        value: [
          [2000, 47310],
          [2001, 41590],
          [2002, 39800],
          [2003, 43020],
          [2004, 46550],
          [2005, 45710],
          [2006, 43560],
          [2007, 43560],
          [2008, 48490],
          [2009, 50350],
          [2010, 54950],
          [2011, 59050],
          [2012, 59070],
          [2013, 48980]
        ]
      }];
      var padding = {
        top: 50,
        right: 50,
        bottom: 50,
        left: 100
      };
      var height = 500;
      var width = 700;


      var color = ["#4682B4", "#690504"];
      var title = "GDP走势图";
      var property = {
        dataset: dataset,
        height: height,
        width: width,
        title: title,
        padding: padding,
        color: color,
        xOrient: "bottom",
        yOrient: "left",

      }*/


      let echarts = require('echarts/lib/echarts');
      let myChart = echarts.init(document.getElementById('main4'));

// 设置容器高宽
      var option = {
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data:['最高气温','最低气温']
        },
        toolbox: {
          show: true,
          feature: {
            dataZoom: {
              yAxisIndex: 'none'
            },
            dataView: {readOnly: false},
            magicType: {type: ['line', 'bar']},
            restore: {},
            saveAsImage: {}
          }
        },
        xAxis:  {
          type: 'category',
          boundaryGap: false,
          data: ['周一','周二','周三','周四','周五','周六','周日']
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            formatter: '{value} °C'
          }
        },
        series: [
          {
            name:'最高气温',
            type:'line',
            data:[11, 11, 15, 13, 12, 13, 10],
            markPoint: {
              data: [
                {type: 'max', name: '最大值'},
                {type: 'min', name: '最小值'}
              ]
            },
            markLine: {
              data: [
                {type: 'average', name: '平均值'}
              ]
            }
          },
          {
            name:'最低气温',
            type:'line',
            data:[1, -2, 2, 5, 3, 2, 0],
            markPoint: {
              data: [
                {name: '周最低', value: -2, xAxis: 1, yAxis: -1.5}
              ]
            },
            markLine: {
              data: [
                {type: 'average', name: '平均值'},
                [{
                  symbol: 'none',
                  x: '90%',
                  yAxis: 'max'
                }, {
                  symbol: 'circle',
                  label: {
                    normal: {
                      position: 'start',
                      formatter: '最大值'
                    }
                  },
                  type: 'max',
                  name: '最高点'
                }]
              ]
            }
          }
        ]
      };

      myChart.setOption(option);


    }
  }
</script>

<style>
  #main4{
    margin: 0 auto;
    text-align: center;
    vertical-align: middle;
    height: 500px;
    width: 500px;
  }
  .overlay {
    fill: none;
    pointer-events: all;
  }

  .tooltip2 {
    position: absolute;
    border: 1px solid #cccccc;
    padding: 10px;
    border-radius: 5px;
  }

  .tooltip2 .title2 {
    border-bottom: 1px solid #000;
    test-align: center;
    color:#ccc;
  }

  .tooltip2 .desColor {
    width: 10px;
    height: 10px;
    float: left;
    margin: 9px 8px 1px 8px;
  }

  .tooltip2 .desText {
    color: #cccccc;
    display: inline-block;
  }

  .axis {
    fill: none;
    stroke: #ccc;
    /*shape-rendering: crispEdges;*/
  }

  .path {
    fill: none;
    stroke-width: 3;
  }
</style>





