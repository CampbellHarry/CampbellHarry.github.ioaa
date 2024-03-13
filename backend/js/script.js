/*=============== HDev Group  =============== 

Purpose: Harry Campbell's Portfolio website js code.
Date: 1/1/2024

Copyright (c) 2024 Hdev.uk
===============================================*/

async function fetchData(url) { // obtains data from json files
    let response = await fetch(url);
    const data = await response.json();
    return data;
}


function showSkills(skills) { // gets the skills from the json file and displays them on the page
    let skillscontainer = document.getElementsByClassName("skillscontainer")[0];
    let skillHTML = "";
    skills.forEach(skill => {
        skillHTML += `
        <div class="skill">
            <div class="skillicon">
                <img src="${skill.icon}" alt="${skill.name}">
            </div>
            <div class="skillname">
                <h2>${skill.name}</h2>
            </div>
            <div class="skillbar">
                <div class="skillbarfill" style="width: ${skill.bar};"></div>
            </div>
        </div>`;
    });
    skillscontainer.innerHTML = skillHTML;
}
//end of skills section json


// no longer in function
/* function showslidythings(slidythings) {
    let slidythingscontainer = document.getElementsByClassName("scroll")[0];
    let slidythingsHTML = "";
    slidythings.forEach(slidything => {
        slidythingsHTML += `
        <div class="scrollcard">
            <div class="namecard">
                <h1>${slidything.title}</h1>
            <div class="discriptioncard">
                <p>${slidything.description}</p>
            </div>
        </div>
        </div>
        `;
});
    slidythingscontainer.innerHTML = slidythingsHTML;
} */

// shows the certifications on the page
function showCertifications(certifications) {
    let certificationscontainer = document.getElementsByClassName("certificationscontainer")[0];
    let certificationHTML = "";
    certifications.forEach(certification => {
        certificationHTML += `
        <div class="certification">
            <div class="certificationname">
                <a href="${certification.url}"><h3>${certification.name}</h3></a>
            </div>
            <div class="school">
                <h4>${certification.school}</h4>
            </div>
            <div class="certificationdate">
                <h4>${certification.dates}</h4>
            </div>
        </div>`;
    });
    certificationscontainer.innerHTML = certificationHTML;
}
// end of certifications section json
// shows the projects on the page

// end of projects section json
// shows the reviews on the page
function showReviews(reviews) {
    let reviewscontainer = document.getElementsByClassName("reviewscontainer")[0];
    let ReviewsHTML = "";
    reviews.forEach(review => {
        ReviewsHTML += `
        <div class="reviewstext">
            <a href="${review.linkedin}" class="reviewa">${review.name}</a>
            <p title="${review.role}">${review.role}</p>
            <date>${review.date}</date>
            <p>"${review.review}" - ${review.name}.</p>
        </div>`;
    });
    reviewscontainer.innerHTML = ReviewsHTML;
}
// end of reviews section json


// loads all of the json files onto the page
document.addEventListener('DOMContentLoaded', async function () {
    const skills = await fetchData("/backend/json/skills.json");
    showSkills(skills);
    const certifications = await fetchData("/backend/json/certs.json");
    showCertifications(certifications);
    const reviews = await fetchData("/backend/json/reviews.json");
    showReviews(reviews);
});


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
var typed = new Typed(".typing-text", {
    strings: ["a Full Stack Developer", "Skilled in Cyber Security", "a Web Developer", "a IT Student", "a skillfull IT support engineer"],
    loop: true,
    typeSpeed: 70,
    backSpeed: 25,
    backDelay: 500,
});


var typed = new Typed(".typing-text1", {
    strings: ["Harry."],
    loop: false,
    typeSpeed: 200,
    backSpeed: 25,
    backDelay: 500,
    showCursor: false
});
// typing animation script
// Get the element to animate

// check if JS is not turned on by user


// if bottom bar at the very bottom disappear
var bottombar = document.querySelector(".bottombar");

function bottombarappear() {
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

// section that the person is on
// header scroll animation ends
/* // scroller
document.addEventListener("DOMContentLoaded", function () {
    const scrollElements = document.querySelectorAll('.scroll');

    let hoverTimeout;

    scrollElements.forEach(element => {
        element.addEventListener('mouseenter', function () {
            hoverTimeout = setTimeout(pauseAllCards, 1000);
        });

        element.addEventListener('mouseleave', function () {
            clearTimeout(hoverTimeout);
            setTimeout(resumeAllCards, 500);
        });
    });

    function pauseAllCards() {
        const scrollCards = document.querySelectorAll('.scrollcard');
        scrollCards.forEach(card => {
            card.classList.add('paused');
        });
    }

    function resumeAllCards() {
        const scrollCards = document.querySelectorAll('.scrollcard');
        scrollCards.forEach(card => {
            card.classList.remove('paused');
        });
    }
});
/not in use
*/

// scroller
// time of day
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
// time of day
// scroll

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll('section');
    const homebar = document.getElementById('homebar'); // Get the element with id "homebar"
    const about = document.getElementById('aboutbar');
    const experience = document.getElementById('experiencebar');
    const projects = document.getElementById('projectbar');
    const certifications = document.getElementById('certificationbar');
    const reviews = document.getElementById('reviewbar');
    const skills = document.getElementById('skillbar');

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
                    if (sectionId === 'home') {
                        homebar.classList.add('active');
                    } else {
                        homebar.classList.remove('active');
                    }
                    if (sectionId === 'about') {
                        about.classList.add('active');
                    } else {
                        about.classList.remove('active');
                    }
                    if (sectionId === 'skills') {
                        skills.classList.add('active');
                    } else {
                        skills.classList.remove('active');
                    }
                    if (sectionId === 'experience') {
                        experience.classList.add('active');
                    } else {
                        experience.classList.remove('active');
                    }
                    if (sectionId === 'projects') {
                        projects.classList.add('active');
                    } else {
                        projects.classList.remove('active');
                    }
                    if (sectionId === 'certifications') {
                        certifications.classList.add('active');
                    } else {
                        certifications.classList.remove('active');
                    }
                    if (sectionId === 'reviews') {
                        reviews.classList.add('active');
                    } else {
                        reviews.classList.remove('active');
                    }
                }
            });
        }
    }, options);

    sections.forEach(section => {
        observer.observe(section);
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

