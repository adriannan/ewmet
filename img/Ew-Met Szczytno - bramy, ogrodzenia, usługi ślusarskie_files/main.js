// alert('ok')

const sliders = [{
        image: "img/bckg.jpg",
        txt: "ogrodzeń"
    },
    {
        image: "img/bckg2.jpg",
        txt: "bram"
    },
    {
        image: "img/bckg4.jpg",
        txt: "balustrad"
    }
]

const img = document.querySelector('img.slider__img');
const h1 = document.querySelector('h1.slider__tit--act');
const dots = [...document.querySelectorAll('.dots span')]

let time = 3000;
let active = 0;

const changeDot = () => {
    const activeDot = dots.findIndex((dot) => dot.classList.contains('active'));
    dots[activeDot].classList.remove('active')
    dots[active].classList.add('active')
}

const setSlide = (setAct) => {
    img.src = sliders[setAct].image;
    h1.textContent = sliders[setAct].txt;
}
const resetInterval = () => {
    clearInterval(slideInterval);
    slideInterval = setInterval(changeSlide, time);
}

const changeSlide = () => {
    active++;
    if (active === sliders.length) active = 0
    setSlide(active)
    changeDot();
}

// change slide with key
const keyChangeSlide = (e) => {
    if (e.keyCode === 37) {
        active--;
        if (active === -1) active = sliders.length - 1;
    } else if (e.keyCode === 39) {
        active++;
        if (active === sliders.length) active = 0;
    }
    setSlide(active)
    changeDot();
    resetInterval();
}

// change slide with dots 
dots.forEach((dot) => {
    dot.addEventListener('click', (chooseDot) => {
        dots.forEach((dot) => {
            dot.classList.remove('active')
        })
        dot.classList.add('active');
        const act = dots.findIndex((dot) => dot.classList.contains('active'));
        active = act;
        setSlide(act)
        resetInterval();
    })
})

let slideInterval = setInterval(changeSlide, time);

window.addEventListener('keydown', keyChangeSlide)