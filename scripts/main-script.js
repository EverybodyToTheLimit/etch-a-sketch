let container = document.getElementById('main-container');      //Grab object of the main container into variable, might be useful later

let headerSection = document.getElementById('header-section'); //Create button to generate the grid 
let btn = document.createElement('button');
let btn2 = document.createElement('button');
btn.style.cssText = "background-image: url(/etch-a-sketch/img/rainbow-button.png); background-size: 100%; height: 50px; width: 100px;";
btn2.style.cssText = "background-image: url(/etch-a-sketch/img/rainbow-button2.png); background-size: 100%; height: 50px; width: 100px;";
btn.textContent = "Generate Div";
btn2.textContent = "Custom Div";
headerSection.appendChild(btn);
headerSection.appendChild(btn2);

btn.addEventListener('click', () => {createDivs()});        //Add listener on click, call the generate grid function
btn2.addEventListener('click', () => {
    let answer = prompt("Yo, what was that number of cells ya wanted in the grid?");
    while (answer == null || Number.isInteger(Number(answer)) == false || Number(answer) > 100) {
        answer = prompt("Sorry buddy. It has to be a number (not a word), lower than 64")
    }

    

    
}); 
    
function rainbowTime (div_name) {       //Function to add on hover class
    div_name.setAttribute("class", "divs on-hover");
}


function createDivs () {        //Main function to create div grid
    for(i=0; i<256; i++) {
        let div = document.createElement('div');
        div.setAttribute("class", "divs");
        div.addEventListener('mouseover', () => {rainbowTime(div)})     //adding event listener for on hoover
        div.style.cssText = "display:flex; max-width: 51px; width: 50px; height: 50px; max-height: 51px; background-color:grey;border-color: black; border-width: 2px" //max width is 51 and declared width is 50 to allow for a 1px gap
        container.appendChild(div);
    }
}