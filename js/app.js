var head = document.getElementById('header');
var newTitle = document.getElementById('title');
var button = document.getElementById('x');
var temp = document.getElementById('popup');

/*function dropHeader(){
    head.style.position = 'absolute';
    head.style.display = 'block';
    head.style.display = 'flex';
    head.style.width = '100%';
    head.style.top = '-2%';
    head.style.transition = '1s';
}

function removeHeader(){
    head.style.position = 'absolute';
    head.style.top = '-100%';
    head.style.transition = '0.5s';
}*/

/*function updateScrollBar(){
    if (head.style.top !== '-100%'){
        var test = 0;
        var scr = this.scrollY
        console.log(scr);
        header.style.top = (scr-10) + "px";
        header.style.transition = '0s';
    }
}*/

function showPopUp(){
    var scrollPos = window.pageYOffset;
    if(temp.style.top != '-100%'){
        temp.style.display = 'block';
        document.getElementById('main').style.filter = 'blur(5px)';
        document.getElementById('main').style.userSelect = 'none';
        /*document.body.style.margin = '0';
        document.body.style.height = '100%';
        document.body.style.overflow = 'hidden';*/

        temp.style.top = ((screen.height/2) + scrollPos - (screen.height/10)) + "px";
        temp.style.display = 'sticky';
    }
}
function remove(){
    temp.style.position = 'absolute';
    temp.style.top = '-100%';
    temp.style.transition = '1s';
    document.getElementById('main').style.filter = 'blur(0px)';
    document.getElementById('main').style.userSelect = 'text';
}

function detectScroll(){
    showPopUp();
    window.addEventListener('scroll', showPopUp);


}
/*window.addEventListener('scroll', updateScrollBar);*/
button.addEventListener('click', remove);
document.getElementById('close').addEventListener('click', remove);
setTimeout(detectScroll, 3500);

