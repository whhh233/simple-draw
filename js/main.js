var names = [
	{ name: "艾瑞", weight: 10 },
	{ name: "张婷", weight: 10 },
	{ name: "陈璨", weight: 10 },
	{ name: "包怡宁", weight: 10 },
	{ name: "毕城悦", weight: 10 },
	{ name: "曹丽人", weight: 10 },
	{ name: "曹馨月", weight: 10 },
	{ name: "曾伊冉", weight: 10 },
	{ name: "陈家祺", weight: 10 },
	{ name: "陈思语", weight: 10 },
	{ name: "陈依涵", weight: 10 },
	{ name: "程梦媛", weight: 10 },
	{ name: "程欣怡", weight: 10 },
	{ name: "程艳", weight: 10 },
	{ name: "范心茹", weight: 10 },
	{ name: "高子涵", weight: 10 },
	{ name: "宫淼", weight: 10 },
	{ name: "胡凤琳", weight: 10 },
	{ name: "华文轩", weight: 10 },
	{ name: "孔淑娴", weight: 10 },
	{ name: "雷亿茜", weight: 10 },
	{ name: "李昊宸", weight: 10 },
	{ name: "李欣洁", weight: 10 },
	{ name: "李运冉", weight: 10 },
	{ name: "刘熙雨", weight: 10 },
	{ name: "娄梦颖", weight: 10 },
	{ name: "倪美沁", weight: 10 },
	{ name: "钱海昕", weight: 10 },
	{ name: "阮淑影", weight: 10 },
	{ name: "孙溶", weight: 10 },
	{ name: "孙心怡", weight: 10 },
	{ name: "唐星", weight: 10 },
	{ name: "田琪琪", weight: 10 },
	{ name: "汪浩平", weight: 10 },
	{ name: "王馨语", weight: 10 },
	{ name: "王业琦", weight: 10 },
	{ name: "王漪如", weight: 10 },
	{ name: "王义龙", weight: 10 },
	{ name: "王紫琦", weight: 10 },
	{ name: "韦皖莹", weight: 10 },
	{ name: "吴涵", weight: 10 },
	{ name: "吴宁静", weight: 10 },
	{ name: "吴琼", weight: 10 },
	{ name: "吴奕璇", weight: 10 },
	{ name: "徐嫣妍", weight: 10 },
	{ name: "严欣怡", weight: 10 },
	{ name: "姚昕悦", weight: 10 },
	{ name: "袁昌庆", weight: 10 },
	{ name: "张诗涵", weight: 10 },
	{ name: "赵徐慧", weight: 10 },
	{ name: "左豪", weight: 10 }
  ];
  
  
  var drawname;
  var index = -1;
  var time;
  var flag = 1;
  
  function btnOnclick() {
	if (flag % 2 == 1) {
	  begin();
	  document.getElementById("BTN").value = "按A暂停";
	}
	if (flag % 2 == 0) {
	  end();
	  document.getElementById("BTN").value = "按A开始";
	}
	flag++;
  }
  
  function begin() {
	document.getElementById("BTN").disabled = false;
	draw();
  }
  
  function draw() {
	if (names.length > 0) {
	  var totalWeight = names.reduce(function(sum, name) {
		return sum + name.weight;
	  }, 0);
  
	  var randomWeight = Math.random() * totalWeight;
	  var accumulatedWeight = 0;
  
	  for (var i = 0; i < names.length; i++) {
		var name = names[i];
		accumulatedWeight += name.weight;
  
		if (randomWeight <= accumulatedWeight) {
		  index = i;
		  drawname = name.name;
		  break;
		}
	  }
  
	  document.getElementById("result").innerHTML = drawname;
	  time = window.setTimeout(draw, 2);
	} else {
	  document.getElementById("result").innerHTML = "~请刷新网页~";
	}
  }
  
  function speech() {
	var url = "https://fanyi.sogou.com/reventondc/synthesis?text=" + drawname + "&speed=0.7&lang=zh-CHS&from=translateweb&speaker=2";
	new Audio(url).play();
  }
  
  function end() {
	speech();
	window.clearTimeout(time);
	document.getElementById("BTN").disabled = false;
	names.splice(index, 1);
  }
  