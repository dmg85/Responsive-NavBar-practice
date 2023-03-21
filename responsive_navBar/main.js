const hamburguer = document.querySelector('.hamburguer');
const hamburguer_icon = hamburguer.querySelector('span');
const mobile_menu = document.querySelector('.mobile-menu');

hamburguer.addEventListener('click', () => {
    hamburguer_icon.innerText = hamburguer_icon.innerText === 'menu'
        ? 'close'
        : 'menu';

    mobile_menu.classList.toggle('is-open');
})

