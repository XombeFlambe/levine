(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Drawer = require('./views/drawer.js');
var Menu = require('./views/menu.js');
var Modal = require('./views/modal.js');
var Accordion = require('./views/accordion.js');
var Dropdown = require('./views/dropdown.js');
var Tooltip = require('./views/tooltip.js');
var Topside = require('./views/topside.js');
var EaseScroll = require('./views/easeScroll.js');
var Tabs = require('./views/tabModal.js');
var Tabs = require('./views/tabs.js');
var Steps = require('./views/steps.js');
},{"./views/accordion.js":2,"./views/drawer.js":3,"./views/dropdown.js":4,"./views/easeScroll.js":5,"./views/menu.js":6,"./views/modal.js":7,"./views/steps.js":8,"./views/tabModal.js":9,"./views/tabs.js":10,"./views/tooltip.js":11,"./views/topside.js":12}],2:[function(require,module,exports){
/* Accordion Module ***************************************************************************/
$(document).ready(Accordion = function() {
	var accordion = '.js-accordion';
	var item = '.js-accordion-item';
	var trigger = '.js-accordion-trigger';
	var content = '.js-accordion-content';
	var contentActive = '.js-accordion-content.isActive';
	var icon = 'i';
	var duration = 300;

	// Styles accordion item if you choose to start with an open accordion on load //
	$(accordion).find('.isActive').parent(item).find('i').addClass('isActive');
	$(accordion).find('.isActive').css("display", "block");

	// Click function logic //
	$(accordion).find(item).find(trigger).click(function(event) {

		$(accordion).find(contentActive).slideUp(duration);
		$(accordion).find(icon).removeClass('isActive');

		if ($(this).next(content).hasClass('isActive')) {
            $(content).removeClass('isActive');
            $(this).find(icon).removeClass('isActive');
        } else {
			$(content).removeClass('isActive');
			$(this).next(content).slideDown(duration);
			$(this).next(content).addClass('isActive');
			$(this).find(icon).addClass('isActive');
		}

	});
});

module.exports = Accordion;

},{}],3:[function(require,module,exports){
/* Drawer Module ***************************************************************************/
$(document).ready(Drawer = function() {
	var drawer = '.js-drawer';
	var trigger = '.js-drawer-trigger';
	var content = '.js-drawer-content';

	$(drawer).find(trigger).click(function() {
		$(this).next(content).slideToggle(200);
		$(this).toggleClass('active');
		return false;
	});
});

module.exports = Drawer;
},{}],4:[function(require,module,exports){
/* Dropdown Module ***************************************************************************/
$(document).ready(Dropdown = function() {
	var dropdown = '.js-dropdown';
	var trigger = '.js-dropdown-trigger';
	var content = '.js-dropdown-content';

	if (document.documentElement.clientWidth < 768) {
		$(dropdown).find(trigger).click(function() {
			$(this).next(content).slideToggle(200);
			$(this).find('i').toggleClass('isActive');
		});
	}
});

module.exports = Dropdown;
},{}],5:[function(require,module,exports){
/* Ease Scroll Function ***************************************************************************/
$(document).ready(EaseScroll = function() {
	$('a.js-nav').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		var target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		if (target.length) {
			$('html,body').animate({
				scrollTop: target.offset().top
				}, 500);
				return false;
			}
		}
	});
});

module.exports = EaseScroll;
},{}],6:[function(require,module,exports){
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
},{}],7:[function(require,module,exports){
/* Modal Module ***************************************************************************/
$(document).ready(Modal = function() {
	var modalArc = '.js-modalArc';
	var trigger = '.js-modalTrigger';
	var modal = '.js-modal';
	var content = '.js-modal-content';
	var close = '.js-modal-close';
	var maskClose = '.js-modal-mask_close';
	var duration = 300;

	$(modalArc).find(trigger).click(function() {
		$(this).parents(modalArc).find(modal).fadeIn(duration);
	});
	$(modal).find(close).click(function() {
		$(this).parent(content).parent(modal).fadeOut(duration);
	});
	$(maskClose).click(function() {
		$(this).parent(modal).fadeOut(duration);
	});
});

module.exports = Modal;
},{}],8:[function(require,module,exports){
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
},{}],9:[function(require,module,exports){
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
},{}],10:[function(require,module,exports){
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
},{}],11:[function(require,module,exports){
/* Tooltip Module ***************************************************************************/
$(document).ready(Tooltip = function() {
	var bubble = '.js-bubble';
	var trigger = '.js-bubble-trigger';
	var content = '.js-bubble-content';

	$(bubble).find(trigger).click(function() {
		$(this).next(content).fadeToggle(200);
	});
	$(bubble).find(content).click(function() {
		$(this).fadeToggle(200);
	});
});

module.exports = Tooltip;
},{}],12:[function(require,module,exports){
/* Back to Top Button ***************************************************************************/
$(document).ready( Topside = function() {
	var topside = '.js-topside';
    var offset = 900;
    var duration = 0;

    $(window).scroll(function() {
        if ($(this).scrollTop() > offset) {
            $(topside).fadeIn(duration);
        } else {
            $(topside).fadeOut(duration);
        }
    });
 
    $(topside).click(function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, 500);
        return false;
    });
});

module.exports = Topside;
},{}]},{},[1])