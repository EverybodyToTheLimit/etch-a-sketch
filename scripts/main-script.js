let container = document.getElementById('main-container');      //Grab object of the main container into variable, might be useful later

let headerSection = document.getElementById('header-section'); //Create button to generate the custom grid 
let btn2 = document.createElement('button');
btn2.style.cssText = "background-image: url(/etch-a-sketch/img/rainbow-button2.png); background-size: 100%; height: 50px; width: 100px;";
btn2.textContent = "Custom Div";
headerSection.appendChild(btn2);
       
btn2.addEventListener('click', () => {      //Add listener on click, get input from user and validate
    let answer = prompt("Yo, what was that number of cells ya wanted in the grid?");
    while (answer == null || Number.isInteger(Number(answer)) == false || Number(answer) > 100) {
        answer = prompt("Sorry buddy. It has to be a number (not a word), lower than 64")
    }
    createDivs(answer);

}); 
    
function rainbowTime (div_name) {       //Function to add on hover class
    let randomNumber = Math.floor(Math.random() * 256);
    let randomRgb = "rgb("+randomNumber+","+randomNumber+","+randomNumber+")";
    // div_name.setAttribute("class", "divs on-hover");
    div_name.style.cssText += "background-image: linear-gradient(90deg,"+randomRgb+" 0%, "+randomRgb+" 49%, "+randomRgb+" 80%, "+randomRgb+" 100%); animation:slidebg 5s linear infinite;";
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
        div.style.cssText += "display:flex; max-width:" + size +"px; width:" +size+"px; height: " +size+"px; max-height: " + size +"px; background-color:grey;border-color: black; border-width: 2px" //max width is 51 and declared width is 50 to allow for a 1px gap
        container.appendChild(div);
    }
}