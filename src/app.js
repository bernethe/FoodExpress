'use strict';

const main = () => {
	let _cp = document.body.dataset.page;
	if (window[_cp] && typeof window[_cp] === 'function') {
		window[_cp]();
	}
};

document.addEventListener('DOMContentLoaded', main, !1);
