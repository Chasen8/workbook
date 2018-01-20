/*
* @Author: Pearl8
* @Date:   2018-01-20 15:35:16
* @Last Modified by:   Pearl8
* @Last Modified time: 2018-01-20 15:51:18
*/

'use strict';
require('./index.css');
;(function(){
  var button = document.getElementById("button");
  button.onclick = function(){
    var text = document.getElementById("aqi-input");
    var display = document.getElementById("aqi-display");
    display.innerHTML = text.value;
  }
})();




