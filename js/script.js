$(document).ready(function(){
    $(".hamburger").click(function(){
        $(this).toggleClass("bi-x");
        $(".list").toggleClass("active");
    });
});
window.addEventListener("scroll",function(){
    var parallax =document.querySelector(".parallax");
    let scrollPosition=window.pageYOffset;
    console.log(window)
    parallax.style.backgroundPositionY=scrollPosition*0.5 +'px'

})