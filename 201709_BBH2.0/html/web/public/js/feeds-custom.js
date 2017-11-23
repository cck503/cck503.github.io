$('.hover-drop.dropdown').hover(function() {
    $(this).find('.pre-act').addClass("active");
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(100);
}, function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(100);
    $(this).find('.pre-act').removeClass("active");
});


// Instantiate the Bootstrap carousel
$('.multi-item-carousel').carousel({
  interval: 6000
});

// for every slide in carousel, copy the next slide's item in the slide.
// Do the same for the next, next item.
$('.multi-item-carousel .item').each(function(){
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));
  
  if (next.next().length>0) {
    next.next().children(':first-child').clone().appendTo($(this));
  } else {
  	$(this).siblings(':first').children(':first-child').clone().appendTo($(this));
  }
});

