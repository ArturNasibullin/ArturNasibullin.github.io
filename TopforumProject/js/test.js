window.addEventListener('load', function () {

	let confSelect = document.getElementById("conf-selector");
	let subMenuLinks = document.querySelectorAll((".header-top-line-submenu-speakers__link"));

for (let index = 0; index < subMenuLinks.length; index++) {
	// console.log(subMenuLinks[index]);
	subMenuLinks.forEach((link) => {
		link.addEventListener('click', (e) => {
			if(e.target == subMenuLinks[index]) {
				confSelect = subMenuLinks[index].dataset.filter;
			}
		});
	});
	console.log(confSelect.value);
}

});