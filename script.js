function qs(selector,parent) {
    const el = parent ?
    parent.querySelector(selector) :
    document.querySelector(selector);

    if(!el) throw new Error ('No se encontro el seleccionador')

    // console.log(el)
    return el;
}

const containerEl = qs('.container');
const ColorBtn = qs('#btn');
const titleEl = qs("#title")


function generateDivs() {
    for (let i=0;i < 30; i++) {
        const colorContainerEl = document.createElement('div')
        colorContainerEl.classList.add('grid-element')
        
        containerEl.appendChild(colorContainerEl)
    }
}

window.addEventListener('load',generateDivs())

function generateRandomCode() {

    const chars = '0123456789ABCDEF'
    const maxCharset = 6;
    let colorCode = '';
    for(let i = 0; i < maxCharset; i++) {
        const randomNum = Math.floor(Math.random() * chars.length)
        colorCode +=  chars[randomNum]
    }
    // console.log(colorCode)
    return colorCode;
}

const allDivsArray = document.querySelectorAll('.grid-element')

function updateAllColorsDivs() {
    
    allDivsArray.forEach(div => {
        let randomColorCode = generateRandomCode();
        div.style.background = '#' + randomColorCode;
        div.textContent = '#' + randomColorCode;
    })

}

function changeBodyColor() {
    let randomGeneratedCol = generateRandomCode();
    const bodyColor = qs('body');

    bodyColor.style.background = '#'+ randomGeneratedCol;
    console.log('change body color')

    
}

function changeTitleColor() {
    let randomColor = generateRandomCode();
    titleEl.style.color = '#' + randomColor;
}

setInterval(changeTitleColor,500)
setInterval(changeBodyColor,7000)

window.addEventListener('load',updateAllColorsDivs())

ColorBtn.addEventListener('click',updateAllColorsDivs)