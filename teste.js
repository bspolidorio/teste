var style = document.createElement('style');
style.innerHTML =
	'.body {' +
		'color: purple;' +
		'background-color: #e5e5e5;' +
		'height: 100%;' +
	'}';
var ref = document.querySelector('script');
ref.parentNode.insertBefore(style, ref);
