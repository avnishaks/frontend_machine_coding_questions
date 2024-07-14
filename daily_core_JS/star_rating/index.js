const starContainer = document.getElementById('star-container');
const output = document.getElementById('output');
let currentRating = 0;

[...Array(5)].forEach((_, index) => {
    const star = document.createElement('span');
    star.innerHTML = '&#9733;';
    star.dataset.index = index;
    star.addEventListener('click', fillStar);
    starContainer.appendChild(star);
});

function fillStar(event) {
    const index = parseInt(event.target.dataset.index);
    if (index === currentRating) {
        currentRating = -1;
        updateStars(-1);
    } else {
        updateStars(index);
        currentRating = index;
    }
}

function updateStars(index) {
    const stars = starContainer.querySelectorAll('span');
    console.log(stars)
    stars.forEach((star, i) => {
        if (i <= index) {
            star.classList.add('active');
        } else {
            star.classList.remove('active');
        }
    });
    output.textContent = `Rating is : ${index + 1}`;
}
