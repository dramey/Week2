// $(document).ready(function(){
$(function() {     

$("#para").click(function(ev) {
    //$("#para").fadeOut('slow', 'linear');//this will need to "look up" this---the next line will be quicker
    // $(this).fadeOut('slow', 'linear');
    //ev.target == this

    $(ev.target).fadeOut('slow', 'linear');
});

//h3 {Tet decoration underline}

//$("") -> 
$("h3")
.css("text-decoration", "underline")
.css("font-style", "italic")
.css("font-weight", "normal");

//$("ul li: first-child")
$("ul").find("li:first-child")
  .css("color", "red");

//Stop here
});
//Here be dragons