$(document).ready(function () {
	// Подключаем скрипт Select2 для вставки картинок в выпадающие списки
	function formatState(state) {
		if (!state.id) {
			return state.text;
		}
		var baseUrl = '/icons/currencies';
		var $state = $(
			'<span><img src="' +
				baseUrl +
				'/' +
				state.element.value.toLowerCase() +
				'.svg" class="img-flag" /> ' +
				state.text +
				'</span>'
		);
		return $state;
	}
	$('.hero__select').select2({
		minimumResultsForSearch: Infinity, // Убираем форму поиска из списка
		templateResult: formatState,
		templateSelection: formatState,
	});

	// Скрипт меню-гамбургера
	window.addEventListener('DOMContentLoaded', () => {
		const menu = document.querySelector('.navbar__menu'),
			menuItem = document.querySelectorAll('.navbar__item'),
			hamburger = document.querySelector('.navbar__hamburger');

		hamburger.addEventListener('click', () => {
			hamburger.classList.toggle('navbar__hamburger_active');
			menu.classList.toggle('navbar__list_active');
		});

		menuItem.forEach((item) => {
			item.addEventListener('click', () => {
				hamburger.classList.toggle('navbar__hamburger_active');
				menu.classList.toggle('navbar__list_active');
			});
		});
	});
});
