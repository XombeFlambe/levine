/* Tabs Module ***************************************************************************/
$(document).ready(TabModal = function() {
	var tab = '.js-tabModal';
	var trigger = '.js-tabModal-trigger';
	var content = '.js-tabModal-content';
	var close = '.js-tabModal-content-close';
	var duration = 300;
	
	$(tab).find(trigger).find('li a').click(function (g) {
		var tab = $(this).closest('.js-tabModal');
		var index = $(this).closest('li').index();
		var contentItem = '.js-tabModal-content-item';
		var contentItemActive = '.js-tabModal-content-item:eq(' + index + ')';
		
		tab.find(content).fadeIn(duration);
		tab.find(contentItemActive).show();
		
		//g.preventDefault();

	});

	$(tab).find(close).click(function() {
		var contentItem = '.js-tabModal-content-item';

		$(this).parents(tab).find(content).fadeOut(duration);
		$(this).parents(tab).find(contentItem).fadeOut(duration);
	});

});

module.exports = TabModal;