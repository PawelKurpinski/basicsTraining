const less = document.getElementById('change');

const moreToggle = document.getElementById('one');

less.classList.add('collapsed');

function lessToggle() {
    moreToggle.classList.toggle('collapsed');
}

less.addEventListener('click', lessToggle);
