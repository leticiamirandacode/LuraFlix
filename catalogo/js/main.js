import { catalogosPorPerfil } from './data.js';
import { createCarousel } from './components/Carousel.js';
import {
    getFavoritosStorageKey,
    getPerfilAtivoNome
} from './utils.js';

document.addEventListener('DOMContentLoaded', () => {
    const nomePerfil = getPerfilAtivoNome();
    const imagemPerfil = localStorage.getItem('perfilAtivoImagem');
    const kidsLink = document.querySelector('.kids-link');
    const profileIcon = document.querySelector('.profile-icon');

    if (kidsLink) kidsLink.textContent = nomePerfil;
    if (profileIcon) {
        profileIcon.src = imagemPerfil || '../assets/perfil-1.jpg';
    }

    renderCatalogo();
});

window.renderCatalogo = function () {
    const container = document.getElementById('main-content');

    if (!container) return;

    const nomePerfil = getPerfilAtivoNome();
    const nomePerfilNormalizado = nomePerfil
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');
    const categoriesBase =
        catalogosPorPerfil[nomePerfil] ||
        catalogosPorPerfil[nomePerfilNormalizado] ||
        catalogosPorPerfil.Leticia ||
        [];
    const favoritos = JSON.parse(localStorage.getItem(getFavoritosStorageKey())) || [];
    const categories = categoriesBase.map((category) => ({
        ...category,
        items: category.items.map((item) => ({ ...item }))
    }));

    container.innerHTML = "";

    if (favoritos.length > 0) {
        const favCategory = {
            title: 'Meus Favoritos',
            items: favoritos
        };

        const favCarousel = createCarousel(favCategory);
        container.appendChild(favCarousel);
    }

    categories.forEach((category) => {
        const carousel = createCarousel(category);
        container.appendChild(carousel);
    });
};
