let container = document.getElementById('main-container');
let headerSection = document.getElementById('header-section');
let btn = document.createElement('button');
btn.textContent = "Generate Divs"
headerSection.appendChild(btn);
btn.addEventListener('click', () => {createDivs()});
function createDivs () {
    for(i=0; i<256; i++) {
        let div = document.createElement('div');
        div.setAttribute("class", "divs");
        div.style.cssText = "display:flex; max-width: 51px; width: 50px; height: 50px; max-height: 51px; background-color:grey;border-color: black; border-width: 2px"
        container.appendChild(div);
    }
}