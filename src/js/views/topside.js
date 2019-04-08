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