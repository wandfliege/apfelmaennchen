(function ($, Apfelmaennchen) {
	"use strict";

	function init() {
		$("#calculate").click(function (e) {
			e.preventDefault();
			console.log("calculate");

			var canvas = document.createElement('canvas');
			canvas.width = 900;
			canvas.height = 600;

			$("#canvas").html(canvas);
			var realMin = getValue("#re_min");
			var realMax = getValue("#re_max");
			var imaMin = getValue("#im_min");
			var imaMax = getValue("#im_max");
			var maxAbsolute = getValue("#maxAbsolute");
			var maxIterations = getValue("#maxIterations");

			var apfelmaennchen = new Apfelmaennchen();

			apfelmaennchen.calc(canvas, realMin, realMax, imaMin, imaMax, maxAbsolute, maxIterations);
		});
	}

	function getValue(id) {
		return parseFloat($(id).val());
	}

	$(document).ready(function () {
		init();
	});

}(
	$,
	De.Apfelmaennchen
));
