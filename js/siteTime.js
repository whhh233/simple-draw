function yxtime() {
	var startTime = new Date('2023-02-17T22:00:00');
	var currentTime = new Date();
	var diff = currentTime.getTime() - startTime.getTime();

	var centuries = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25 * 100));
	diff -= centuries * (1000 * 60 * 60 * 24 * 365.25 * 100);

	var years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
	diff -= years * (1000 * 60 * 60 * 24 * 365.25);

	var months = Math.floor(diff / (1000 * 60 * 60 * 24 * (365.25 / 12)));
	diff -= months * (1000 * 60 * 60 * 24 * (365.25 / 12));

	var days = Math.floor(diff / (1000 * 60 * 60 * 24));
	diff -= days * (1000 * 60 * 60 * 24);

	var hours = Math.floor(diff / (1000 * 60 * 60));
	diff -= hours * (1000 * 60 * 60);

	var minutes = Math.floor(diff / (1000 * 60));
	diff -= minutes * (1000 * 60);

	var seconds = Math.floor(diff / 1000);

	document.getElementById('sitetime').innerHTML = + centuries + '世纪' + years + '年' + months + '个月' + days +
		'天' + hours + '小时' + minutes + '分' + seconds + '秒';
}
setInterval(yxtime, 1000);