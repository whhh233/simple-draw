var names = [
	"艾瑞","张婷","陈璨","包怡宁","毕城悦","曹丽人","曹馨月","曾伊冉","陈家祺","陈思语","陈依涵","程梦媛","程欣怡","程艳","范心茹","高子涵","宫淼","胡凤琳","华文轩","孔淑娴","雷亿茜","李昊宸","李欣洁","李运冉","刘熙雨","娄梦颖","倪美沁","钱海昕","阮淑影","孙溶","孙心怡","唐星","田琪琪","汪浩平","王馨语","王业琦","王漪如","王义龙","王紫琦","韦皖莹","吴涵","吴宁静","吴琼","吴奕璇","徐嫣妍","严欣怡","姚昕悦","袁昌庆","张诗涵","赵徐慧","左豪"
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
		index = Math.floor(Math.random() * 1000 % names.length);
		drawname = names[index];
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
