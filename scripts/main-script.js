let container = document.getElementById('main-container');      //Grab object of the main container into variable, might be useful later

let headerSection = document.getElementById('header-section'); //Create button to generate the custom grid 
let btn2 = document.createElement('button');
btn2.textContent = "Let's have some fun!";
headerSection.appendChild(btn2);
       
btn2.addEventListener('click', () => {      //Add listener on click, get input from user and validate
    let answer = prompt("Yo, what was that number of cells ya wanted in the grid?");
    while (answer == null || Number.isInteger(Number(answer)) == false || Number(answer) >= 65) {
        answer = prompt("Sorry buddy. It has to be a number, not a word, can't be negative and needs to be maximum 64")
    }
    createDivs(answer);

}); 
    
function rainbowTime (div_name) {       //Function to add on hover class
    let randomRgb = "rgb("+(Math.floor(Math.random() * 256))+","+(Math.floor(Math.random() * 256))+","+(Math.floor(Math.random() * 256))+")";
    // div_name.setAttribute("class", "divs on-hover");
    if (div_name.style.filter == "brightness(100%)") {
    div_name.style.cssText += "background-color: "+randomRgb+";"
    div_name.style.filter = "brightness(90%)"; 
    }
    else {
    let howDark = Number(div_name.style.filter.substring(11,13))-10;
    let teststring = "brightness("+ howDark +"%)"
    div_name.style.filter = teststring;
    }
}


function createDivs (num) {        //Main function to create div grid
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
    for(i=0; i<(num*num); i++) {
        let size = 960/num;     //calculate the size of individual div
        let div = document.createElement('div');
        div.setAttribute("class", "divs");
        div.addEventListener('mouseover', () => {rainbowTime(div)})     //adding event listener for on hover
        div.style.cssText += "display:flex; max-width:" + size +"px; width:" +size+"px; height: " +size+"px; max-height: " + size +"px; background-color:pink;border-color: black; border-width: 2px; filter: brightness(100%);" //max width is 51 and declared width is 50 to allow for a 1px gap
        container.appendChild(div);
    }
}