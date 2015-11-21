var links = [
	'repeatingSelectors',
	'cacheThis',
	'bulkAppend',
	'badSelectors',
	'unnecessaryEach',
	'unnecessaryConditional',
	'objectParams',
	'spaceParams'
];

var codelinks = '';
links.forEach(function(label,index) {
	codelinks += '<a href="#" class="codelink-toggle" id="' + label + '">' + label + '</a>';
	codelinks += '<div class="codelink-container" id="' + label + 'Container">';
		codelinks += '<a href="#" class="codelink" id="' + label + 'Bad" data-label="Bad">';
			codelinks += label + ' Bad';
		codelinks += '</a>';
		codelinks += '<a href="#" class="codelink" id="' + label + 'Good" data-good="Good">';
			codelinks += label + ' Good';
		codelinks += '</a>';
	codelinks += '</div>';
});
$('#left-side').append(codelinks);

$('.codelink').click(function() {

	console.time(this.id);
	window[this.id](); 
	console.timeEnd(this.id);
});

var $rightSide = $('#right-side');
$('.codelink-toggle').click(function() {
	var $this = $(this);
	$rightSide.html($('.' + this.id + 'HTML').html());
	$('.codelink-container').not('#' + this.id + 'Container').css({ height: 1 });
	$('#' + this.id + 'Container').css({ height: 'auto' });
});
