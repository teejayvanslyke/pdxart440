/*
$(function() {

  var COLORS = [ '#ff0071',  '#acd030', '#58aa00', '#00aa78', '#0074ae',  ];

  $.fn.fadeTo = function(color, duration, offset, callback) {
    var h1 = $(this);
    var clone = h1.clone();
    clone.hide();
    clone.css({
    });
    clone.css({
      position: 'absolute',
      color:    color,
      top:      ''+ (h1.position().top + offset.y) + 'px',
      left:     ''+ (h1.position().left + offset.x) + 'px'
    });
    $('#header').append(clone);
    $(window).resize(function() {
      clone.css({
        top:      ''+ (h1.position().top + offset.y) + 'px',
        left:     ''+ (h1.position().left + offset.x) + 'px'
      });
    });
    clone.show();
    callback.call($(this));
  },

  $.fn.nextColor = function(colors, duration) {
    if (colors.length == 0) return;
    var color = colors.pop();
    $(this).fadeTo(color, duration, {x: -20, y:20}, function() {
      $(this).nextColor(colors, duration);
    });
  };
  
  $.fn.rainbowify = function() {
    $(this).each(function() { 
      var element = $(this);
      $(element).nextColor(COLORS, 1);
    });
  };

  $('.rainbowify').rainbowify();



});
*/
