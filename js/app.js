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

var listOfFirstDrugs = [{Drug: 'Alcohol', Stat: 55.3, color: '#715bd4'}, {Drug: 'Marijuana', Stat: 35.2, color: 'green'}, {Drug: 'Vaping (nicotine)*', Stat: 34.5, color: 'orange'}];

function drawFirstGraph(maxStat, increment){
    for(var i = 0; i<listOfFirstDrugs.length; i++){
        var newCont = document.createElement('div');
        newCont.className = 'container';
        document.getElementById('graph1').appendChild(newCont);
    }

    for(var i = 0; i<listOfFirstDrugs.length; i++){
        var drugName = document.createElement('section');
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
        drugStat.innerHTML = listOfFirstDrugs[i].Stat + '%';
        drugStat.style.width = (((listOfFirstDrugs[i].Stat/maxStat) * 77.5) - 1.5) + '%';
        drugStat.style.backgroundColor = listOfFirstDrugs[i].color;
    }
    
    var line = document.createElement('div');
    line.id = 'graphScale';
    document.getElementById('graph1').appendChild(line);
    
    for(var i = 0; i< (maxStat/increment); i++){
        var percentages = document.createElement('div');
        percentages.className = 'percentDiv';
        if(i === (maxStat/increment)-1){
            percentages.innerHTML = (i*increment) + " (%)";
        }else{
            percentages.innerHTML = (i*increment);
        }
        document.getElementById('graphScale').appendChild(percentages);
    }

    for(var i = 0; i< (maxStat/increment); i++){
        document.getElementsByClassName('percentDiv')[i].style.width = (100 / (maxStat/increment)) + '%';
        document.getElementsByClassName('percentDiv')[i].style.maxWidth = (100 / (maxStat/increment)) + '%';
    }

    var disclaimer = document.createElement('div');
    disclaimer.id = 'disclaimer';
    disclaimer.innerHTML = '*Does not include marijuana vaping and vaping for just flavoring. The prevalence of use of these substances among high school seniors in the past year is 22.1%, and 16.6%, respectively. The prevalence of use of all vapes is 39.0%, which suggests some overlap.';
    document.getElementById('graph1').appendChild(disclaimer);
}

//2D array needed for createHover method
var pastDrugUseStats = [['Alcohol', 52.1, 53.3, 55.7, 'Has remained relatively stable'], ['Marijuana', 35.7, 35.9, 37.1, 'Has remained relatively stable'], ['Vaping (Nicotine)', 35.3, 29.7, 18.8, 'Has sharply increased, but leveled off']];

function createHover(num){
    for (i = 0; i<listOfFirstDrugs.length; i++){
        var otherInfo = document.createElement('div');
        otherInfo.className = 'hoverContainer';
        document.getElementById('graph1').appendChild(otherInfo);
    }

    for (i = 0; i<listOfFirstDrugs.length; i++){

        var triangle = document.createElement('div');
        triangle.className = 'triangle';
        triangle.innerHTML = '';
        document.getElementsByClassName('hoverContainer')[i].appendChild(triangle);

        document.getElementsByClassName('triangle')[i].style.borderBottom = '30px solid ' + listOfFirstDrugs[i].color;

        var x = document.createElement('p');//x button
        x.className = 'hoverX';
        x.innerHTML = '✖';
        document.getElementsByClassName('hoverContainer')[i].appendChild(x);

        var otherInfoText = document.createElement('div');//title of drug
        otherInfoText.className = 'hoverContainerTitleText';
        otherInfoText.innerHTML = pastDrugUseStats[i][0];
        document.getElementsByClassName('hoverContainer')[i].appendChild(otherInfoText);

        var otherInfoText1 = document.createElement('p');//title of 'prevalence of use'
        otherInfoText1.className = 'hoverContainerPrevalence';
        otherInfoText1.innerHTML = '2020 prevalence of use among 12th graders: ';
        document.getElementsByClassName('hoverContainer')[i].appendChild(otherInfoText1);

        var otherInfoText2 = document.createElement('p');//prevalence of use; in percentages
        otherInfoText2.className = 'hoverContainerPercentage';
        otherInfoText2.innerHTML = listOfFirstDrugs[i].Stat + "%";
        document.getElementsByClassName('hoverContainer')[i].appendChild(otherInfoText2);

        document.getElementsByClassName('hoverContainer')[i].appendChild(document.createElement('hr'));//line
        
        var otherInfoHeader = document.createElement('div');//title of 'past prevalence of use'
        otherInfoHeader.className = 'hoverContainerPast';
        otherInfoHeader.innerHTML = 'Past prevalence of use';
        document.getElementsByClassName('hoverContainer')[i].appendChild(otherInfoHeader);

        for(var year = 2019; year > 2016; year--){
            var otherInfoYears = document.createElement('p');//title of year
            otherInfoYears.className = 'hoverContainerYear';
            otherInfoYears.innerHTML = year + ": "
            document.getElementsByClassName('hoverContainer')[i].appendChild(otherInfoYears);
        }

        for(var j = 0; j < 3; j++){
            var otherInfoPercentages = document.createElement('span');//percentages in past years
            otherInfoPercentages.className = 'hoverContainerPastPercentage';
            otherInfoPercentages.innerHTML = pastDrugUseStats[i][j+1] + '%';
            document.getElementsByClassName('hoverContainer')[i].getElementsByClassName('hoverContainerYear')[j].appendChild(otherInfoPercentages);
        }

        var otherInfoTrend = document.createElement('div');
        otherInfoTrend.innerHTML = 'Trend: ' + pastDrugUseStats[i][4];
        otherInfoTrend.className = 'hoverContainerTrend';
        document.getElementsByClassName('hoverContainer')[i].appendChild(otherInfoTrend);

        var otherInfoBotCaption = document.createElement('p');//source
        otherInfoBotCaption.className = 'hoverContainerBotCaption';
        otherInfoBotCaption.innerHTML = 'Source: ';
        document.getElementsByClassName('hoverContainer')[i].appendChild(otherInfoBotCaption);

        var otherInfoBotLink = document.createElement('A');
        otherInfoBotLink.className = 'hoverContainerBotLink';
        var innerLink = document.createTextNode('National Institute on Drug Abuse');
        otherInfoBotLink.setAttribute('href', 'https://www.drugabuse.gov/drug-topics/related-topics/trends-statistics/infographics/monitoring-future-2020-survey-results');
        otherInfoBotLink.setAttribute('target', '_blank');
        otherInfoBotLink.appendChild(innerLink);
        document.getElementsByClassName('hoverContainerBotCaption')[i].appendChild(otherInfoBotLink);

        //attributes of the container
        document.getElementsByClassName('hoverContainerBotLink')[i].style.color = listOfFirstDrugs[i].color;
        document.getElementsByClassName('hoverContainer')[i].style.position = 'absolute';
        document.getElementsByClassName('hoverContainer')[i].style.height = 0;
        document.getElementsByClassName('hoverContainer')[i].style.backgroundColor = 'whitesmoke';
        document.getElementsByClassName('hoverContainer')[i].style.border = '6px solid ' + listOfFirstDrugs[i].color;
        console.log(document.getElementsByClassName('hoverContainer')[i].style.border);

    }
}


var isHoverOpen = false;
function showHover(event){
    console.log(isHoverOpen);
    for (var i = 0; i<3; i++){
        document.getElementsByClassName('hoverContainer')[i].style.display = 'none';
    }
    if(this.innerHTML === '55.3%'){//yay, the 'this' keyword! *AP Computer Science flashbacks intensify*
        isHoverOpen = true;
        var hoverContainer0 = document.getElementsByClassName('hoverContainer')[0];
        hoverContainer0.style.display = 'block';
        hoverContainer0.style.top = this.offsetTop + 75 + 'px';
        hoverContainer0.style.left = ((event.clientX / screen.width)*100) - 11.25 + '%';
        hoverContainer0.style.height = 'auto';
        document.getElementsByClassName('graphBars')[0].scrollIntoView();
        
    }else if (this.innerHTML === '35.2%'){
        isHoverOpen = true;
        var hoverContainer1 = document.getElementsByClassName('hoverContainer')[1];
        hoverContainer1.style.display = 'block';
        hoverContainer1.style.top = this.offsetTop + 75 + 'px';
        hoverContainer1.style.left = ((event.clientX / screen.width)*100) - 11.25 + '%';
        hoverContainer1.style.height = 'auto';
        document.getElementsByClassName('graphBars')[1].scrollIntoView();
    }else{
        isHoverOpen = true;
        var hoverContainer2 = document.getElementsByClassName('hoverContainer')[2];
        hoverContainer2.style.display = 'block';
        hoverContainer2.style.top = this.offsetTop + 75 + 'px';
        hoverContainer2.style.left = ((event.clientX / screen.width)*100) - 11.25 + '%';
        hoverContainer2.style.height = 'auto';
        document.getElementsByClassName('graphBars')[2].scrollIntoView();
    }
}

function removeHover1(){
    document.getElementsByClassName('hoverContainer')[0].style.display = 'none';
    isHoverOpen = false;
    for (var i = 0; i < 3; i++){
        document.getElementsByClassName('graphBars')[i].removeEventListener('mouseover', showHover);
    }
    setTimeout(createEventListeners, 100);
}

function removeHover2(){
    document.getElementsByClassName('hoverContainer')[1].style.display = 'none';
    isHoverOpen = false;
    for (var i = 0; i < 3; i++){
        document.getElementsByClassName('graphBars')[i].removeEventListener('mouseover', showHover);
    }
    setTimeout(createEventListeners, 100);
}

function removeHover3(){
    document.getElementsByClassName('hoverContainer')[2].style.display = 'none';
    isHoverOpen = false;
    for (var i = 0; i < 3; i++){
        document.getElementsByClassName('graphBars')[i].removeEventListener('mouseover', showHover);
    }
    setTimeout(createEventListeners, 100);
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

document.getElementsByClassName('content')[0].style.marginTop = '0';

//Event listeners
/*window.addEventListener('scroll', updateScrollBar);*/


drawFirstGraph(60, 10);
createHover(1);
button.addEventListener('click', remove);
document.getElementById('close').addEventListener('click', remove);
document.getElementById('cite').addEventListener('click', showCitations);
/*document.getElementById('title').addEventListener('click', showHover);*///just for testing

function createEventListeners(){
    for (var i = 0; i < 3; i++){
        document.getElementsByClassName('graphBars')[i].addEventListener('click', showHover);
    }
}

createEventListeners();
document.getElementsByClassName('hoverX')[0].addEventListener('click', removeHover1);
document.getElementsByClassName('hoverX')[1].addEventListener('click', removeHover2);
document.getElementsByClassName('hoverX')[2].addEventListener('click', removeHover3);


setTimeout(detectScroll, 2500);