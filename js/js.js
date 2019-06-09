/*global $, window, setInterval, clearInterval, document*/  

$(function() {
        $('.chart').easyPieChart({
            //your options goes here
        });
    });





var text = "hello....i am huda hussein tawfik front-end developer",
    
    i = 0;

window.onload = function () {
    
    "use strict";
    
    var typeWriter = setInterval(function () {
        
        document.getElementById("type-writer").textContent += text[i];
        
        i = i + 1;
        
        if (i > text.length - 1) {
            
            clearInterval(typeWriter);
        }
        
    }, 200);
};


 //add active class to links
    
    $('.header .nav-bar .rieght ul li a').click(function () {
        
        $(this).addClass("active").parent().siblings().find("a").removeClass("active");
    });


//add active class to links
  
  $(window).scroll(function(){
      
         $('.block').each(function(){
             
    if ($(window).scrollTop()>$(this).offset().top -20){
        
     var blockid=$(this).attr('id');
        
        $('.header .nav-bar .rieght ul li a').removeClass("active");
        
        $(".header .nav-bar .rieght ul li a[data-scroll='" +blockid+ "']").addClass('active');
        
            }
        });
 });








