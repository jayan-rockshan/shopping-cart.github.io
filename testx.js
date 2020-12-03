 //search engine JavaScript code 
 function test() { 
            let input = document.getElementById('searchbar').value 
            input=input.toLowerCase(); 
            let x = document.getElementsByClassName('body1'); 
            
            for (i = 0; i < x.length; i++) {  
                if (!x[i].innerHTML.toLowerCase().includes(input)) { 
                    x[i].style.display= "none" ; 
                }

                else { 
                    x[i].style.display="body-item";                  
                } 
            } 
    } 
//slide image javascript code
var slideIndex = 0;
showSlides();
function showSlides() {
            var i;
            var slides = document.getElementsByClassName("mySlides");
            var dots = document.getElementsByClassName("dot");
                
            for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
                }

            slideIndex++;
                
                if (slideIndex > slides.length) {slideIndex = 1}    
                for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
            }

            slides[slideIndex-1].style.display = "block";  
            dots[slideIndex-1].className += " active";
            setTimeout(showSlides, 2000); 
            // Change image every 2 seconds
    }




    /*function note(){
        document.getElementById("jeison").innerHTML=style="";
    }*/
    function update(){
        if(style="display:block"){
            document.getElementById("jeison").style.display='none';
        }else{
            null;}
    }
    function update2(){
        if(style="display:block"){
            document.getElementById("jeison2").style.display='none';
        }else{
            null;}
    }
    function update3(){
        if(style="display:block"){
            document.getElementById("jeison3").style.display='none';
        }else{
            null;}
    }
    function update3(){
        if(style="display:block"){
            document.getElementById("jeison3").style.display='none';
        }else{
            null;}
    }
    function update4(){
        if(style="display:block"){
            document.getElementById("jeison4").style.display='none';
        }else{
            null;}
    }
    function update5(){
        if(style="display:block"){
            document.getElementById("jeison5").style.display='none';
        }else{
            null;}
    }
    function update6(){
        if(style="display:block"){
            document.getElementById("jeison6").style.display='none';
        }else{
            null;}
    }
    function update7(){
        if(style="display:block"){
            document.getElementById("jeison7").style.display='none';
        }else{
            null;}
    }
    function update8(){
        if(style="display:block"){
            document.getElementById("jeison8").style.display='none';
        }else{
            null;}
    }
    function update9(){
        if(style="display:block"){
            document.getElementById("jeison9").style.display='none';
        }else{
            null;}
    }
    function update10(){
        if(style="display:block"){
            document.getElementById("jeison10").style.display='none';
        }else{
            null;}
    }
    function update11(){
        if(style="display:block"){
            document.getElementById("jeison11").style.display='none';
        }else{
            null;}
    }
    function update12(){
        if(style="display:block"){
            document.getElementById("jeison12").style.display='none';
        }else{
            null;}
    }