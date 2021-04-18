$(document).ready(function(){
    // jQuery
    $("a").on('click', function(event) {
        if (this.hash !=="") {
            event.preventDefault();

            var hash = this.hash;
        
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1200 , function(){
            
            window.location.hash = hash;
            });
        } 
    });
    // Bootstrap JS
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })

    $("#toggle,#toggle_2,#toggle_3,#toggle_4").dblclick(function() {
        $(this).toggle();
    });

});