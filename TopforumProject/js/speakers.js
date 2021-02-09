window.addEventListener('load', function () {

	const confSelect = document.getElementById("conf-selector");
	const speakers = document.querySelectorAll(".speaker-card");

	confSelect.addEventListener("change", function () {
		let value = confSelect.value;
		[...speakers].forEach((speaker) => {
				if (value === "") {
				speaker.classList.remove("d-none");
				} else {
				const id = speaker.dataset.speaker;
					if (id != value) {
						speaker.classList.add("d-none");
					} else {
						speaker.classList.remove("d-none");
					}
				}
		});
	});

});