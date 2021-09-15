$(document).ready(function () {
	$('#currency-1').ddslick({
		width: 116,
		background: 'background-color: rgba(255, 255, 255, 0)',
		onSelected: function (selectedData) {
			console.log(selectedData);
		},
	});
	$('.hero__select').select2({
		minimumResultsForSearch: Infinity,
	});
});
