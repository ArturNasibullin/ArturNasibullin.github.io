window.addEventListener('load', function () {

	const confSelect = document.getElementById("conf-selector");
	const sponsors = document.querySelectorAll(".sponsor-card");

	confSelect.addEventListener("change", function () {
		let value = confSelect.value;
		[...sponsors].forEach((sponsor) => {
				if (value === "") {
				sponsor.classList.remove("d-none");
				} else {
				const id = sponsor.dataset.spon;
					if (id != value) {
						sponsor.classList.add("d-none");
					} else {
						sponsor.classList.remove("d-none");
					}
				}
		});
	});

});