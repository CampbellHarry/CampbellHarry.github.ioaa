import { gsap } from "https://cdn.skypack.dev/gsap";
import { ScrollTrigger } from "https://cdn.skypack.dev/gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Animation for the "About" section
const aboutSection = document.querySelector("#about");
const headAbout = document.querySelector(".headabout");
const aboutText = document.querySelector(".abouttext");
const abouttexth3 = document.querySelector(".abouttext h3");
const headskills = document.querySelector(".headskills");
const flexaboutheader = document.querySelector(".skillaroons");
const skillscontainer = document.querySelector(".skillscontainer");
const stats = document.querySelector(".stats");
const experiencecontainer = document.querySelector(".experiencecontainer");
const statinside = document.querySelector(".projectstat h2");

gsap.set(aboutSection, { opacity: 0, y: 50 });
gsap.set(headAbout, { opacity: 0, x: -50 });
gsap.set(aboutText, { opacity: 0, x: 100 });
gsap.set(abouttexth3, { opacity: 0, y: 50 });
gsap.set(headskills, { opacity: 0, y: 50 });
gsap.set(flexaboutheader, { opacity: 0, y: 50 });
gsap.set(stats, { opacity: 0, y: 0 });
gsap.set(statinside, { opacity: 0, y: 0 });
gsap.set(experiencecontainer, { opacity: 0, y: 50 });

gsap.set(".left", { opacity: 0, x: -50 });
gsap.set(".right", { opacity: 0, x: 50 });
gsap.set(".center", { opacity: 0, y: 50 });
gsap.set(".onestat", { opacity: 0, y: 60 });
gsap.set(".twostat", { opacity: 0, y: 70 });

gsap.to(".onestat", {
    opacity: 1,
    y: 0,
    duration: 2,
    scrollTrigger: {
        trigger: ".onestat",
        start: "top 60%",
        end: "bottom 60%",
        scrub: true,
    },
});
gsap.to(".twostat", {
    opacity: 1,
    y: 0,
    duration: 4,
    scrollTrigger: {
        trigger: ".twostat",
        start: "top 60%",
        end: "bottom 60%",
        scrub: true,
    },
});

gsap.to(".left", {
    opacity: 1,
    x: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".left",
        start: "top 100%",
        end: "bottom 40%",
        scrub: true,
    },
});
gsap.to(".right", {
    opacity: 1,
    x: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".right",
        start: "top 100%",
        end: "bottom 40%",
        scrub: true,
    },
});
gsap.to(".center", {
    opacity: 1,
    y: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".center",
        start: "top 100%",
        end: "bottom 40%",
        scrub: true,
    },
});


gsap.to(".stats", {
    opacity: 1,
    duration: 1,
    y: -50,
    scrollTrigger: {
        trigger: ".stats",
        start: "top 100%",
        end: "bottom 20%",
        scrub: true,
    },
});
gsap.to(statinside, {
    opacity: 1,
    duration: 1,
    y: 0,
    scrollTrigger: {
        trigger: statinside,
        start: "top 100%",
        end: "bottom 20%",
        scrub: true,
    },
});
gsap.to("#about", {
    opacity: 1,
    y: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#about",
        start: "top 100%",
        end: "bottom 70%",
        scrub: true,
    },
});

gsap.to(".headabout", {
    opacity: 1,
    x: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".headabout",
        start: "top 100%",
        end: "bottom 70%",
        scrub: true,
    },
});

gsap.to(aboutText, {
    opacity: 1,
    x: 0,
    duration: 1,
    scrollTrigger: {
        trigger: aboutText,
        start: "top 100%",
        end: "bottom 70%",
        scrub: true,
    },
});
gsap.to(abouttexth3, {
    opacity: 1,
    y: 0,
    duration: 8,
    scrollTrigger: {
        trigger: abouttexth3,
        start: "top 80%",
        end: "bottom 70%",
        scrub: true,
    },
});
gsap.to(headskills, {
    opacity: 1,
    y: 10,
    duration: 1,
    scrollTrigger: {
        trigger: headskills,
        start: "top 100%",
        end: "bottom 60%",
        scrub: true,
    },
});
gsap.to(skillscontainer, {
    opacity: 1,
    duration: 5,
    scrollTrigger: {
        trigger: skillscontainer,
        start: "top 100%",
        end: "bottom 60%",
        scrub: true,
        stagger: 0.2,
    },
});
gsap.to(experiencecontainer, {
    opacity: 1,
    y: 0,
    duration: 1,
    scrollTrigger: {
        trigger: experiencecontainer,
        start: "top 100%",
        end: "bottom 60%",
        scrub: true,
    },
});
gsap.to(".experiencetext", {
    opacity: 1,
    y: 20,
    duration: 1,
    scrollTrigger: {
        trigger: ".experiencetext",
        start: "top 100%",
        end: "bottom 20%",
        scrub: true,
    },
});
gsap.set(".experiencetext h2", { opacity: 0, y: 50 });
gsap.to(".experiencetext h2", {
    opacity: 1,
    y: 0,
    duration: 3,
    scrollTrigger: {
        trigger: ".experiencetext",
        start: "top 100%",
        end: "bottom 60%",
        scrub: true,
    },
});
gsap.set(".experiencetext h3", { opacity: 0, x: 50 });
gsap.to(".experiencetext h3", {
    opacity: 1,
    x: 0,
    duration: 3,
    scrollTrigger: {
        trigger: ".experiencetext",
        start: "top 80%",
        end: "bottom 60%",
        scrub: true,
    },
});
gsap.set(".experiencetext p", { opacity: 0, x: -50 });
gsap.to(".experiencetext p", {
    opacity: 1,
    x: 0,
    duration: 3,
    scrollTrigger: {
        trigger: ".experiencetext",
        start: "top 65%",
        end: "bottom 50%",
        scrub: true,
    },
});
gsap.set(".alpha", { opacity: 0, x: -50 });
gsap.to(".alpha", {
    opacity: 1,
    x: 0,
    duration: 3,
    scrollTrigger: {
        trigger: ".alpha",
        start: "top 100%",
        end: "bottom 20%",
        scrub: true,
    },
});
gsap.set(".alpha h2", { opacity: 0, y: 50 });
gsap.to(".alpha h2", {
    opacity: 1,
    y: 0,
    duration: 6,
    scrollTrigger: {
        trigger: ".alpha",
        start: "top 100%",
        end: "bottom 20%",
        scrub: true,
    },
});
gsap.set(".bravo", { opacity: 0, x: 50 });
gsap.to(".bravo", {
    opacity: 1,
    x: 0,
    duration: 3,
    scrollTrigger: {
        trigger: ".bravo",
        start: "top 70%",
        end: "bottom 60%",
        scrub: true,
    },
});
gsap.set(".bravo h2", { opacity: 0, y: 50 });
gsap.to(".bravo h2", {
    opacity: 1,
    y: 0,
    duration: 6,
    scrollTrigger: {
        trigger: ".bravo",
        start: "top 65%",
        end: "bottom 60%",
        scrub: true,
    },
});
gsap.set(".certificationscontainer", { opacity: 0, y: 50 });
gsap.to(".certificationscontainer", {
    opacity: 1,
    y: 0,
    duration: 6,
    scrollTrigger: {
        trigger: ".certificationscontainer",
        start: "top 100%",
        end: "bottom 20%",
        scrub: true,
    },
});
gsap.set(".reviewscontainer", { opacity: 0, x: 50 });
gsap.to(".reviewscontainer", {
    opacity: 1,
    x: 0,
    duration: 6,
    scrollTrigger: {
        trigger: ".reviewscontainer",
        start: "top 100%",
        end: "bottom 60%",
        scrub: true,
    },
});
gsap.set(".fromtop", { opacity: 0, x: -50 });
gsap.to(".fromtop", {
    opacity: 1,
    x: 0,
    duration: 6,
    scrollTrigger: {
        trigger: ".fromtop",
        start: "top 100%",
        end: "bottom 60%",
        scrub: true,
    },
});
gsap.set(".frombottom", { opacity: 0, x: 50 });
gsap.to(".frombottom", {
    opacity: 1,
    x: 0,
    duration: 6,
    scrollTrigger: {
        trigger: ".frombottom",
        start: "top 100%",
        end: "bottom 60%",
        scrub: true,
    },
});
