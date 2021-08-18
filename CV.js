// BEGIN NAV
// scroll header
window.addEventListener("scroll", function () {
    var header = document.getElementById("header");
    header.classList.toggle("sticky", window.scrollY > 0)
})



const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('.header-link .nav li  ')
// console.log(navLi);
window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(sections => {
        const sectionTop = sections.offsetTop;
        const sectionHeight = sections.clientHeight;
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = sections.getAttribute("id");
        }
    })
    // console.log(current);
    navLi.forEach(li => {
        li.classList.remove('active');
        if (li.classList.contains(current)) {
            li.classList.add("active")
        }
    })
})



window.addEventListener("scroll", reveal);
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 150;
        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add("active");
        }
        else {
            reveals[i].classList.remove("active");
        }
    }
}

// END NAV

// toggle nav

var openBtn = document.querySelector(".nav-icon-open");
openBtn.addEventListener("click", function () {
    var navHide = document.querySelector(".header-link-mobile")
    navHide.classList.add("toggle")
    var overlay = document.querySelector(".bg-overlay");
    overlay.classList.add("nav-overlay")

})


var closeBtn = document.querySelector(".nav-icon-close");
closeBtn.addEventListener("click", function () {
    var navHide = document.querySelector(".header-link-mobile")
    navHide.classList.remove("toggle")
    var overlay = document.querySelector(".bg-overlay");
    overlay.classList.remove("nav-overlay")

})


var overlay = document.querySelector(".bg-overlay");
overlay.addEventListener("click", function () {
    overlay.classList.remove("nav-overlay")
    var navHide = document.querySelector(".header-link-mobile")
    navHide.classList.remove("toggle")

})


var navMobile = document.querySelectorAll(".nav-header-mobile")
navMobile.forEach(a => {
    a.addEventListener("click", hideNav)
})
function hideNav() {
    var overlay = document.querySelector(".bg-overlay");
    overlay.classList.remove("nav-overlay")
    var navHide = document.querySelector(".header-link-mobile")
    navHide.classList.remove("toggle")
}


//end toggle nav

// slider skill
var nextBtn = document.querySelector(".skill-chevron-right")
var previousBtn = document.querySelector(".skill-chevron-left")
var skillItem = document.querySelectorAll(".group-skill-item")
console.log(skillItem);
var sliderNumber = 0;
// handle skill next  btn
nextBtn.addEventListener("click", () => {
    skillItem.forEach(item => {
        item.classList.remove("active");
    })
    sliderNumber++;
    if (sliderNumber > skillItem.length - 1) {
        sliderNumber = 0;
    }
    skillItem[sliderNumber].classList.add("active")
})
// handle skill previous  btn
previousBtn.addEventListener("click", () => {
    skillItem.forEach(item => {
        item.classList.remove("active");
    })
    sliderNumber--;
    if (sliderNumber < 0) {
        sliderNumber = skillItem.length - 1;
    }
    skillItem[sliderNumber].classList.add("active")
})
// repeat play slider
var playSlider;
repeat = () => {
    playSlider = setInterval(() => {
        skillItem.forEach(item => {
            item.classList.remove("active");
        })
        sliderNumber++;
        if (sliderNumber > skillItem.length - 1) {
            sliderNumber = 0;
        }
        skillItem[sliderNumber].classList.add("active")
    }, 5000)
}
repeat();

// stop play slider while mouse over
var stopSlider = document.querySelector(".group-skill")
stopSlider.addEventListener("mouseover", () => {
    clearInterval(playSlider)
})
// continue play slider while mouse out
stopSlider.addEventListener("mouseout", () => {
    repeat();
})
// begin scroll smooth
// $(document).ready(function () {
//     // Add smooth scrolling to all links
//     $(".header-link .nav a,.header-link-mobile .nav-mobile li a").click(function (event) {
//         event.preventDefault();
//         part = $(this).attr("href");
//         // console.log(part);
//         position = $(part).offset().top;
//         $('html, body').animate({ scrollTop: position }, 100)
//     })

// });

// active lbl review

