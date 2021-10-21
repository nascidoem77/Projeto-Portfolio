// Abre e fecha menu em modo mobile

const menuMobile = document.querySelector('.menu-mobile')
const body = document.querySelector('body')

menuMobile.addEventListener('click', () => {
    menuMobile.classList.contains("bi-list")
    ? menuMobile.classList.replace("bi-list", "bi-x")
    : menuMobile.classList.replace("bi-x", "bi-list")
    body.classList.toggle("menu-nav-active")
})

// Fecha o menu (no modo mobile) quando clicar em algum item

const navItem = document.querySelectorAll('.nav-item')

navItem.forEach(item => {
    item.addEventListener('click', () => {
        if (body.classList.contains('menu-nav-active')) {
            body.classList.remove('menu-nav-active')
            menuMobile.classList.replace("bi-x", "bi-list")
        }
    })
})

// Scroll da página home ao passar o mouse sobre a seta

document.querySelector('.scroll').addEventListener('mouseenter', () => {
    document.getElementById("sobre").scrollIntoView({behavior:'smooth'});
    });

    