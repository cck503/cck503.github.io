$('.col-main-card').imagesLoaded()
    .progress(function(imgLoad, image) {
        var $item = $(image.img).parent();
        $item.removeClass('is-loading');
        if (!image.isLoaded) {
            $item.addClass('is-broken');
        }
    })

/*triggered after each item is loaded
function onProgress( imgLoad, image ) {
  // change class if the image is loaded or broken
  var $item = $( image.img ).parent();
  $item.removeClass('is-loading');
  if ( !image.isLoaded ) {
    $item.addClass('is-broken');
  }
}*/