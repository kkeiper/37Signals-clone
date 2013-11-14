$(document).ready(function(){
    $('gradient-box basecamp').mouseenter(function(){
        $('default').fadeTo('slow', 0.0);
        $('basecamp').fadeTo('slow', 1.0);
    })
        
    $('gradient-box basecamp').mouseleave(function(){
        $('default').fadeTo('slow', 1.0);
        $('basecamp').fadeTo('slow', 0.0);
    })
});










