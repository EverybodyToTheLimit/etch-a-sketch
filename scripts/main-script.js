let container = document.getElementById('main-container');      //Grab object of the main container into variable, might be useful later

let headerSection = document.getElementById('header-section'); //Create button to generate the grid 
let btn = document.createElement('button');
btn.textContent = "Generate Divs"
headerSection.appendChild(btn);

btn.addEventListener('click', () => {createDivs()});        //Add listener on click, call the generate grid function


function createDivs () {        //Main function to create div grid
    for(i=0; i<256; i++) {
        let div = document.createElement('div');
        div.setAttribute("class", "divs");
        div.style.cssText = "display:flex; max-width: 51px; width: 50px; height: 50px; max-height: 51px; background-color:grey;border-color: black; border-width: 2px"
        container.appendChild(div);
    }
}