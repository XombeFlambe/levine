/* Steps Module ***************************************************************************/
$(document).ready(Steps = function() {
	var step = '.js-step';
	var trigger = '.js-step-trigger';
	var content = '.js-step-content';

	$(trigger).find('li:eq(0) a').addClass('isActive');

	function activateTrigger() {
		var index = $(trigger).find('a:focus').closest('li').index();
		$(trigger).find('li a').removeClass('isActive');
		$(trigger).find('li:eq(' + index + ') a').addClass('isActive');
	}

	$(step).find(trigger).find('li').click(function (g) {
		activateTrigger();
		g.preventDefault();
	});

	$(step).find(trigger).find('li:eq(0)').click(function() {
		$(this).parents(step).find(content).removeClass().addClass('js-step-content ');
	});
	
	$(step).find(trigger).find('li:eq(1)').click(function() {
		$(this).parents(step).find(content).removeClass().addClass('js-step-content step-content_2');
	});

	$(step).find(trigger).find('li:eq(2)').click(function() {
		$(this).parents(step).find(content).removeClass().addClass('js-step-content step-content_3');
	});

});

module.exports = Steps;