/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/*let mainNav=document.getElementById("js-menu");
let navBarToggle=document.getElementById("js-navbar-toggle");
navBarToggle.addEventListener("click",function(){
    mainNav.classList.toggle("active");
});

$(function(){
    $(".nav-toggle").on("click",
    function(){
        if
        ($(".nav-links").hasClass("active")){
            $(".nav-links").removeClass("active");
            $(this).find("a").html( <i class="fa fa-plus-circle"></i>);}
            else{
              $(".nav-links").addClass("active"); 
              $(this).find("a").html( <i class="fa fa-plus-circle"></i>);
            }
        });
        
    });*/
//function to toggle the bar
/*function geeksforgeeks(){
    var x=document.getElementById("js-menu");
    if(x.style.display==="block"){
        x.style.display="none";
    }else{
        x.style.display="block";
    }
}
//function to toggle minus
function myFunction(x){
    x.classList.toggle("fa-minus-circle");
}*/
// When the user scrolls the page, execute myFunction
/*window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
/*function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
*/
 function myFunction() {
  var x = document.getElementById("js-menu");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}