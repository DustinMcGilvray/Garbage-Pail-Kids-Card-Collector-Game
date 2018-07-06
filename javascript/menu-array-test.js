//Slide In and Out Menu
$(document).ready(function(){
    $(".fa-times").click(function(){
        $(".sidebar_menu").addClass("hide_menu");
        $(".toggle_menu").addClass("opacity_one");
    });

    $(".toggle_menu").click(function(){
        $(".sidebar_menu").removeClass("hide_menu");
        $(".toggle_menu").removeClass("opacity_one");
    });
});

//Image Array
var cardImages = [
    { name: "", image: ""}, { name: "", image: ""}, { name: "", image: ""}, 
    { name: "", image: ""}, { name: "", image: ""}, { name: "", image: ""},
    { name: "", image: ""}, { name: "", image: ""}, { name: "", image: ""},
    { name: "", image: ""}, { name: "", image: ""}, { name: "", image: ""},
    { name: "", image: ""}, { name: "", image: ""}, { name: "", image: ""},

]