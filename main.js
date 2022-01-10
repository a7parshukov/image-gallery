const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Make array of images */
const imageArray = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

/* Looping through images */
for (let image of imageArray) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${image}`);
    thumbBar.appendChild(newImage);
}

/* Listener for change big image */
thumbBar.addEventListener('click', e => {
    const clickImage = e.target.getAttribute('src');
    displayedImage.setAttribute('src', clickImage);
})

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
    if(btn.getAttribute('class') === 'dark') {
        btn.setAttribute('class', 'light');
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
        btn.textContent = 'Lighten';
    } else if (btn.getAttribute('class') !== 'dark') {
        btn.setAttribute('class', 'dark');
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
        btn.textContent = 'Darken';
    }
})