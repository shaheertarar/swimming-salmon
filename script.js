var fishNum = 10;
var allFish;
var windowWidth;
var windowHeight;
var values = [-1, 1];

function moveFish(){
	for (var i=0; i<allFish.length; i++){
		var randX = randNum(windowWidth);
		var randY = randNum(windowHeight);
		var fishDirection = values[randNum(values.length)];

		$(allFish[i]).css('top', randY + 'px');
		$(allFish[i]).css('left', randX + 'px');
		$(allFish[i]).css('transform', 'scaleX('+fishDirection+')');
	}
}

function randNum(x){
	var random = Math.random()*x;
	random = Math.floor(random);
	return random;
}

window.onload = function(){
	windowWidth = $(window).width();
	windowHeight = $(window).height();

	for (var i=0; i<fishNum; i++){
		var fish = $('<img class="fish" src="salmon.png">');
		var randX = randNum(windowWidth);
		var randY = randNum(windowHeight);
		var fishDirection = values[randNum(values.length)];

		$(fish).css('top', randY + 'px');
		$(fish).css('left', randX + 'px');
		$(fish).css('transform', 'scaleX('+fishDirection+')');
		
		$('body').append(fish);
	}

	allFish = $('.fish');
	setInterval(moveFish, 1000);
}