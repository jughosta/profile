(function (w, Snap, mina) {
	'use strict';

	if (!hasSVG() || !Snap) {
		return;
	}

	if (typeof w.document.addEventListener === 'function') {
		w.document.addEventListener('DOMContentLoaded', onLoad);
	}

	var minaValues = ['elastic', 'bounce', 'easeinout'],
		snap, oddCircles, evenCircles;

	function onLoad () {
		snap = Snap.select('#js-snap-colors');
		oddCircles = snap.group(snap.selectAll('circle:nth-child(odd)'));
		evenCircles = snap.group(snap.selectAll('circle:nth-child(even)'));

		setTimeout(animate, 3000);
	}

	function animate () {
		var r = getRandomNumber(60, 120),
			duration = 1000 + getRandomNumber(300, 500),
			easing = mina[minaValues[getRandomNumber(0, minaValues.length)]],
			direction = (Math.random() > 0.5) ? 1 : -1,
			scale = 's1.2,1.2',
			center = ',300,300';

		oddCircles.animate(
			{transform: 'r' + (-r * direction) + center},
			duration, easing,
			function () {
				oddCircles.animate({transform: 'r0' + center}, duration, easing);
			});

		evenCircles.animate(
			{transform: 'r' + r * direction + center + scale},
			duration, easing,
			function () {
				evenCircles.animate(
					{transform: 'r0' + center + 's1,1'},
					duration, easing,
					function () {
						setTimeout(animate, 3000);
					});
			});
	}

	function hasSVG () {
		return (typeof w.document.createElementNS === 'function') &&
			(typeof w.document
				.createElementNS('http://www.w3.org/2000/svg', 'svg')
				.createSVGRect === 'function') &&
			!('opera' in w);
	}

	function getRandomNumber (min, max) {
		return Math.floor(Math.random() * (max - min)) + min;
	}

})(window, Snap, mina);