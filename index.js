// $(function() {
//     // ...
//     var seconds_to_next_image = 1;
//     next_slider_image();

//     function next_slider_image() {
//         // code to go to next slider image
//         slider_1 = $(".container_icecream");
//         slider_2 = $(".container_icecream2");
//         slider_3 = $(".container_icecream3");
//         setTimeout(next_slider_image, seconds_to_next_image * 1000);
//     }
//     // ...
// });

$(function() {
    var seconds_to_next_button = 1;
    next_button();
    next_button2();
    next_button3();

    function next_button() {
        var button_index = $(".container__icecream");
        
        button_index.toggleClass("active");
        setTimeout( next_button,  4000 );
    }
    function next_button2() {
        var button_index2 = $(".container__icecream2");
        
        button_index2.toggleClass("active");
        setTimeout(next_button2, 7000 );
    }

    function next_button3() {
        var button_index3 = $(".container__icecream3");
        
        button_index3.toggleClass("active");
        setTimeout(next_button3,  4000 );
    } 
    
});


