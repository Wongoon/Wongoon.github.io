const links = document.querySelectorAll('.contents span');
const indicator = document.getElementById('indicator');
const enter = document.getElementById('enter');

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

enter.addEventListener("keydown", (e) => {
    let current = document.querySelector('.current');
    if (e.keyCode == 13) {
        window.open("https://wongoon.github.io/" + current.getAttribute("id"));
    }
});