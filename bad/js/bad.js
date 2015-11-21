function repeatingSelectorsBad() {
  	$('#right-side div ul li a').css('color', 'red');
  	$('#right-side div ul li a').css('font-weight', 'bold');
  	$('#right-side div ul li a').css('font-size', '26px');
  	$('#right-side div ul li a').addClass('somelinks');
  	$('#right-side div ul li a').css('border', '1px solid red');
  	$('#right-side div ul li a').css('background-color', 'yellow');
}
function repeatingSelectorsGood() {
	var $theseLinks = $('#right-side div ul li a');
  	$theseLinks.css('color', 'red');
  	$theseLinks.css('font-weight', 'bold');
  	$theseLinks.css('font-size', '26px');
  	$theseLinks.addClass('somelinks');
  	$theseLinks.css('border', '1px solid red');
  	$theseLinks.css('background-color', 'yellow');
}

function cacheThisBad() {
	
	var $theseLinks = $('#right-side div ul li a');
	
	$theseLinks.click(function() {
	  	$(this).css('color', 'red');
	  	$(this).css('font-weight', 'bold');
	  	$(this).css('font-size', '26px');
	  	$(this).css('border', '1px solid red');
	  	$(this).css('background-color', 'yellow');
	});
}
function cacheThisGood() {

	var $theseLinks = $('#right-side div ul li a');

	$theseLinks.click(function() {
		var $this = $(this); // cache $(this)
	  	$this.css('color', 'red');
	  	$this.css('font-weight', 'bold');
	  	$this.css('font-size', '26px');
	  	$this.css('border', '1px solid red');
	  	$this.css('background-color', 'yellow');
	});
}

function bulkAppendBad() {
	var $theContainer = $('.the-container');
	var theDate = new Date();
	var theTime = '';

	for(var i = 0; i <= 500; i++) {
		theTime = theDate.getTime() + ~~(Math.random() * 1000);
		$theContainer.append('<div class="thisthing" id="thisThing' + theTime + '">This is a test for ' + theTime + '</div>');
	}
}
function bulkAppendGood() {
	var $theContainer = $('.the-container');
	var theDate = new Date();
	var theTime;
	var appendHTML = '';

	for(var i = 0; i <= 500; i++) {
		theTime = theDate.getTime() + ~~(Math.random() * 1000);
		appendHTML += '<div class="thisthing" id="thisThing' + theTime + '">This is a test for ' + theTime + '</div>';
	}
	$theContainer.append(appendHTML);
}

function badSelectorsBad() {
  	$('html body #right-side div ul li a').css('color', 'red');
  	$('html body #right-side div ul li a').css('font-weight', 'bold');
  	$('html body #right-side div ul li a').css('font-size', '26px');
  	$('html body #right-side div ul li a').css('border', '1px solid red');
  	$('html body #right-side div ul li a').css('background-color', 'yellow');
}
function badSelectorsGood() {
  	$('.list-of-things a').css('color', 'red');
  	$('.list-of-things a').css('font-weight', 'bold');
  	$('.list-of-things a').css('font-size', '26px');
  	$('.list-of-things a').css('border', '1px solid red');
  	$('.list-of-things a').css('background-color', 'yellow');
}

function unnecessaryEachBad() {
	$('.list-of-things').each(function() {
	  	$(this).find('a').css('color', 'red');
	});
}
function unnecessaryEachGood() {
	$('.list-of-things a').css('color', 'red');
}

function unnecessaryConditionalBad() {

	$('.list-of-things').each(function() {
		var $this = $(this);
	  	if( $this.hasClass('active') ) {
	  		$this.find('a').css('color', 'red');
	  	}
	});
}
function unnecessaryConditionalGood() {
	$('.list-of-things.active a').css('color', 'red');
}

function objectParamsBad() {
	var $theseLinks = $('.list-of-things a');
  	$theseLinks.css('color', 'red');
  	$theseLinks.css('font-weight', 'bold');
  	$theseLinks.css('font-size', '26px');
  	$theseLinks.css('border', '1px solid red');
  	$theseLinks.css('background-color', 'yellow');
}
function objectParamsGood() {
	$('.list-of-things a').css({
		color: 'red',
		fontWeight: 'bold',
		fontSize: 26,
		border: '1px solid red',
		backgroundColor: 'yellow'
	});
}

function spaceParamsBad() {
	$('.list-of-things').addClass('someclass1').addClass('someclass2').addClass('someclass3').addClass('someclass4');
}
function spaceParamsGood() {
	$('.list-of-things').addClass('someclass1 someclass2 someclass3 someclass4');
}
