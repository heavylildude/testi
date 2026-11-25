function blabla(x) {
	document.getElementById('slider').style.backgroundImage = "url(" + x + ")";
}

function cycleImg() {
	var curImg = document.getElementById('slider').className;

	if (curImg == 'slidercont two') {
		document.getElementById('slider').style.backgroundImage = "url(assets/images/monitor.jpg)";
		document.getElementById('slider').className = "slidercont three";
	} else if (curImg == 'slidercont three') {
		document.getElementById('slider').style.backgroundImage = "url(assets/images/keyboard.jpg)";
		document.getElementById('slider').className = "slidercont";
	} else {
		document.getElementById('slider').style.backgroundImage = "url(assets/images/mouse.jpg)";
		document.getElementById('slider').className = "slidercont two";
	}
}

window.onload = setInterval(cycleImg, 1000);