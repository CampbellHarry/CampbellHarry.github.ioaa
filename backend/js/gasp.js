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

gsap.set(".left", { opacity: 0, x: -50 });
gsap.set(".right", { opacity: 0, x: 50 });
gsap.set(".center", { opacity: 0, y: 50 });

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
