//variable declaration
var button = document.getElementById('x');
var temp = document.getElementById('popup');
var open = false;


//general webpage setup
var listOfCitations = ['Author: Micaiah Cape', 'Title: Substance use in adolescents', 'Webpage link: https://pitchk.github.io/homepage', 'Date updated: May 21, 2021'];
var x = new Date();
var add = 'Date accessed: ' + (x.getMonth()+1) + "/" + x.getDate() + "/" + x.getFullYear();
listOfCitations.push(add);

for(var i = 0; i<listOfCitations.length; i++){
    var newCitation = document.createElement('p');
    newCitation.className = 'indivCitation';
    newCitation.innerHTML = listOfCitations[i];
    document.getElementById('citeInfo').appendChild(newCitation);
}

var listOfFirstDrugs = [{Drug: 'Alcohol', Stat: 80, color: 'cornflowerblue'}, {Drug: 'Cannabis', Stat: 65, color: 'lightgreen'}, {Drug: 'Methamphetamine', Stat: 34, color: 'orange'}, {Drug: 'Vapes', Stat: 11, color: 'lightblue'}];

function drawFirstGraph(){
    for(var i = 0; i<listOfFirstDrugs.length; i++){
        var newCont = document.createElement('div');
        newCont.className = 'container';
  
        document.getElementById('graph1').appendChild(newCont);
    }

    for(var i = 0; i<listOfFirstDrugs.length; i++){
        var drugName = document.createElement('div');
        drugName.className = 'graphText';
        drugName.innerHTML = listOfFirstDrugs[i].Drug;
        document.getElementsByClassName('container')[i].appendChild(drugName);
    }

    for(var i = 0; i<listOfFirstDrugs.length; i++){
        var bar = document.createElement('div');
        bar.className = 'graphBars';
        document.getElementsByClassName('container')[i].appendChild(bar);
    }

    for(var i = 0; i<listOfFirstDrugs.length; i++){
        var drugStat = document.getElementsByClassName('graphBars')[i];
        drugStat.style.width = ((listOfFirstDrugs[i].Stat/100) * 72.5) + '%';
        drugStat.style.backgroundColor = listOfFirstDrugs[i].color;

    }
}

//methods
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
        open = true;
    }
}
function remove(){
    temp.style.position = 'absolute';
    temp.style.top = '-100%';
    temp.style.transition = '1s';
    document.getElementById('main').style.filter = 'blur(0px)';
    document.getElementById('main').style.userSelect = 'text';
    open = false;
}



function detectScroll(){
    showPopUp();
    window.addEventListener('scroll', showPopUp);
}

function showCitations(){
    if(open === false){
        document.getElementById('citeInfo').style.display = 'block';
    }
}

//Event listeners
/*window.addEventListener('scroll', updateScrollBar);*/
drawFirstGraph();
button.addEventListener('click', remove);
document.getElementById('close').addEventListener('click', remove);
document.getElementById('cite').addEventListener('click', showCitations);
setTimeout(detectScroll, 3500);


