// Abre e fecha menu em modo mobile

const menuMobile = document.querySelector('.menu-mobile');
const body = document.querySelector('body');

menuMobile.addEventListener('click', () => {
    menuMobile.classList.contains("bi-list")
    ? menuMobile.classList.replace("bi-list", "bi-x")
    : menuMobile.classList.replace("bi-x", "bi-list")
    body.classList.toggle("menu-nav-active")
});

// Fecha o menu (no modo mobile) quando clicar em algum item

const navItem = document.querySelectorAll('.nav-item');

navItem.forEach(item => {
    item.addEventListener('click', () => {
        if (body.classList.contains('menu-nav-active')) {
            body.classList.remove('menu-nav-active');
            menuMobile.classList.replace("bi-x", "bi-list");
        }
    });
});

// Scroll da página home ao passar o mouse sobre a seta

document.querySelector('.scroll').addEventListener('mouseenter', () => {
    document.getElementById("sobre").scrollIntoView({behavior:'smooth'});
    });

// Animar todos os itens que tiverem o atributo data-anime

const item = document.querySelectorAll("[data-anime]");

const animeScroll = () => {
  const windowTop = window.scrollY + window.innerHeight * 0.85;

  item.forEach((element) => {
    if (windowTop > element.offsetTop) {
      element.classList.add("animate");
    } else {
      element.classList.remove("animate");
    }
  })
}

animeScroll();

window.addEventListener("scroll", () => { 
  animeScroll();
})

// Ativar carregamento do botão enviar mensagem

const btnEnviar = document.querySelector('#btn-enviar');
const btnEnviarLoader = document.querySelector('#btn-enviar-loader');

btnEnviar.addEventListener('click', () => {

  if(document.getElementById("nome").value.length > 0 &&
   document.getElementById("email").value.length > 0 && 
   document.getElementById("mensagem").value.length > 0) {

    btnEnviar.style.display = 'none';
    btnEnviarLoader.style.display = 'block';
    }
})

setTimeout(() => {
  document.querySelector('#alerta').style.display = 'none';
}, 5000)