const links = document.querySelectorAll('.contents span');
const indicator = document.getElementById('indicator');

function Indicator(e) {
    indicator.style.top = e.offsetTop + 'px';
    indicator.style.width = (e.offsetWidth + 10) + 'px';
    links.forEach(link => {
        link.classList.remove('current');
    });
    e.classList.add('current');
}

links.forEach(link => {
    link.addEventListener('click', () => {
        window.open("https://wongoon.github.io/" + link.getAttribute("id"));
    });

    link.addEventListener('mousemove', (e) => {
        Indicator(e.target);
    });
});