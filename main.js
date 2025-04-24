const button = document.querySelector('.show-more');
const extraProject = document.querySelector('.extra-projects');
let isOpen = false;

button.addEventListener('click', showMore);

function showMore() {
    extraProject.classList.toggle('visually-hidden');
    extraProject.classList.toggle('open');
    button.textContent = isOpen ? 'Load More' : 'Scroll Up';
    isOpen = !isOpen;
}