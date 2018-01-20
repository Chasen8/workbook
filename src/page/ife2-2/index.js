/*
* @Author: Pearl8
* @Date:   2018-01-20 15:35:16
* @Last Modified by:   Pearl8
* @Last Modified time: 2018-01-20 16:19:44
*/

'use strict';
require('./index.css');
var aqiData = [
  ["北京", 90],
  ["上海", 50],
  ["福州", 10],
  ["广州", 50],
  ["成都", 90],
  ["西安", 100]
];
;(function(){
 var arr = [1,2,3,4,5,6];
 var aqiUl = document.getElementById("aqi-list");
 /*排序*/
 aqiData.sort(function(a,b){
    return b[1] - a[1];
 })
 for (var i = 0; i < aqiData.length; i++) {
    var data = aqiData[i];
     if (data[1]>60) {
        var listItem = document.createElement("li");
        listItem.innerHTML = "第" + arr[i] + "名：" + data;
        aqiUl.appendChild(listItem);
     };
 };
})();




