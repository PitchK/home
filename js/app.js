var head = document.getElementById('header');
var newTitle = document.getElementById('title');
var button = document.getElementById('x');

function dropHeader(){

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
}





function updateScrollBar(){
    ;
    if (head.style.top !== '-100%'){
        var test = 0;
        var scr = this.scrollY
        console.log(scr);
        header.style.top = (scr-10) + "px";
        header.style.transition = '0s';
    }

}


window.addEventListener('scroll', updateScrollBar);
button.addEventListener('click', removeHeader);
setTimeout(dropHeader, 2000);

