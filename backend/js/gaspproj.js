import { gsap } from "https://cdn.skypack.dev/gsap";
import { ScrollTrigger } from "https://cdn.skypack.dev/gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.set(".left", { opacity: 0, x: -50 });
gsap.set(".right", { opacity: 0, x: 50 });
gsap.set(".center", { opacity: 0, y: 50 });
gsap.set(".feature", { opacity: 0, y: 50 });

gsap.to(".left", {
    opacity: 1,
    x: 0,
    duration: 2,
    scrollTrigger: {
        trigger: ".left",
        start: "top 80%", // Adjust the start value to control when the animation starts
        end: "bottom 80%",
        scrub: true,
        pin: true, // Keeps the element pinned when scrolling
    },
});
gsap.to(".right", {
    opacity: 1,
    x: 0,
    duration: 2,
    scrollTrigger: {
        trigger: ".right",
        start: "top 80%",
        end: "bottom 80%",
        scrub: true,
        pin: true,
    },
});
gsap.to(".center", {
    opacity: 1,
    y: -10,
    duration: 1,
    scrollTrigger: {
        trigger: ".center",
        start: "top 80%",
        end: "bottom 80%",
        scrub: true,
        pin: true,
    },
});
