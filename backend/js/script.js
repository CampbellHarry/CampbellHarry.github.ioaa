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
        <a href="${project.projectlink}"><h2>${project.projectname}</h2></a>
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
            <p>${review.review}</p>
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
    strings: ["Harry,"],
    loop: false,
    typeSpeed: 200,
    backSpeed: 25,
    backDelay: 500,
    showCursor: false
});
// typing animation script
// Get the element to animate
// onthe section 
var section = document.querySelector("section");
var home = document.querySelector(".home");
var skills = document.querySelector(".skills");
var experience = document.querySelector(".experience");
var certifications = document.querySelector(".certifications");
var reviews = document.querySelector(".reviews");

// if they are on that section display for bottom menu blue circle
function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight)
    );
}

function bluecircle() {
    if (isElementInViewport(home)) {
        document.getElementById("home").style.backgroundColor = "#2c3e50";
    } else {
        document.getElementById("home").style.backgroundColor = "#1abc9c";
    }
    if (isElementInViewport(skills)) {
        document.getElementById("skills").style.backgroundColor = "#2c3e50";
    } else {
        document.getElementById("skills").style.backgroundColor = "#1abc9c";
    }
    if (isElementInViewport(experience)) {
        document.getElementById("experience").style.backgroundColor = "#2c3e50";
    } else {
        document.getElementById("experience").style.backgroundColor = "#1abc9c";
    }
    if (isElementInViewport(certifications)) {
        document.getElementById("certifications").style.backgroundColor = "#2c3e50";
    } else {
        document.getElementById("certifications").style.backgroundColor = "#1abc9c";
    }
    if (isElementInViewport(reviews)) {
        document.getElementById("reviews").style.backgroundColor = "#2c3e50";
    } else {
        document.getElementById("reviews").style.backgroundColor = "#1abc9c";
    }
}

window.addEventListener('scroll', bluecircle);


// if bottom bar at the very bottom disappear
var bottombar = document.querySelector(".bottombar");

function bottombarappear() {
    if (window.matchMedia("(max-width: 680px)").matches) {
        var scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        if (scrollPercentage >= 99) {
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
