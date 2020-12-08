const menuIcon = document.querySelector(".burger");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("change");
 

});


// 
  // var sliderTrigger = document.getElementsByClassName("slider-trigger")[0];
  // var slider = document.getElementsByClassName('slider-parent')[0];
  // sliderTrigger.addEventListener("click", function (el) {
  //     if (slider.classList.contains("active")) { slider.classList.remove("active"); }
  //     else {
  //       slider.classList.add("active");
  //     }
  //   });

function openNav(){
  document.getElementById("sidenav").style.width="250px";
 
}
function closeNav(){
   document.getElementById("sidenav").style.width="0px";
}