const tabButtons = document.querySelectorAll('.design-list__item');
const tabDescriptions = document.querySelectorAll('.design__descr');
const tabImages = document.querySelectorAll('.design-images');
const tabFeatureImages = document.querySelectorAll('.feature__img');
const tabTitle = document.querySelectorAll('.design__title');


function changeContent(array, value) {
	array.forEach((elem) => {
		if (elem.dataset.tabsField === value) {
			elem.classList.remove('hidden');
		} else {
			elem.classList.add('hidden');
		}

	});
}


tabTitle.forEach((elem) => {
	if (elem.classList.contains('design__title') && !elem.classList.contains('hidden')) {
		document.title = elem.innerText;
	}
});



tabButtons.forEach((tabButton) => {
	tabButton.addEventListener('click', (event) => {

		const dataValue = tabButton.dataset.tabsHandler;

		changeContent(tabImages, dataValue)
		changeContent(tabDescriptions, dataValue)
		changeContent(tabFeatureImages, dataValue)
		changeContent(tabTitle, dataValue)

		tabTitle.forEach((title) => {
			if (title.dataset.tabsField === dataValue) {
				document.title = title.textContent;
			}
		})

		tabButtons.forEach((btn) => {
			if (btn === event.target) {
				btn.classList.add('design-list__item_active');
			} else {
				btn.classList.remove('design-list__item_active');
			}
		})


	});
});