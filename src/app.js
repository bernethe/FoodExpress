'use strict';

let _d = [
	{
		"fid": 1,
		"name": "Little Nero's Pizza",
		"c": 1,
		"q": "4.7",
		"p": "10.20"
	},
	{
		"fid": 2,
		"name": "Club Sandiwch",
		"c": 6,
		"q": "4.5",
		"p": "5.00"
	},
	{
		"fid": 3,
		"name": "Classic Burguer",
		"c": 3,
		"q": "4.9",
		"p": "6.50"
	},
	{
		"fid": 4,
		"name": "Sushi Quito",
		"c": 7,
		"q": "4.6",
		"p": "8.75"
	},
	{
		"fid": 5,
		"name": "Send Noods",
		"c": 2,
		"q": "4.7",
		"p": "4.75"
	}
];
let _c = ["All","Pizza","Asian","Burguers","BBQ","Desserts","Sandwich","Sushi"];

const main = () => {
	/*
	let _cp = document.body.dataset.page;
	if (window[_cp] && typeof window[_cp] === 'function') {
		window[_cp]();
	}
	console.table(_d);
	*/
	addEventListenerList(document.querySelectorAll('.cat-sel ul li input'), 'change', searchLocals);
	document.getElementById('q').addEventListener('keyup', searchLocals, !1);
	document.getElementById('q').addEventListener('focus', hideBanner, !1);
	document.getElementById('q').addEventListener('blur', showBanner, !1);
	document.getElementById('togglerSidebar').addEventListener('click', toggleMenu, !1);
	populateLocals(_d);
};
const toggleMenu = () => {
	document.getElementById('togglerSidebar').classList.toggle('opened');
	document.getElementById('sidebar').classList.toggle('opened');
};
const hideBanner = (ev) => {
	document.querySelector('.main-banner').classList.add('b-hide');
}
const showBanner = (ev) => {
	if( document.getElementById('q').value.trim() == '' ) {
		document.querySelector('.main-banner').classList.remove('b-hide');
	}
	
}
const searchLocals = (ev) => {
	
	const _cc = parseInt(document.querySelector('input[name=cat]:checked').value);
	const _cs = document.getElementById('q').value.trim();

	console.log(_cc, _cs);

	if( _cc != 0 || _cs != '' ) {
		let _r = JSON.stringify(_d);
		_r = JSON.parse(_r);

		if( _cc != 0 ) {
			_r = _r.filter( (obj) => obj.c == _cc )
		}

		if( _cs != '' ) {
			_r = _r.filter( (obj) => obj.name.toLowerCase().includes(_cs.toLowerCase()) )
		}

		console.log(_r);

		populateLocals(_r);
	} else {
		populateLocals(_d);
	}
};

const removeLocals = () => {
	let myParent = document.getElementById('rest_items');
	while (myParent.firstChild) {
		myParent.removeChild(myParent.firstChild);
	}
};
const populateLocals = (_l) => {
	removeLocals();
	_l.forEach( (item, index) => {
		document.getElementById('rest_items').appendChild(restItem(item));
	});
};
const restItem = (obj) => {
	return createCustomElement('a',{class:"rest-item",href:"#"}, [
		createCustomElement('figure',{},[
			createCustomElement('img',{src:`img/r-${obj.fid}.jpg`,alt:obj.name},[])
		]),
		createCustomElement('h3',{},[obj.name]),
		createCustomElement('div',{class:"row"},[
			createCustomElement('div',{class:"col-8"},[
				'<svg><use href="img/icos.svg#star"></use></svg>',
				createCustomElement('span',{class:"rest-item-score"},[obj.q]),
				createCustomElement('span',{class:"rest-item-cat"},[_c[obj.c]])
			]),
			createCustomElement('div',{class:"col-4 rest-item-cost"},["$"+obj.p])
		])
	]);
};
/*
createCustomElement('svg',{},[
	createCustomElement('use',{href:"img/icos.svg#star"},[])
])
*/
document.addEventListener('DOMContentLoaded', main, !1);
