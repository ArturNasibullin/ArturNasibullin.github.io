window.addEventListener('load', function () {

	//Кнопка menu
	let btn = document.querySelector('.header-top-line__burger-btn');
	let menu = document.querySelector('.header-top-line-menu');
	let subMenu = document.querySelectorAll('.header-top-line-submenu');
	let menuItem = document.querySelectorAll('.header-top-line-submenu__link');
	
	btn.addEventListener('click', (e) => {
		e.preventDefault();
		menu.classList.toggle('active');
		menu.style.opacity = 1;
		btn.classList.toggle('active');
		subMenu.forEach(link => {
			link.style.display = 'flex';
		});

		menuItem.forEach(item => {
			item.addEventListener('click', (e) => {
				e.preventDefault();
				btn.classList.remove('active');
				menu.classList.remove('active');
				menu.style.opacity = 0;
				subMenu.forEach(link => {
					link.style.display = 'none';
				});
			});
		});
		//Блокировать прокрутку экрана при активном Меню
		// if (menu.classList.contains('active')) {
		// 	document.body.style.overflow = 'hidden';
		// } else {
		// 	document.body.style.overflow = '';
		// }
	});

	//Анимации на JavaScript для модального окна
	// fadeIn function 
	function fadeIn(el, display) {
		el.style.opacity = 0;
		el.style.display = display || 'block';
		(function fade() {
			var val = parseFloat(el.style.opacity);
			if (!((val += .1) > 1)) {
				el.style.opacity = val;
				requestAnimationFrame(fade);
			}
		})();
	}
	// fadeOut function 
	function fadeOut(el) {
		el.style.opacity = 1;
		(function fade() {
			if ((el.style.opacity -= .1) < 0) {
				el.style.display = 'none';
			} else {
				requestAnimationFrame(fade);
			}
		})();
	}
	// Модальное окно
	let modal = document.querySelector('.modal');
	let modalOpen = document.querySelectorAll('.modal-open');
	let modalClose = document.querySelectorAll('.modal__close');
	let modalOverlay = document.querySelector('.modal__overlay');

	//Открыть модальное окно при клике на кнопки с классом .modal-open
	modalOpen.forEach(mdl => {
		mdl.addEventListener('click', () => {
			fadeIn(modal, 'block');
			document.body.style.overflow = 'hidden';
		});
	});

	//Закрыть модальное окно при клике на крестик
	modalClose.forEach(close => {
		close.addEventListener('click', (event) => {
			event.preventDefault();
			fadeOut(modal);
			document.body.style.overflow = '';
		});
	});
	

	// Закрыть модальное окно при нажатии на клавишу Ecs
	document.addEventListener('keydown', function(event) {
		if (event.code === 'Escape') {
			event.preventDefault();
			fadeOut(modal);
			document.body.style.overflow = '';
		}
	}, false);

	// Закрыть модальное окно при нажатии на подложку
	modalOverlay.addEventListener('click', function(event) {
		if (event.target == modalOverlay) {
			event.preventDefault();
			fadeOut(modal);
			document.body.style.overflow = '';
		}
	});

		// Fixed menu
	function topMenuFixed() {
		let header = document.querySelector('.header-top-line');
		let fixedSpot = 300;

		window.addEventListener("scroll", function() {
			
			let scrollPos = window.pageYOffset;
				if (scrollPos > fixedSpot) {
				header.classList.add('header-top-line--fixed');
				} else {
				header.classList.remove('header-top-line--fixed');
				}
		});
	}
	topMenuFixed();
});