$(function() {

  var COLORS = [ '#a839b2', '#ff0071', '#acd030', '#58aa00', '#00aa78', '#0074ae' ];

  $.fn.fadeTo = function(color, duration, callback) {
    var h1 = $(this);
    var clone = h1.clone();
    clone.hide();
    clone.find('a').css({
      color:    color
    });
    clone.css({
      position: 'absolute',
      top:      ''+ h1.position().top + 'px',
      left:     ''+ h1.position().left + 'px'
    });
    $('#header').append(clone);
    clone.fadeIn(duration, callback);
  },

  $.fn.nextColor = function(colors, duration) {
    if (colors.length == 0) return;
    var color = colors.pop();
    $(this).fadeTo(color, duration, function() {
      $(this).nextColor(colors, duration);
    });
  };
  
  $.fn.rainbowify = function() {
    $(this).each(function() { 
      var element = $(this);
      $(element).nextColor(COLORS, 5000);
    });
  };

  $('h1').rainbowify();


});
