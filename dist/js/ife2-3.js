webpackJsonp([8],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(100);


/***/ }),

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

	/*
	* @Author: Pearl8
	* @Date:   2018-01-20 15:35:16
	* @Last Modified by:   Pearl8
	* @Last Modified time: 2018-01-20 17:11:42
	*/

	'use strict';
	__webpack_require__(101);
	;(function(){

	})();


	/**
	 * getData方法
	 * 读取id为source的列表，获取其中城市名字及城市对应的空气质量
	 * 返回一个数组，格式见函数中示例
	 */
	function getData() {
	  var city = document.querySelectorAll('#source>li');
	  var data = [];
	  for (var i = 0;i < city.length; i++) {
	      var text = city [i].innerText;
	      var node = [text.substr(0,2),text.substr(-2,2)];
	      data.push(node);
	  };
	  return data;

	}

	/**
	 * sortAqiData
	 * 按空气质量对data进行从小到大的排序
	 * 返回一个排序后的数组
	 */
	function sortAqiData(data) {
	    data.sort(function(a,b){
	        return a[1] - b[1];
	    });
	    return data;
	}

	/**
	 * render
	 * 将排好序的城市及空气质量指数，输出显示到id位resort的列表中
	 * 格式见ul中的注释的部分
	 */
	function render(data) {
	    var arr = ["一","二","三","四","五","六","七"];
	    var resort = document.getElementById("resort");
	    for (var i =0;i< data.length; i++) {
	        var liText = "第" + arr[i] + "名：" + data[i][0] +"，" + '空气质量：';
	        var oLi =document.createElement("li");
	        var oB = document.createElement("b");
	        oLi.innerText = liText;
	        oB.innerText =data[i][1];
	        oLi.appendChild(oB);
	        resort.appendChild(oLi);
	    }
	}

	function btnHandle() {
	  var aqiData = getData();
	  aqiData = sortAqiData(aqiData);
	  render(aqiData);
	}

	function init() {
	    var btn = document.getElementById('sort-btn');
	        btn.onclick = function() {
	            btnHandle();
	    };
	  // 在这下面给sort-btn绑定一个点击事件，点击时触发btnHandle函数

	}

	init();






/***/ }),

/***/ 101:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ })

});