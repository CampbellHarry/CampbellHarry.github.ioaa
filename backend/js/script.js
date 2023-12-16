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
document.addEventListener('DOMContentLoaded', async function () {
    const skills = await fetchData("/backend/json/skills.json");
    showSkills(skills);

    const certifications = await fetchData("/backend/json/certs.json");
    showCertifications(certifications);

    const projects = await fetchData("/backend/json/projects.json");
    showProjects(projects);
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

function show() {
    let element = document.getElementsByClassName("nav2")[0];
    if (window.getComputedStyle(element).display === "none") {
        element.style.display = "block";
        console.log("loaded");
    } else {
        element.style.display = "none";
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    hamburger.addEventListener('click', show);
});