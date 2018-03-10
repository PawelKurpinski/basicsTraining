const mainBlock = document.getElementById('one');

const lessClick = document.getElementById('onChange');

mainBlock.classList.add('collapsed');

function lessToggle() {
    mainBlock.classList.add('collapsed');
}

lessClick.addEventListener('click', lessToggle);

const moreClick = document.getElementById('offChange');

mainBlock.classList.remove('collapsed');

function moreToggle() {
    mainBlock.classList.toggle('collapsed');
}

moreClick.addEventListener('click', moreToggle);
