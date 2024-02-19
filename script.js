function loadingAnimation(){
    var tl = gsap.timeline();

    var one = document.querySelectorAll(".one");
    one.forEach(function(val){
        var oneText = val.textContent;
        var oneSplitted = oneText.split("");
        var clutter = "";
        oneSplitted.forEach(function(val1){
            clutter += `<span>${val1}</span>`
        })
        val.innerHTML = clutter;
    })
    
    tl.from(".loader-text h1 span",{
        y:250,
        stagger:.1
    },"a")
    tl.from(".loader-text h2 span",{
        y:250,
        stagger:-.1
    },"a")
    tl.to(".line",{
        width:"100%",
        duration:3,
        delay:.5
    },"a")
    
    tl.from(".image-container", { 
        scale: 0,    
        delay: .5
    },"a")
    tl.to("#first",{
        opacity:1,
        delay:.6
    },"a")
    
    tl.to(".image-container",{
        width:"40%",  
        height:"47%",  
        delay:1.2
    },"a")
    tl.to("#second",{
        opacity:1,
        delay:1.3
    },"a")
    tl.to(".image-container",{
        width:"22%",    
        height:"47%",
        delay:1.9
    },"a")
    tl.to("#third",{
        opacity:1,
        delay:2
    },"a")
    tl.to(".loader-text h1 span",{
        y:-250,
        stagger:{
            amount:.1
        },
        delay:2.3
    },"a")
    tl.to(".loader-text h2 span",{
        y:-250,
        stagger:{
            amount:.1
        },
        delay:2.3
    },"a")
    tl.to(".image-container",{
        width:"100%",    
        height:"100%",
        delay:2.8
    },"a")
    tl.to("#four",{
        opacity:1,
        delay:2.7
    },"a")
    tl.to("#center",{
        display:"block"
    })
    
    var two = document.querySelectorAll(".two");
    two.forEach(function(elem){
        var twoText = elem.textContent;
        var splittedTwo = twoText.split("");
        var clutter2 = "";
        splittedTwo.forEach(function(elem1){
            clutter2 += `<span>${elem1}</span>`
        })
        elem.innerHTML = clutter2;
    })
    tl.from(".center-text h1 span",{
        y:150,
        stagger:.15,   
    },"A")
    tl.from(".center-text h2 span",{
        y:150,
        stagger:-.15,    
    },"A")
    tl.to(".center-line",{
        display:"block"
    },"A")
    
    tl.to(".line .inner-line",{
        width:"33.35%",
        duration:2
    },"A")
    tl.to("#nav h5",{
        opacity:1
    },"A")
    
    
    var centerCenter = document.querySelector(".center-center");
    var centerLine = document.querySelectorAll(".center-line");
    
    var flag = 0;
    
    centerCenter.addEventListener("mouseenter", function(){
        if (flag === 0) {
            centerLine.forEach(function(line) {
                line.style.width = "100%";                                 
            });
            flag = 1;
        }else{
            centerCenter.addEventListener("mouseleave", function(){
                centerLine.forEach(function(line) {
                    line.style.width = "0%";                              
                });
                flag = 0;
            });
        }
    }); 
    
    
    
}
loadingAnimation();


