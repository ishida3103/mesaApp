// Declaração de elementos
const btnHome = document.querySelector('#nav-home')
const btnsNavMenus = document.querySelectorAll('.btn-nav-menus')
const btnsCategories = document.querySelectorAll()

// Funções
function alterarSVG(menu,svgElement){ //newColor
    console.log(svgElement)
}


function alterarMenu(newMenu){
    currMenu = document.querySelector('.btn-nav-active')
    currMenu.classList = 'btn-nav-menus btn-nav-inactive'
    newMenu.classList += ' btn-nav-active'
    pathsSvg = document.querySelectorAll('.btn-nav-active svg path')
    pathsSvg.forEach(e =>{
        e.setAttribute('stroke', '#0D261E')
    })

    pathsSvgInactive = document.querySelectorAll('.btn-nav-inactive  svg path')
    pathsSvgInactive.forEach(e=>{
        e.setAttribute('stroke', '9FC4B7')
    })
}

function hoverCategories(element){
    
}

// Eventos
btnsNavMenus.forEach(btn=>{
    btn.addEventListener('click', ()=>{
        classList = btn.classList
        isActive = classList.contains('btn-nav-active')
        if (isActive){
            console.log('Botão ativo')
        }else{
            alterarMenu(btn)
        }
    })
})

btn