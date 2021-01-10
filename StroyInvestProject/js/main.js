//Кнопка menu
window.addEventListener('DOMContentLoaded', () => {
	function menuBtn (btnClass, menuClass, menuLi) {
		let btn = document.querySelector(btnClass);
		let menu = document.querySelector(menuClass);
		let menuItem = document.querySelectorAll(menuLi);

		btn.addEventListener('click', () => {
			menu.classList.toggle('active');
			btn.classList.toggle('active');
			
			menuItem.forEach(item => {
				item.addEventListener('click', () => {
					btn.classList.remove('active');
					menu.classList.remove('active');
				});
			});
		});
	}
	menuBtn('.top-nav__btn', '.top-nav__menu', '.top-nav__menu li');
	menuBtn('.left-sidebar__btn', '.left-sidebar__menu', '.left-sidebar__menu li');

	// Модальное окно
	let modal = document.querySelector('.modal');
	let modalOpen = document.querySelectorAll('.modal-open');
	let modalClose = document.querySelector('.modal__close');
	let modalOverlay = document.querySelector('.modal__overlay');

	//Открыть модальное окно при клике на кнопки с классом .modal-open
	modalOpen.forEach(mdl => {
		mdl.addEventListener('click', (event) => {
			event.preventDefault();
			fadeIn(modal, 'block');
			document.body.style.overflow = 'hidden';
		});
	});

	//Закрыть модальное окно при клике на крестик
	modalClose.addEventListener('click', (event) => {
		event.preventDefault();
		fadeOut(modal);
		document.body.style.overflow = '';
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

	// Открыть модальное окно при прокрутке до конца страницы
	function showModalByScroll () {
		if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
			fadeIn(modal, 'block');
			document.body.style.overflow = 'hidden';
			window.removeEventListener('scroll', showModalByScroll);
		}
	}
	window.addEventListener('scroll', showModalByScroll);



	//Power Range
		var elem = document.querySelector('.calc__range');
		var valueBox = document.getElementById('calc__summ-num');
		var init = new Powerange(elem, {
		hideRange     : true, 
		min           : 100000, 
		max           : 1000000, 
		start         : 100000, 
		step          : 100000, 
		});

		elem.addEventListener('change', () => {
		valueBox.innerText = elem.value.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
		});

		//calc
		let radio = document.querySelectorAll('input[name="programms"]'),
			totalBox = document.querySelector('.calc__total strong'),
			monthlyBox = document.querySelector('.calc__month strong'),
			calcDepens = document.querySelector('.calc__depens span'),
			percent = 0.2,
			money = 100000,
			permonth = 9167,
			month = 6;

		radio.forEach((btn) => {
			btn.addEventListener('change', function () {
				percent = +btn.getAttribute('data-per');
				month = +btn.getAttribute('data-month');
				calcDepens.innerHTML = month;
				result = Math.round(percent / 12 * month * money);
				total = result + money;
				permonth = Math.round(total / 12);
				monthlyBox.innerHTML = permonth.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
				totalBox.innerHTML = total.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
			});
		});

		document.querySelector('.calc__range').addEventListener('change', function () {
			money = +this.value;
			result = Math.round(percent / 12 * month * money);
			total = result + money;
			permonth = Math.round(total / 12);
			monthlyBox.innerHTML = permonth.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
			totalBox.innerHTML = total.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
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


	


});
