const modalButton = document.querySelectorAll('.more');
const modal = document.querySelector('.modal');
const overlay = modal.querySelector('.overlay');
const closeButton = modal.querySelector('.modal__close');



function elemListener(elem) {
	elem.addEventListener('click', () => {
		modal.classList.toggle('hidden');
	})
}


modalButton.forEach((btn) => {
	elemListener(btn);
})

elemListener(overlay);
elemListener(closeButton);