const menuBtn = document.querySelectorAll('.menu-btn');
const menu = document.querySelector('.menu');
const links = document.querySelectorAll('.menu li');

menuBtn.forEach(btn => {
    btn.addEventListener('click', sideNavToggle);
});

function sideNavToggle() {
    let delay = 100;
    menu.classList.toggle('menu-open');

    setTimeout(() => {
        resetAnimations();
    }, delay * (links.length + 1));

    links.forEach(link => {
        link.style.opacity = "0";

        link.style.animation = "slideIn 400ms ease-in-out forwards";

        link.style.animatedDelay = delay + "ms";

        delay += 100;
    });

    function resetAnimations() {
        links.forEach(link => {
            link.style.animation = "none";
            link.style.opacity = "1";
        });
    }
}

const cntrl = document.querySelectorAll('.slider-cntrl');
const cntrlMob = document.querySelectorAll('.pagination-mobile > li');
const title = document.querySelector('.title');
const subTitle = document.querySelectorAll('.sub-title');
const img = document.querySelector('.thumbnail');
const count = document.querySelector('.slider-count');
const progress = document.querySelector('.progress div');

let id = 0;

const images = [
    './img/img1.jpg',
    './img/img2.jpg',
    './img/img3.jpg'
];

const progressWidth = [
    '33%',
    '66%',
    '100%',
];

const text = [
    'Work',
    'Active',
    'Travel',
];

for(let i = 0; i < cntrl.length; i++) {
    cntrl[i].addEventListener('click', () => {
        slider(i);
        id = i;
        stopAutoSlide();
    });

    cntrlMob[i].addEventListener('click', () => {
        slider(i);
        id = i;
        stopAutoSlide();
    });
}

function slider(i) {
    img.src = images[i];
    progress.style.width = progressWidth[i];
    title.innerText = text[i] + " Collection";
    subTitle.forEach(sub => {
        sub.innerText = text[i] + " Collection"
    });

    count.innerText = "/0" + (i + 1);

    for(let i = 0; i < cntrl.length; i++) {
        cntrl[i].classList.remove('active');
        cntrlMob[i].classList.remove('pag-active');
    }

    cntrl[i].classList.add('active');
    cntrlMob[i].classList.add('pag-active');
}

function nextSlide() {
    id++;

    if(id > cntrl.length - 1) {
        id = 0;
    }
    slider(id);
}

let autoSlide = setInterval(nextSlide, 10000);

function stopAutoSlide() {
    clearInterval(autoSlide);

    autoSlide = setInterval(nextSlide, 10000);
}