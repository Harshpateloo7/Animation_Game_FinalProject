// variable declarations
let input = document.getElementById('start1');
let circle = document.querySelectorAll('.circle');
let circle1 = document.getElementsByClassName('circle')[0];
let rectangle = document.querySelector('.recangle');
let input1 = document.getElementsByTagName('input');
let mainScore = document.querySelector('.score');
let span = document.querySelector('.scored');
let score = document.querySelector('.score1');
let first = input1[0];
let shapeCount1 = 0;
let shapeCount2 = 0;
let shapeCount3 = 0;
let showStartbutton = true;
let total = Number(span.textContent);

// when click on start button
input.addEventListener('click', startAnim)


function startAnim() {
    rectangle.classList.toggle("start")
    //for two circles
    for (let i = 0; i < circle.length; i++) {

        var computedStyles = window.getComputedStyle(circle1),
            marginLeft = computedStyles.getPropertyValue('margin-left');

        if (marginLeft == '730px') {
            console.log(marginLeft)
            span.textContent = 0;
        }
        circle[i].classList.toggle("start")
        first.setAttribute('disabled', '');
    }
}
//when click on rectangle
rectangle.addEventListener('click', function () {
    if (shapeCount3 == 0) {
        rectangle.classList.toggle('stop')
        shapeCount3 = 2;
        span.textContent = shapeCount1 + shapeCount2 + shapeCount3;
    }

})

//first circle gets clicked
circle[0].addEventListener('click', function () {
    if (shapeCount1 == 0) {
        circle[0].classList.toggle('stop')
        shapeCount1 = 2;
        span.textContent = shapeCount1 + shapeCount2 + shapeCount3;
    }

}, true)

//second circle gets clicked
circle[1].addEventListener('click', function (e) {
    // console.log('cccc')
    if (shapeCount2 == 0) {
        circle[1].classList.toggle('stop')
        shapeCount2 = 2;
        span.textContent = shapeCount1 + shapeCount2 + shapeCount3;
    }

})

// score button gets clicked
score.addEventListener('click', function () {
    mainScore.classList.toggle('block')
})
