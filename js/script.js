 /**
 * Created by saroj on 8/22/16.
 */

"use strict";

 var listSlides = document.querySelector(".list-slides");
 var li = listSlides.querySelectorAll("li");
 var lastChild = li[li.length-1];
 var firstChild = document.querySelectorAll(".list-slides > li")[0];


 setInterval(function(){
     firstChild.style.margin = "0px 0px 0px -300px";
     lastChild.style.margin = "0px";
 }, 3000);
