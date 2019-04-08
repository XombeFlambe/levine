/* Menu Module ***************************************************************************/
$(document).ready(Menu = function() {
	var menu = '.js-menu';
	var trigger = '.js-menu-trigger';
	var content = '.js-menu-content';

	$(menu).find(trigger).click(function() {
		$(this).next(content).toggleClass('active');
		$(this).parents('body').find(menu).find(content).find('.menu-language-content').slideUp();
		$(this).parents('body').find(menu).find(content).find('.menu-language-trigger').removeClass('active');
	});

	$(menu).find(content).find('a').not('.menu-language a').click(function() {
		$(this).parents(menu).find(content).removeClass('active');
		$(this).parents(menu).find(content).find('.menu-language-content').slideUp();
		$(this).parents(menu).find(content).find('.menu-language-trigger').removeClass('active');
	});

	$(menu).parents('body').find('a.js-nav').click(function() {
		$(this).parents('body').find(menu).find(content).removeClass('active');
		$(this).parents('body').find(menu).find(content).find('.menu-language-content').slideUp();
		$(this).parents('body').find(menu).find(content).find('.menu-language-trigger').removeClass('active');
	});

	$(menu).parents('body').find('.js-topside').click(function() {
		$(this).parents('body').find(menu).find(content).removeClass('active');
		$(this).parents('body').find(menu).find(content).find('.menu-language-content').slideUp();
		$(this).parents('body').find(menu).find(content).find('.menu-language-trigger').removeClass('active');
	});

});

module.exports = Menu;