var elem = document.querySelector("#elemContainer");
var displayy =document.querySelector("#display");
var page4display = document.querySelector("#page4right");



var h1 = document.querySelectorAll("#page4 h1")

var img1 = "https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRlY2h8ZW58MHx8MHx8fDA%3D"
var img2= "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRlY2h8ZW58MHx8MHx8fDA%3D"
var img3 ="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"



h1.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        var id =e.getAttribute("id");
        document.getElementById(id).style.borderLeftColor="orangered"
        document.getElementById(id).style.color="#efeae3"
        
        
        if(id=="h1"){
            page4display.style.backgroundImage=`url(${img1})`;
            document.getElementById("page4para").innerHTML="Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings."
            console.log(id);
        }
        if(id=="h2"){
            page4display.style.backgroundImage=`url(${img2})`;
            document.getElementById("page4para").innerHTML="Once we have a design, our production team takes the lead in bringing it to life. We manage all stages of the project, from build specifications and technical drawings to site surveys, vendor management, and 2D & 3D production. We have an extensive network of partners to meet each unique design and project need."
            console.log(id);
        }
        if(id=="h3"){
            document.getElementById("page4para").innerHTML="We’re with you every step of the way, from the project initiation to launch day. Our production and design teams are onsite to direct and guide the process down to the last point of completion, ensuring success across the built space and experience."
            page4display.style.backgroundImage=`url(${img3})`;
            console.log(id);
            
        }
    })
})


h1.forEach(function(e){
    e.addEventListener("mouseleave",function(){
        var id =e.getAttribute("id");
        document.getElementById(id).style.color="gray"
        
        document.getElementById(id).style.borderLeftColor="gray"
    })
})
h1.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        var id =e.getAttribute("id");
        // id.style.borderLeftColor = "orange"
        
        
    })
})


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
        // console.log(img)
    })
})































const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


