//variable declaration
var button = document.getElementById('x');
var temp = document.getElementById('popup');
var open = false;
var navOpen = true;



//general webpage setup
var listOfCitations = ['Author: Micaiah Cape', 'Title: Substance use in adolescents', 'Webpage link: https://pitchk.github.io/homepage', 'Date updated: May 24, 2021'];
var x = new Date();
var add = 'Date accessed: ' + (x.getMonth()+1) + "/" + x.getDate() + "/" + x.getFullYear();
listOfCitations.push(add);

for(var i = 0; i<listOfCitations.length; i++){
    var newCitation = document.createElement('p');
    newCitation.className = 'indivCitation';
    newCitation.innerHTML = listOfCitations[i];
    document.getElementById('citeInfo').appendChild(newCitation);
}

var fontSizes = [0.6, 0.8, 1, 1.2, 1.4] //135% is default

for (var i = 0; i<5; i++){
    var newText = document.createElement('p');
    newText.className = 'textSizeOptions'
    newText.innerHTML = 'A';
    newText.style.fontSize = (135 * fontSizes[i]) + '%';
    document.getElementById('textStuff').appendChild(newText);
}
 var devOrientation = '';
//decide whether navigation bar will show right or left arrow; make mobile compatible
function decideLorR(x){
    if(x.matches){
        document.getElementById('closemenu').innerHTML = 'Menu »'
        devOrientation = 'portrait';
    }else{
        document.getElementById('closemenu').innerHTML = '«'
        devOrientation = 'landscape';
    }
}

var x = window.matchMedia("(orientation: portrait)");
decideLorR(x);
x.addListener(decideLorR);

//change font size
function changeFontSize(){
    //number of 'content' is 10. CHANGE THIS AS HTML UPDATES!!
    //console.log(document.getElementById('closemenu').style.width);
    for (var i = 0; i<5; i++){
        document.getElementsByClassName('textSizeOptions')[i].color = 'black';
        document.getElementsByClassName('textSizeOptions')[i].backgroundColor = 'white';
    }

    var fontSize = this.style.fontSize;
    for(var i = 0; i<document.getElementsByClassName('content').length; i++){
        var fontSize = this.style.fontSize;
        document.getElementsByClassName('content')[i].style.fontSize = fontSize;
       
    }

    for (var i = 0; i<document.getElementsByClassName('section').length; i++){
        var fontSize = this.style.fontSize;
        document.getElementsByClassName('section')[i].style.fontSize = (190 * (fontSize.substring(0, fontSize.length-1) / 135)) + '%'; //substring is to get rid of the '%' at the end of the fontSize variable
    }

    document.getElementById('story').style.fontSize = fontSize;

    /*for(var i = 0; i<8; i++){
        document.getElementsByClassName('navLink')[i].style.fontSize = (120 * (fontSize.substring(0, fontSize.length-1) / 135)) + '%';
        document.getElementById('navigation').style.fontSize = (190 * (fontSize.substring(0, fontSize.length-1) / 135)) + '%';
    }*/

    for(var i = 0; i<document.getElementsByClassName('list').length; i++){//CHANGE THIS AS HTML UPDATES!!
        document.getElementsByClassName('list')[i].style.fontSize = fontSize;
    }
    document.getElementsByClassName('section')[0].scrollIntoView();
    
}

//create side navigation bar
var navBarNames = ['A brief introduction', 'What is substance use?', 'How does one fall into substance use?', 'Why is substance use harmful?', 'Statistics among adolescents', 'COVID-19 and substance use', 'Gaming and internet addiction - a special type of substance use?', 'Help is available!']//CHANGE THIS AS HTML UPDATES!
function createNavigationBar(){
    decideLorR(x);
    console.log(devOrientation);
    for (var i = 0; i<navBarNames.length; i++){
        var newNavLink = document.createElement('p');
        newNavLink.className = 'navLink';
        document.getElementById('innerNav').appendChild(newNavLink);
    }

    for (var i = 0; i<navBarNames.length; i++){
        var newLinkName = document.createElement('p');
        newLinkName.className = 'newNavLink';
        newLinkName.innerHTML = navBarNames[i];
        document.getElementsByClassName('navLink')[i].appendChild(newLinkName);
        
        if(devOrientation === 'landscape'){
            var arrow = document.createElement('p');
            arrow.className = 'arrow';
            arrow.innerHTML = '▶';
            document.getElementsByClassName('navLink')[i].appendChild(arrow);
        }else{
            document.getElementsByClassName('newNavLink')[i].style.textAlign = 'left';
            document.getElementsByClassName('navLink')[i].style.textAlign = 'left';
            document.getElementsByClassName('newNavLink')[i].style.width = '90%';
        }
    }

    if(devOrientation === 'portrait'){
        document.getElementById('navigation').style.margin = '0';
        document.getElementById('navigation').style.padding = '0';
        document.getElementById('navigation').style.textAlign = 'center';
        
    }
}

function scrollToSection(){
    console.log('kay')
    if(devOrientation === 'portrait'){
        removeNav();
    }
    for (var i = 0; i < navBarNames.length; i++){
        if(this.getElementsByClassName('newNavLink')[0].innerHTML === navBarNames[i]){
            document.getElementsByClassName('section')[i].scrollIntoView();
            break;
        }else{
            continue;
        }
    }
}

function removeNav(){
    if (open === false){
        if(navOpen === true){
            if(devOrientation === 'landscape'){
                navOpen = false;
                document.getElementById('innerNav').style.display = 'none';
                document.getElementById('navigation').style.display = 'none';
                document.getElementById('sideCaption').style.display = 'none';
                document.getElementById('closemenu').innerHTML = '»';
                document.getElementById('closemenu').style.marginLeft = '35%';
                document.getElementById('navMenu').style.width = '4%';
                document.getElementById('entirePage').style.flexDirection = 'column';
                document.getElementById('main').style.width = '100%';
                document.getElementById('navMenu').style.borderTopRightRadius = '15px';
                document.getElementById('navMenu').style.borderBottomRightRadius = '15px';
                for (var i = 0; i < document.getElementsByClassName('section').length; i++){//CHANGE THIS FOR LOOP AS HTML UPDATES!
                    document.getElementsByClassName('section')[i].style.marginLeft = '12.5%';
                }
                for (var i = 0; i < document.getElementsByClassName('content').length; i++){
                    document.getElementsByClassName('content')[i].style.marginLeft = '12.5%';
                    document.getElementsByClassName('content')[i].style.marginRight = '12.5%';
                    document.getElementsByClassName('content')[i].style.width = '75%';
                }
                for (var i = 0; i < document.getElementsByClassName('list').length; i++){
                    document.getElementsByClassName('list')[i].style.marginLeft = '15%';
                    document.getElementsByClassName('list')[i].style.marginRight = '12.5%';
                }
                document.getElementById('story').style.marginRight = '12.5%';
                document.getElementById('story').style.marginLeft = '12.5%';
                document.getElementById('graph1').style.marginRight = '12.5%';
                document.getElementById('graph1').style.marginLeft = '12.5%';
                document.getElementById('citesources').style.marginRight = '12.5%';
                document.getElementById('citesources').style.marginLeft = '12.5%';
                document.getElementById('source').style.marginLeft = '12.5%';

            }else{
                navOpen = false;
                document.getElementById('main').style.display = 'none';
                document.getElementById('navMenu').style.width = '100%';
                document.getElementById('innerNav').style.display = 'block';
                document.getElementById('navigation').style.display = 'block';
                document.getElementById('sideCaption').style.display = 'block';
                document.getElementById('navMenu').style.borderBottomRightRadius = '0';
                document.getElementById('navMenu').style.borderTopRightRadius = '0';
                document.getElementById('closemenu').style.marginLeft = '90%';
                document.getElementById('closemenu').style.padding = '0';
                document.getElementById('closemenu').innerHTML = '«';
                document.getElementById('container').style.display = 'none';
                document.getElementById('navMenu').scrollIntoView();
            }
            
        }else{
            if (devOrientation === 'landscape'){
                navOpen = true;
                document.getElementById('closemenu').innerHTML = '«';
                document.getElementById('entirePage').style.flexDirection = 'row';
                document.getElementById('navMenu').style.display = 'block';
                document.getElementById('navMenu').style.width = '22.5%';
                document.getElementById('main').style.width = '77.5%';
                document.getElementById('innerNav').style.display = 'block';
                document.getElementById('navigation').style.display = 'block';
                document.getElementById('sideCaption').style.display = 'block';
                document.getElementById('closemenu').style.marginLeft = '90%';
    
                for (var i = 0; i < document.getElementsByClassName('section').length; i++){//CHANGE THIS FOR LOOP AS HTML UPDATES!
                    document.getElementsByClassName('section')[i].style.marginLeft = '8%';
                }

                for (var i = 0; i < document.getElementsByClassName('content').length; i++){
                    document.getElementsByClassName('content')[i].style.marginLeft = '8%';
                    document.getElementsByClassName('content')[i].style.marginRight = '8%';
                }

                for (var i = 0; i < document.getElementsByClassName('list').length; i++){
                    document.getElementsByClassName('list')[i].style.marginLeft = '10.5%';
                }

                document.getElementById('graph1').style.marginRight = '8%';
                document.getElementById('graph1').style.marginLeft = '8%';
                document.getElementById('story').style.marginLeft = '8%';
                document.getElementById('story').style.marginRight = '8%';
                document.getElementById('citesources').style.marginRight = '8%';
                document.getElementById('citesources').style.marginLeft = '8%';
                document.getElementById('source').style.marginLeft = '8%';
            }else{
                navOpen = true;
                document.getElementById('main').style.width = '100%';
                document.getElementById('main').style.display = 'block';
                document.getElementById('innerNav').style.display = 'none';
                document.getElementById('navigation').style.display = 'none';
                document.getElementById('sideCaption').style.display = 'none';
                document.getElementById('container').style.display = 'block';
                document.getElementById('navMenu').style.width = '25%';
                document.getElementById('navMenu').style.borderTopRightRadius = '15px';
                document.getElementById('navMenu').style.borderBottomRightRadius = '15px';
                document.getElementById('closemenu').innerHTML = 'Menu »';
                document.getElementById('closemenu').style.marginLeft = '0.1vw';
                document.getElementById('closemenu').style.fontSize = '5vw';
                
            }
        }
    }
}

function hoverNavLink(){
    if(devOrientation === 'landscape'){
        console.log('hi ther');
        document.getElementsByClassName('arrow')[navBarNames.indexOf(this.getElementsByClassName('newNavLink')[0].innerHTML)].style.display = 'block';
    }
}

function removeNavArrow(){
    if(devOrientation === 'landscape'){
        document.getElementsByClassName('arrow')[navBarNames.indexOf(this.getElementsByClassName('newNavLink')[0].innerHTML)].style.display = 'none';
    }
}

//Graphs and chart setup

var listOfFirstDrugs = [{Drug: 'Alcohol', Stat: 55.3, color: '#715bd4'}, {Drug: 'Marijuana', Stat: 35.2, color: 'green'}, {Drug: 'Vaping*', Stat: 34.5, color: 'orange'}];

function drawFirstGraph(maxStat, increment){
    if (devOrientation === 'landscape'){
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
            drugStat.style.width = (((listOfFirstDrugs[i].Stat/maxStat) * 72.5) - 1.5) + '%';
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
    }else{//mobile compatible version. vertical bar graph
        var newCont = document.createElement('div');
        newCont.id = 'pContainer';
        //newCont.innerHTML = 'stuff is here';
        document.getElementById('graph1').appendChild(newCont);

        var leftCont = document.createElement('div');
        leftCont.id = 'lContainer';
        document.getElementById('pContainer').appendChild(leftCont);

        var rightCont = document.createElement('div');
        rightCont.id = 'rContainer';
        document.getElementById('pContainer').appendChild(rightCont);

        
        for(var i = Math.trunc(maxStat/increment); i > 0; i--){
            var percentages = document.createElement('div');
            percentages.className = 'hPercentDiv';
            if(i === 1){
                percentages.innerHTML = (i*increment) + " (%)";
            }else{
                percentages.innerHTML = (i*increment);
            }
            document.getElementById('lContainer').appendChild(percentages);

            document.getElementsByClassName('hPercentDiv')[Math.trunc(maxStat/increment) - i].style.height = (48 / (maxStat/increment)) + 'vh';
        }

        for(var i = 0; i<listOfFirstDrugs.length; i++){
            var bar = document.createElement('div');
            bar.className = 'vGraphBarsCont';
            document.getElementById('rContainer').appendChild(bar);
            
        }

        for(var i = 0; i<listOfFirstDrugs.length; i++){
            var barContent = document.createElement('div');
            barContent.className = 'vGraphBars';
            
            document.getElementsByClassName('vGraphBarsCont')[i].appendChild(barContent);
        }

        for(var i = 0; i<listOfFirstDrugs.length; i++){
            document.getElementsByClassName('vGraphBarsCont')[i].style.width = (100 / listOfFirstDrugs.length) + '%';
            var vGraphBars = document.getElementsByClassName('vGraphBars')[i];
            vGraphBars.style.marginLeft = '15%';
            vGraphBars.style.marginRight = '15%';
            vGraphBars.style.width = '70%';
            vGraphBars.style.backgroundColor = listOfFirstDrugs[i].color;
            vGraphBars.style.height = (50 * (listOfFirstDrugs[i].Stat/60)) - 0.5 + 'vh';
            vGraphBars.style.marginTop = (50 - (50 * (listOfFirstDrugs[i].Stat/60) -0.5)) + 'vh';
        }

        for(var i = 0; i<listOfFirstDrugs.length; i++){
            var a = document.createElement('div');
            a.className = 'vGraphBarsStats';
            a.innerHTML = listOfFirstDrugs[i].Stat + '%';
            document.getElementsByClassName('vGraphBars')[i].appendChild(a);
        }


        var hGraphScale = document.createElement('div');
        hGraphScale.id = 'hGraphScale';
        document.getElementById('graph1').appendChild(hGraphScale);

        for(var i = 0; i<listOfFirstDrugs.length; i++){
            var drugNames = document.createElement('p');
            drugNames.className = 'hDrugNames';
            drugNames.innerHTML = listOfFirstDrugs[i].Drug;
            document.getElementById('hGraphScale').appendChild(drugNames);
            document.getElementsByClassName('hDrugNames')[i].style.width = (100 / listOfFirstDrugs.length) + '%';
        }
    }
    
    if(devOrientation === 'landscape'){
        var disclaimer = document.createElement('div');
        disclaimer.id = 'disclaimer';
        disclaimer.innerHTML = '*Vaping nicotine. Does not include marijuana vaping and vaping for just flavoring. The prevalence of use of these substances among high school seniors in the past year is 22.1%, and 16.6%, respectively. The prevalence of use of all vapes is 39.0%, which suggests some overlap.';
        document.getElementById('graph1').appendChild(disclaimer);
    }
    
}

//2D array needed for createHover method
var pastDrugUseStats = [['Alcohol', 52.1, 53.3, 55.7, 'Has remained relatively stable'], ['Marijuana', 35.7, 35.9, 37.1, 'Has remained relatively stable'], ['Vaping*', 35.3, 29.7, 18.8, 'Has sharply increased, but leveled off'], ['hey there'], ['hi there']];

function createHover(num){
    for (i = 0; i<listOfFirstDrugs.length; i++){
        var otherInfo = document.createElement('div');
        otherInfo.className = 'hoverContainer';
        document.getElementById('graph1').appendChild(otherInfo);
    }

    for (i = 0; i<listOfFirstDrugs.length; i++){
        if(devOrientation === 'portrait'){
            var lt = document.createElement('div');
            lt.className = 'topC';
            document.getElementsByClassName('hoverContainer')[i].appendChild(lt);
        }
        
        if(devOrientation === 'portrait'){

        }
        
        
        if (devOrientation === 'landscape'){
            var x = document.createElement('p');//x button
            x.innerHTML = '✖';
            x.className = 'hoverX';
            document.getElementsByClassName('hoverContainer')[i].appendChild(x);
            var otherInfoText = document.createElement('div');//title of drug
            otherInfoText.className = 'hoverContainerTitleText';
            otherInfoText.innerHTML = pastDrugUseStats[i][0];
            document.getElementsByClassName('hoverContainer')[i].appendChild(otherInfoText);
        }else{
            var otherInfoText = document.createElement('div');//title of dr
            otherInfoText.className = 'pHoverContainerTitleText';
            otherInfoText.innerHTML = pastDrugUseStats[i][0];
            document.getElementsByClassName('topC')[i].appendChild(otherInfoText);
            var x = document.createElement('p');//x button
            x.innerHTML = '✖';
            x.className = 'pHoverX';
            document.getElementsByClassName('topC')[i].appendChild(x);
        }
        

        if(devOrientation === 'portrait'){
            var p = document.createElement('div');
            p.className = 'pHoverContainer';
            document.getElementsByClassName('hoverContainer')[i].appendChild(p);
        }
        if(devOrientation === 'portrait'){
            /*var l = document.createElement('div');
            l.className = 'lHoverContainer';
            document.getElementsByClassName('pHoverContainer')[i].appendChild(l);*/

            var r = document.createElement('div');
            r.className = 'rHoverContainer';
            document.getElementsByClassName('pHoverContainer')[i].appendChild(r);
        }

        
            var triangle = document.createElement('div');
            triangle.innerHTML = '';
            
            if(devOrientation === 'landscape'){
                triangle.className = 'triangle';
                document.getElementsByClassName('hoverContainer')[i].appendChild(triangle);
            document.getElementsByClassName('triangle')[i].style.borderBottom = '30px solid ' + listOfFirstDrugs[i].color;
                
            }else{
                triangle.className = 'pTriangle';
                document.getElementsByClassName('hoverContainer')[i].appendChild(triangle);
            document.getElementsByClassName('pTriangle')[i].style.borderBottom = '30px solid ' + listOfFirstDrugs[i].color;
            }
            
        
            
        var otherInfoText1 = document.createElement('p');//title of 'prevalence of use'
        otherInfoText1.innerHTML = '2020 prevalence of use among 12th graders: ';
        if (devOrientation === 'landscape'){
            otherInfoText1.className = 'hoverContainerPrevalence';
            document.getElementsByClassName('hoverContainer')[i].appendChild(otherInfoText1);
        }
        
        var otherInfoText2 = document.createElement('p');//prevalence of use; in percentages
        otherInfoText2.innerHTML = listOfFirstDrugs[i].Stat + "%";
        if(devOrientation === 'landscape'){
            otherInfoText2.className = 'hoverContainerPercentage';
            document.getElementsByClassName('hoverContainer')[i].appendChild(otherInfoText2);
            document.getElementsByClassName('hoverContainer')[i].appendChild(document.createElement('hr'));//line
        }
        if(devOrientation === 'portrait'){
            var li = document.createElement('hr');
            li.classname = 'pLine'
            document.getElementsByClassName('rHoverContainer')[i].appendChild(li);
        }
        
            
        var otherInfoHeader = document.createElement('div');//title of 'past prevalence of use'
        otherInfoHeader.innerHTML = 'Past prevalence of use:';
        if(devOrientation === 'landscape'){
            otherInfoHeader.className = 'hoverContainerPast';
            document.getElementsByClassName('hoverContainer')[i].appendChild(otherInfoHeader);
        }else{
            otherInfoHeader.className = 'pHoverContainerPast';
            document.getElementsByClassName('rHoverContainer')[i].appendChild(otherInfoHeader);
        }

        
        for(var year = 2019; year > 2016; year--){
            var otherInfoYears = document.createElement('p');//title of year
            otherInfoYears.innerHTML = year + ": "
            if(devOrientation === 'landscape'){
                otherInfoYears.className = 'hoverContainerYear';
                document.getElementsByClassName('hoverContainer')[i].appendChild(otherInfoYears);
            }else{
                otherInfoYears.className = 'pHoverContainerYear';
                document.getElementsByClassName('rHoverContainer')[i].appendChild(otherInfoYears);
            }
            
        }

        for(var j = 0; j < 3; j++){
            var otherInfoPercentages = document.createElement('span');//percentages in past years
            otherInfoPercentages.innerHTML = pastDrugUseStats[i][j+1] + '%';
            if(devOrientation === 'landscape'){
                otherInfoPercentages.className = 'hoverContainerPastPercentage';
                document.getElementsByClassName('hoverContainer')[i].getElementsByClassName('hoverContainerYear')[j].appendChild(otherInfoPercentages);
            }else{
                otherInfoPercentages.className = 'pHoverContainerPastPercentage';
                document.getElementsByClassName('rHoverContainer')[i].getElementsByClassName('pHoverContainerYear')[j].appendChild(otherInfoPercentages);
            }
            
        }

        var otherInfoTrend = document.createElement('div');
        otherInfoTrend.innerHTML = 'Trend: ' + pastDrugUseStats[i][4];
        if(devOrientation === 'landscape'){
            otherInfoTrend.className = 'hoverContainerTrend';
            document.getElementsByClassName('hoverContainer')[i].appendChild(otherInfoTrend);
        }else{
            otherInfoTrend.className = 'pHoverContainerTrend';
            document.getElementsByClassName('rHoverContainer')[i].appendChild(otherInfoTrend);
        }
        
        var otherInfoBotCaption = document.createElement('p');//source
        otherInfoBotCaption.innerHTML = 'Source: ';
        if(devOrientation === 'landscape'){
            otherInfoBotCaption.className = 'hoverContainerBotCaption';
            document.getElementsByClassName('hoverContainer')[i].appendChild(otherInfoBotCaption);
        }else{
            otherInfoBotCaption.className = 'pHoverContainerBotCaption';
            document.getElementsByClassName('rHoverContainer')[i].appendChild(otherInfoBotCaption);
        }
        
        var otherInfoBotLink = document.createElement('A');
        var innerLink = document.createTextNode('National Institute on Drug Abuse');
        otherInfoBotLink.setAttribute('href', 'https://www.drugabuse.gov/drug-topics/related-topics/trends-statistics/infographics/monitoring-future-2020-survey-results');
        otherInfoBotLink.setAttribute('target', '_blank');
        otherInfoBotLink.appendChild(innerLink);
        if(devOrientation === 'landscape'){
            otherInfoBotLink.className = 'hoverContainerBotLink';
            document.getElementsByClassName('hoverContainerBotCaption')[i].appendChild(otherInfoBotLink);
        }else{
            otherInfoBotLink.className = 'pHoverContainerBotLink';
            document.getElementsByClassName('pHoverContainerBotCaption')[i].appendChild(otherInfoBotLink);
        }
        

            //attributes of the container
            if(devOrientation === 'landscape'){
                document.getElementsByClassName('hoverContainerBotLink')[i].style.color = listOfFirstDrugs[i].color;
            }else{
                document.getElementsByClassName('pHoverContainerBotLink')[i].style.color = listOfFirstDrugs[i].color;
            }
            
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

    if(devOrientation === 'landscape'){
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
    }else{
        var counter;
        for(var i = 0; i < listOfFirstDrugs.length; i++){
            if(this.getElementsByClassName('vGraphBarsStats')[0].innerHTML === listOfFirstDrugs[i].Stat + '%'){
                counter = i;
                break;
            }
        }

        var h = document.getElementsByClassName('hoverContainer')[counter];
        h.style.position = 'absolute';
        h.style.display = 'block';
        h.style.top = this.offSetTop - window.pageYOffset + 'px';
        console.log(this.offsetTop);
        console.log(this.offsetTop - 400);
        h.style.width = '67.5%';
        h.style.left = '17.5%';
        h.style.height = 'auto';
        
        if(devOrientation === 'landscape'){
            var t = document.getElementsByClassName('triangle')[counter];
            if(counter === 0){
                t.style.marginLeft = '0%';
            }else if (counter === 1){
                t.style.marginLeft = '33%';
            }else{
                t.style.marginLeft = '64.5%';
            }
        }else{
            var t = document.getElementsByClassName('pTriangle')[counter];
            if(counter === 0){
                t.style.marginLeft = '0%';
            }else if (counter === 1){
                t.style.marginLeft = '33%';
            }else{
                t.style.marginLeft = '64.5%';
            }
        }
        

        this.scrollIntoView();
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
        document.getElementById('entirePage').style.filter = 'blur(5px)';
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
    document.getElementById('entirePage').style.filter = 'blur(0px)';
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

createNavigationBar();

for (var i = 0; i < navBarNames.length; i++){
    document.getElementsByClassName('navLink')[i].addEventListener('click', scrollToSection);
    document.getElementsByClassName('navLink')[i].addEventListener('mouseover', hoverNavLink);
    document.getElementsByClassName('navLink')[i].addEventListener('mouseout', removeNavArrow);
}

drawFirstGraph(60, 10);
createHover(1);
button.addEventListener('click', remove);
document.getElementById('close').addEventListener('click', remove);
document.getElementById('cite').addEventListener('click', showCitations);
/*document.getElementById('title').addEventListener('click', showHover);*///just for testing

function createEventListeners(){
    if(devOrientation === 'landscape'){
        for (var i = 0; i < 3; i++){
            document.getElementsByClassName('graphBars')[i].addEventListener('click', showHover);
        }
    }else{
        for (var i = 0; i < 3; i++){
            document.getElementsByClassName('vGraphBars')[i].addEventListener('click', showHover);
        }
    }
}

for (var i = 0; i < 5; i++){
    document.getElementsByClassName('textSizeOptions')[i].addEventListener('click', changeFontSize);
}

createEventListeners();
document.getElementById('closemenu').addEventListener('click', removeNav);

if(devOrientation === 'landscape'){
    document.getElementsByClassName('hoverX')[0].addEventListener('click', removeHover1);
    document.getElementsByClassName('hoverX')[1].addEventListener('click', removeHover2);
    document.getElementsByClassName('hoverX')[2].addEventListener('click', removeHover3);
}else{
    document.getElementsByClassName('pHoverX')[0].addEventListener('click', removeHover1);
    document.getElementsByClassName('pHoverX')[1].addEventListener('click', removeHover2);
    document.getElementsByClassName('pHoverX')[2].addEventListener('click', removeHover3);
}
    


setTimeout(detectScroll, 2500);

if(devOrientation === 'portrait'){
    var disclaimer = document.createElement('div');
    disclaimer.id = 'disclaimer';
    disclaimer.innerHTML = '*Vaping nicotine. Does not include marijuana vaping and vaping for just flavoring. The prevalence of use of these substances among high school seniors in the past year is 22.1%, and 16.6%, respectively. The prevalence of use of all vapes is 39.0%, which suggests some overlap.';
    document.getElementById('graph1').appendChild(disclaimer);
}