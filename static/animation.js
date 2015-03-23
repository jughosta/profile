(function () {
	if (!('addEventListener' in document)) {
		return;
	}

	var circles = document.getElementsByTagName('circle'),
		animationDelay = 15000,
		pauseDelay = 5000,
		itemDelay = 30;

	document.addEventListener('DOMContentLoaded', function () {
		setTimeout(animation, 1000);
	});

	/**
	 * Animation loop
	 */
	function animation () {
		snabbt(circles, {
			position: handleTargetPosition,
			delay: handleTargetDelay,
			easing: 'spring',
			springConstant: 0.3,
			springDeceleration: 0.8
		}).then({
			position: handleOutsidePosition,
			delay: handleOutsideDelay,
			easing: 'easeIn'
		});

		scheduleNextAnimation();
	}

	/**
	 * Target position handler.
	 * @param {number} i
	 * @returns {number[]}
	 */
	function handleTargetPosition (i) {
		return [0, Number(circles[i].getAttribute('data-y')), 0];
	}

	/**
	 * Target delay handler.
	 * @param {number} i
	 * @returns {number}
	 */
	function handleTargetDelay (i) {
		return i * itemDelay;
	}

	/**
	 * Outside position handler.
	 * @param {number} i
	 * @returns {number[]}
	 */
	function handleOutsidePosition (i) {
		return [0, 0, 0];
	}

	/**
	 * Outside delay handler.
	 * @param {number} i
	 * @returns {number}
	 */
	function handleOutsideDelay (i) {
		return pauseDelay + i * itemDelay;
	}

	/**
	 * Schedules next animation loop step.
	 */
	function scheduleNextAnimation () {
		setTimeout(animation, animationDelay);
	}

})();