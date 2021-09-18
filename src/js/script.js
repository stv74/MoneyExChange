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
});
