if($(window).width() < 767)
{
    $('.alt-version').addClass('alt-headup');
} else {
    $('.alt-version').removeClass('alt-headup');
    // JavaScript here
    // 當視窗寬度不小於767px時執行
}


//    
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('.navbar-fixed-top').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('.alt-headup .navbar-fixed-top').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('.alt-headup .navbar-fixed-top').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}

$(document)
    .one('focus.autoExpand', 'textarea.autoExpand', function() {
        var savedValue = this.value;
        this.value = '';
        this.baseScrollHeight = this.scrollHeight;
        this.value = savedValue;
    })
    .on('input.autoExpand', 'textarea.autoExpand', function() {
        var minRows = this.getAttribute('data-min-rows') | 0,
            rows;
        this.rows = minRows;
        rows = Math.ceil((this.scrollHeight - this.baseScrollHeight) / 17);
        this.rows = minRows + rows;
    });



$(document).ready(function(){
    $('.dropdown a').click(function(){
        $('body').toggleClass('modal-open');
    });
    /**/
    $('.dropdown-menu').click(function(){
        $('body').removeClass('modal-open');
    });
});




$(document).ready(function(){
    $('#nav-expander').click(function(){
        $(this).toggleClass('tcon-transform');
    });
    $('#nav-close').click(function(){
        $('.tcon').removeClass('tcon-transform');
    });
});


$(document).ready(function(){                                               

       //Navigation Menu Slider
        $('#nav-expander').on('click',function(e){
            e.preventDefault();
            $('body').toggleClass('nav-expanded');
            
        });
        $('#nav-close').on('click',function(e){
            e.preventDefault();
            $('body').removeClass('nav-expanded');
        });

       

      });