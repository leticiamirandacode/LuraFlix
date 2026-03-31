document.addEventListener('DOMContentLoaded', () => {
	const perfilLinks = document.querySelectorAll('.profile');

	perfilLinks.forEach(link => {
		link.addEventListener('click', () => {
			const figura = link.querySelector('figure');
			const nomeEl = figura?.querySelector('figcaption');
			const imgEl = figura?.querySelector('img');

			const nome = nomeEl ? nomeEl.textContent.trim() : '';
			const imgSrc = imgEl ? imgEl.src : '';

			try {
				localStorage.setItem('perfilAtivoNome', nome);
				localStorage.setItem('perfilAtivoImagem', imgSrc);
			} catch (error) {
				// Silenciar erros de localStorage (ex: modo privado)
				console.warn('Nao foi possivel salvar o perfil ativo no localStorage.', error);
			}

		});
	});
});

