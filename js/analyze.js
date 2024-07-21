// 设置外部依赖
var fs = require("fs");
var d3 = require("d3");
var _ = require("lodash");

fs.readFile("data/google.tsv", "utf8", function(error, data) {
    data = d3.tsvParse(data);
    console.log(JSON.stringify(data));
  
    var maxWeight = d3.max(data, function(d) { return d.avg_weight; });
    console.log(maxWeight);
  });
  