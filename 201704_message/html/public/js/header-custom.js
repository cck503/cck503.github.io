    //
    $('#user-Affix').affix({
        offset: {
            top: 136,
            bottom: function() {
                return (this.bottom = $('.footer').outerHeight(true))
            }
        }
    })
    
    //forum
    $('#nav-Affix').affix({
        offset: {
            top: 136,
            bottom: function() {
                return (this.bottom = $('.footer').outerHeight(true))
            }
        }
    })

    //search
    $('#search-nav-Affix').affix({
        offset: {
            top: 210,
            bottom: function() {
                return (this.bottom = $('.footer').outerHeight(true))
            }
        }
    })

    //info
    $('#info-nav-Affix').affix({
        offset: {
            top: 240,
            bottom: function() {
                return (this.bottom = $('.footer').outerHeight(true))
            }
        }
    })
    //message
    $('#message-nav-Affix').affix({
        offset: {
            top: 210,
            bottom: function() {
                return (this.bottom = $('.footer').outerHeight(true))
            }
        }
    })