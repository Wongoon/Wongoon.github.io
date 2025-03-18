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

function GoToLink(link) {
    let id = link.getAttribute("id");
    if (id != "Blog") {
        window.open("https://wongoon.github.io/" + id);
    }
    else {
        window.alert("미완성");
    }
}

links.forEach(link => {
    link.addEventListener('click', () => {
        GoToLink(link);
    });

    link.addEventListener('mousemove', (e) => {
        Indicator(e.target);
    });
});

enter.addEventListener("keydown", (e) => {
    let current = document.querySelector('.current');
    if (e.key == "Enter") {
        GoToLink(current);
    }
});