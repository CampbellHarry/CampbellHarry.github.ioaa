async function fetchData(url) {
    let response = await fetch(url);
    const data = await response.json();
    return data;
}

function showSkills(skills) {
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

function showslidythings(slidythings) {
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
}

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
function showProjects(projects) {
    let projectscontainer = document.getElementsByClassName("projectscontainer")[0];
    let ProjectsHTML = "";
    projects.forEach(project => {
        ProjectsHTML += `
        <div class="projectstext">
        <a href="${project.projectlink}" target="_blank"><h2>${project.projectname}</h2></a>
        <h3>${project.projectcompany}</h3>
        <p>${project.projectdiscription}</p>
</div>`;
    });
    projectscontainer.innerHTML = ProjectsHTML;
}
function showReviews(reviews) {
    let reviewscontainer = document.getElementsByClassName("reviewscontainer")[0];
    let ReviewsHTML = "";
    reviews.forEach(review => {
        ReviewsHTML += `
        <div class="reviewstext">
            <a href="${review.linkedin}">${review.name}</a>
            <p title="${review.role}">${review.role}</p>
            <date>${review.date}</date>
            <p>"${review.review}" - ${review.name}.</p>
        </div>`;
    });
    reviewscontainer.innerHTML = ReviewsHTML;
}
document.addEventListener('DOMContentLoaded', async function () {
    const skills = await fetchData("/backend/json/skills.json");
    showSkills(skills);

    const certifications = await fetchData("/backend/json/certs.json");
    showCertifications(certifications);

    const projects = await fetchData("/backend/json/projects.json");
    showProjects(projects);

    const reviews = await fetchData("/backend/json/reviews.json");
    showReviews(reviews);
    const slidythings = await fetchData("/backend/json/sliders.json");
    showslidythings(slidythings);
});

document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === "visible") {
        updateTitle("Harry Campbell | Portfolio", "/img/H.png");
    } else {
        updateTitle("Welcome to Harry Campbell's Portfolio", "assets/images/favhand.png");
    }
});

function updateTitle(newTitle, faviconPath) {
    // Fade out effect
    $('title').fadeOut(500, function () {
        document.title = newTitle;
        $("#favicon").attr("href", faviconPath);
    }).fadeIn(500);
}

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

// typing animation script
var typed = new Typed(".typing-text", {
    strings: ["a Security Engineer", "a cyber-security analyst", "a Web Developer", "an IT student"],
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
// section that the person is on


document.addEventListener('DOMContentLoaded', function() {
    const containerClasses = [
      'aboutcontainer',
      'experiencecontainer',
      'projectscontainer',
      'certificationscontainer',
      'reviewscontainer',
      'contactcontainer',
      'headcontact'
    ];
  
    function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    function isMobile() {
      return window.innerWidth <= 680;
    }
  
    function handleScroll() {
      containerClasses.forEach(containerClass => {
        const elements = document.getElementsByClassName(containerClass);
  
        Array.from(elements).forEach(element => {
          if (isMobile() || isElementInViewport(element)) {
            element.classList.add('visible');
            element.classList.remove('hidden');
          } else {
            element.classList.remove('hidden');
            element.classList.add('hidden');
          }
        });
      });
    }
  
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('DOMContentLoaded', handleScroll); // Check on initial load
    window.addEventListener('resize', handleScroll); // Handle resize events
  });
// section that the person is on
// scroller
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
// scroller
// time of day
var span = document.getElementById('timeofday');
var hour = new Date().getHours();

if (hour < 12) {
    span.innerHTML = "Good Morning,";
}
else if (hour < 17) {
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


// end of script
console.warn("Made by Harry Campbell"); console.log("https://hdev.uk"); console.log(""); console.log(`
_____     ____
/        \\  |  o | 
|          |/ ___\\| (nom) 
|_________/     
|_|_| |_|_|

`);

