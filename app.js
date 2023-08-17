
const mainImg = document.querySelector('#main-img');
const starbucksTxt = document.querySelector('#starbucks-text');
const learnMore = document.querySelector('#learn-more');
const circle = document.querySelector('#circle');

const socialBtns = document.querySelector('.social');

const cup1 = document.querySelector('#cup1');
const cup2 = document.querySelector('#cup2');
const cup3 = document.querySelector('#cup3');

const toggleMenu = document.querySelector('.toggle');



cup1.addEventListener('click', function () {
    mainImg.src = "./images/frappuccino-drink-chocolate-starbucks.png";
    starbucksTxt.style.color = '#016241';
    learnMore.style.backgroundColor = '#0E382C';
    circle.style.backgroundColor = '#0E382C';
    socialBtns.style.backgroundColor = '#0E382C';

})

cup2.addEventListener('click', function () {
    mainImg.src = "./images/tea-coffee-drink-starbucks-latte.png";
    starbucksTxt.style.color = '#eb7495';
    learnMore.style.backgroundColor = '#bd3e61';
    circle.style.backgroundColor = '#bd3e61';
    socialBtns.style.backgroundColor = '#bd3e61';
})

cup3.addEventListener('click', function () {
    mainImg.src = "./images/frappuccino-drink-latte-starbucks-unicorn.png";

    // starbucksTxt.style.color = '#a5207c';
    starbucksTxt.style.color = '#a34a89';
    learnMore.style.backgroundColor = '#a5207c';
    circle.style.backgroundColor = '#a5207c';
    socialBtns.style.backgroundColor = '#a5207c';
    // circle.style.backgroundColor = '#d752b1';
})



toggleMenu.addEventListener('click', function () {
    document.querySelector(".toggle").classList.toggle("active");
    document.querySelector(".navigation").classList.toggle("active");
}
)