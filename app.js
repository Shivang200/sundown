var elem = document.querySelector("#elemContainer");
var displayy =document.querySelector("#display");

elem.addEventListener("mouseenter",function(){
    displayy.style.display="block";
    
})
elem.addEventListener("mouseleave",function(){
    displayy.style.display="none";
    
})
var elems = document.querySelectorAll(".elem");
elems.forEach(function(e){
    e.addEventListener("mouseenter",function(){

        var img =e.getAttribute("data-id"); // here data id consist of img src
        displayy.style.backgroundImage= `url(${img})`;
        console.log(img)
    })
})

























const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


