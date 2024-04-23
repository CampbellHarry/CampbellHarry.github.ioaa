/*=============== HDev Group  =============== 

Purpose: Harry Campbell's Portfolio website js code.
Date: 1/1/2024

Copyright (c) 2024 Hdev.uk
===============================================*/

// website head title changer
document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === "visible") {
        updateTitle("Harry Campbell | Portfolio", "/img/H.png");
    } else {
        updateTitle("Welcome to Harry Campbell's Portfolio", "assets/images/favhand.png");
    }
});

if (screen.width > "640px" || window.innerWidth > "640px") {
    const gasp = document.getElementById("gasp");
    gasp.src = "";
}
else {
    const gasp = document.getElementById("gasp");
    gasp.src = "/backend/js/gasp.js";
}


function updateTitle(newTitle, faviconPath) {
    // Fade out effect
    $('title').fadeOut(500, function () {
        document.title = newTitle;
        $("#favicon").attr("href", faviconPath);
    }).fadeIn(500);
}
// website head title changer ends

// reveal animation on assets
window.addEventListener('scroll', function () {
    const revealElements = document.querySelectorAll('.reveal');
    for (let i = 0; i < revealElements.length; i++) {
        const element = revealElements[i];
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight) {
            element.classList.add('active');
        }
    }
});
// reveal animation on assets ends

// typing animation script
if(document.querySelector(".typing-text")){
    var typed = new Typed(".typing-text", {
        strings: ["Full stack development.", "Cyber security.", "Web Development.", "Planning."],
        loop: true,
        typeSpeed: 70,
        backSpeed: 25,
        backDelay: 500,
    });
} else {
    console.warn("Typed.js not loaded, check if the script is loaded in the head tag.");
}
// typing animation script
// Get the element to animate

// check if JS is not turned on by user


// if bottom bar at the very bottom disappear
var bottombar = document.querySelector(".bottombar");

function bottombarappear() {
    if (bottombar){
        if (window.matchMedia("(max-width: 680px)").matches) {
            var scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
            if (scrollPercentage >= 95) {
                bottombar.style.display = "none";
                bottombar.style.animation = "up 1.2s both";
                bottombar.style.transition = "transform 0.5s ease-in-out";
                bottombar.style.transform = "translateY(-100%)";
            } else {
                bottombar.style.display = "block";
            }
        } else {
            bottombar.style.display = "none";
        }
    } else{
        return;
    }
}

window.addEventListener('scroll', bottombarappear);
// if bottom bar at the very bottom disappear

window.addEventListener('scroll', headerchange);

var prevScrollPos = window.pageYOffset || document.documentElement.scrollTop;

function headerchange() {
    var currentScrollPos = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScrollPos < prevScrollPos) {
        // User is scrolling up
        document.getElementById("header").style.display = "block";
        document.getElementById("header").style.opacity = "1";
        document.getElementById("header").style.transform = "translateY(0%)";
        document.getElementById("header").style.backgroundColor = "rgba(255, 255, 255, 1)";
        var headerLinks = document.getElementsByClassName("headera");
        for (var i = 0; i < headerLinks.length; i++) {
            headerLinks[i].style.color = "black";
        }
    } else {
        // User is scrolling down
        if (window.matchMedia("(max-width: 680px)").matches) {
            return; // Don't execute the code if screen width is under 680px
        }
        var scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        if (scrollPercentage >= 10) {
            document.getElementById("header").style.animation = "up 1.2s relitive both";
            document.getElementById("header").style.transition = "transform 0.5s ease-in-out";
            document.getElementById("header").style.backgroundColor = "rgba(255, 255, 255, 0.4)";
            document.getElementById("header").style.transform = "translateY(-10%)";
            var headerLinks = document.getElementsByClassName("headera");
            for (var i = 0; i < headerLinks.length; i++) {
                headerLinks[i].style.color = "white";
            }
        } else {
            document.getElementById("header").style.display = "block";
            document.getElementById("header").style.opacity = "1";
            document.getElementById("header").style.transform = "translateY(0%)";
            document.getElementById("header").style.backgroundColor = "rgba(255, 255, 255, 1)";
            var headerLinks = document.getElementsByClassName("headera");
            for (var i = 0; i < headerLinks.length; i++) {
                headerLinks[i].style.color = "black";
            }
        }
    }
    prevScrollPos = currentScrollPos;
}

window.addEventListener('scroll', headerchange);

// scroller
// time of day
if(document.getElementById('timeofday')){
    var span = document.getElementById('timeofday');
var hour = new Date().getHours();

if (hour >= 5 && hour < 12) {
    span.innerHTML = "Good Morning,";
}
else if (hour >= 12 && hour < 19) {
    span.innerHTML = "Good Afternoon,";
}
else {
    span.innerHTML = "Good Evening,";
}
}
// time of day
// scroll

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll('section');
    const homebar = document.getElementById('homebar');
    const about = document.getElementById('aboutbar');
    const experience = document.getElementById('experiencebar');
    const projects = document.getElementById('projectbar');
    const reviews = document.getElementById('reviewbar');

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    const observer = new IntersectionObserver(function (entries, observer) {
        if (window.innerWidth > 640) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const sectionId = entry.target.getAttribute('id');
                    const sectionElement = document.getElementById(sectionId + 'bar');
                    if (sectionElement) {
                        sectionElement.classList.add('active');
                    }
                } else {
                    const sectionId = entry.target.getAttribute('id');
                    const sectionElement = document.getElementById(sectionId + 'bar');
                    if (sectionElement) {
                        sectionElement.classList.remove('active');
                    }
                }
            });
        }
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    const sectionIds = ['home', 'about', 'skills', 'experience', 'projects', 'certifications', 'reviews'];

    sectionIds.forEach(sectionId => {
        const sectionElement = document.getElementById(sectionId);
        if (sectionElement) {
            const sectionBar = document.getElementById(sectionId + 'bar');
            if (sectionBar) {
                sectionBar.classList.remove('active');
            }
        }
    });
});
// copyrightdate

document.getElementById("copyright").textContent = new Date().getFullYear();

// end of script
console.warn("Made by Harry Campbell"); console.log("https://hdev.uk"); console.log(""); console.log(`
_____     ____
/        \\  |  o | 
|          |/ ___\\| (nom) 
|_________/     
|_|_| |_|_|

`);
