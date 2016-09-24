 /**
 * Created by saroj on 8/22/16.
 */

"use strict";

 var prev = document.querySelector(".prev");
 var next = document.querySelector(".next");
 var featureImg = document.querySelector(".list-slides img");
 var imgArray = ['images/img1.jpg' , 'images/img2.jpg' , 'images/img3.jpg'];
 var i = 0;

    // setInterval(function () {
    //     featureImg.src = imgArray[i];
    //     i++;
    //     if (i==3)  i=0;
    // }1000);

 function newImage() {
     featureImg.setAttribute('src',imgArray[i]);
     i++;

     if (i>= imgArray.length) {
         i=0;
     }
 }

 function prevImg() {
     i--;

     if (i<0){
         i=imgArray.length-1;
     }
     featureImg.setAttribute('src',imgArray[i]);
 }

 prev.onclick = function () {
     prevImg();
 };

 next.onclick = function () {
     newImage();
 };