// Seleção dos Elementos
const checkbox = document.querySelector('#checkbox-menu');
const divMobile = document.querySelector('#mobile');

// Funções
const showMenu = () => {
    divMobile.classList.toggle('mobile');
}

// Chamada de Eventos
checkbox.addEventListener('click', showMenu);