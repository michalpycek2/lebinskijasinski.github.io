var $ = jQuery.noConflict();
$(window).on('load', function () {
  var s = Snap('#svg'), bg = s.rect(0, 0, 1200, 270);



  var text = s.text(40, 115, ["KANCELARIA ADWOKACKA"]),
    text2 = s.text(40, 215, ["ŁEBIŃSKI & JASIŃSKI S.C."]),
    //gradient = s.gradient("l(0, 0, 1, 1)#609875-#e4e4d9-#fff"),
    gradient = s.gradient("l(0, 0, 1, 1)#ebebe5-#ebebe5-#ebebe5"),
    image = s.image("../images/adwokatura-polska.svg", 900, 10, 250, 250);
  text.attr({
    'font-size': 55,
    'font-family': 'Playfair Display SC',
    'fill': '#47494c'
  });
  text2.attr({
    'font-size': 55,
    'font-family': 'Playfair Display SC',
    'fill': '#47494c'
  });

  bg.attr({
    'fill': gradient,
    'height': 270
  });

});
