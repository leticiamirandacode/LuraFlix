import {
    getFavoritosStorageKey,
    getYouTubeId,
    getRandomMatchScore,
    getRandomDuration,
    getRandomAgeBadge
} from '../utils.js';

function salvarFavoritos(favoritos) {
    localStorage.setItem(getFavoritosStorageKey(), JSON.stringify(favoritos));
}

export function createCard(item, options = {}) {
    let favoritos = JSON.parse(localStorage.getItem(getFavoritosStorageKey())) || [];

    const card = document.createElement('div');
    card.className = 'movie-card';
    
    if (options.isContinueWatching) {
        card.classList.add('continue-watching-card');
    }

    if (item.progress) {
        card.classList.add('has-progress');
    }

    const img = document.createElement('img');
    img.src = item.img;
    img.alt = 'Movie cover';

    const iframe = document.createElement('iframe');
    iframe.frameBorder = '0';
    iframe.allow = 'autoplay; encrypted-media';

    const videoId = getYouTubeId(item.youtube);

    card.appendChild(iframe);
    card.appendChild(img);

    const ageBadge = item.ageBadge || getRandomAgeBadge();
    const matchScore = item.matchScore || getRandomMatchScore();
    const duration = item.duration || getRandomDuration(item.progress);
    const tags = Array.isArray(item.tags) && item.tags.length > 0
        ? item.tags
        : ['Empolgante', 'Filme', 'Drama'];

    const details = document.createElement('div');
    details.className = 'card-details';
    details.innerHTML = `
        <div class="details-buttons">
            <div class="left-buttons">
                <button class="btn-icon btn-play-icon"><i class="fas fa-play" style="margin-left:2px;"></i></button>
                ${item.progress ? '<button class="btn-icon"><i class="fas fa-check"></i></button>' : '<button class="btn-icon"><i class="fas fa-plus"></i></button>'}
                <button class="btn-icon"><i class="fas fa-thumbs-up"></i></button>
            </div>
            <div class="right-buttons">
                <button class="btn-icon"><i class="fas fa-chevron-down"></i></button>
            </div>
        </div>
        <div class="details-info">
            <span class="match-score">${matchScore}% relevante</span>
            <span class="age-badge ${ageBadge.class}">${ageBadge.text}</span>
            <span class="duration">${duration}</span>
            <span class="resolution">HD</span>
        </div>
        <div class="details-tags">
            ${tags.map((tag) => `<span>${tag}</span>`).join('')}
        </div>
    `;
    card.appendChild(details);

    const likeBtn = details.querySelector('.fa-thumbs-up').parentElement;
    let isLiked = favoritos.some((favorito) => favorito.img === item.img);

    if (isLiked) {
        likeBtn.style.backgroundColor = 'red';
    }

    likeBtn.onclick = (event) => {
        event.stopPropagation();

        if (isLiked) {
            favoritos = favoritos.filter((favorito) => favorito.img !== item.img);
            likeBtn.style.backgroundColor = '';
            isLiked = false;
        } else {
            favoritos.push(item);
            likeBtn.style.backgroundColor = 'red';
            isLiked = true;
        }

        salvarFavoritos(favoritos);
        window.renderCatalogo();
    };

    if (item.progress) {
        const pbContainer = document.createElement('div');
        pbContainer.className = 'progress-bar-container';
        const pbValue = document.createElement('div');
        pbValue.className = 'progress-value';
        pbValue.style.width = `${item.progress}%`;
        pbContainer.appendChild(pbValue);
        card.appendChild(pbContainer);
    }

    let playTimeout;
    card.addEventListener('mouseenter', () => {
        const rect = card.getBoundingClientRect();
        const windowWidth = window.innerWidth;

        if (rect.left < 100) {
            card.classList.add('origin-left');
        } else if (rect.right > windowWidth - 100) {
            card.classList.add('origin-right');
        }

        playTimeout = setTimeout(() => {
            iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&modestbranding=1&loop=1&playlist=${videoId}`;
            iframe.classList.add('playing');
            img.classList.add('playing-video');
        }, 600);
    });

    card.addEventListener('mouseleave', () => {
        clearTimeout(playTimeout);
        iframe.classList.remove('playing');
        img.classList.remove('playing-video');
        iframe.src = '';
        card.classList.remove('origin-left');
        card.classList.remove('origin-right');
    });

    return card;
}
