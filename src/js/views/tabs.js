/* Tabs Module ***************************************************************************/
$(document).ready(Tabs = function() {
	var tab = '.js-tab';
	var trigger = '.js-tab-trigger';
	var duration = 300;

	$(tab).find(trigger).find('> li:eq(0)').addClass('isActive');
	
	$(tab).find(trigger).find('li a').click(function (g) {
		var tab = $(this).closest('.js-tab');
		var index = $(this).closest('li').index();
		var contentItem = '.js-tab-content-item';
		var contentItemActive = '.js-tab-content-item:eq(' + index + ')';
		
		$(tab).find(trigger).find('li').removeClass('isActive');
		$(this).closest('li').addClass('isActive');
		
		tab.find(contentItem).not(contentItemActive).slideUp(duration);
		tab.find(contentItemActive).slideDown(duration);
		
		g.preventDefault();

	});

});

module.exports = Tabs;