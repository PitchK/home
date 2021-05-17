

var close = document.getElementById('X');
close.addEventListener("click", removeHeader);

var deleted = document.getElementById('header');
var newTitle = document.getElementById('title');

/*function dropHeader(){
    deleted.style.transform = "translate(0px, 0%)";
    deleted.style.transition = "1.5s";
    newTitle.style.transform = "translate(0px, 0%)";
    newTitle.style.transition = "1.5s";
}

function removeHeader(){

    deleted.style.transform = "translate(0px, -120%)";
    deleted.style.transition = "1s";
    /*newTitle.style.transform = "translate(0px, -120%)";
    newTitle.style.transition = "1s";
}*/

/*function updateScroll(){
    var scr = this.scrollY
    console.log(scr);
    newTitle.innerHTML = scr;
    if(scr > 8.666){
        document.getElementById("header").style.top = scr;
    }
}*/



/*window.addEventListener("scroll", updateScroll);*/

/*setTimeout(dropHeader, 3000);