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
        start: "top 60%",
        end: "bottom 60%",
        scrub: true,
    },
});
gsap.to(".right", {
    opacity: 1,
    x: 0,
    duration: 2,
    scrollTrigger: {
        trigger: ".right",
        start: "top 60%",
        end: "bottom 60%",
        scrub: true,
    },
});
gsap.to(".center", {
    opacity: 1,
    y: -10,
    duration: 1,
    scrollTrigger: {
        trigger: ".center",
        start: "top 70%",
        end: "bottom 60%",
        scrub: true,
    },
});
gsap.to(".feature", {
    opacity: 1,
    y: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".feature",
        start: "top 60%",
        end: "bottom 60%",
        scrub: true,
        stagger: 0.5, // Adjust the stagger value to control the delay between each element
    },
});
gsap.to(".feature", {
    opacity: 1,
    y: 0,
    duration: 4,
    scrollTrigger: {
        trigger: ".feature",
        start: "top 60%",
        end: "bottom 60%",
        scrub: true,
    },
});
gsap.set(".midsection h2", { opacity: 0, x: 50 });
gsap.to(".midsection h2", {
    opacity: 1,
    x: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".midsection h2",
        start: "top 60%",
        end: "bottom 60%",
        scrub: true,
    },
});
gsap.set(".developmentleft", { opacity: 0, y: -50 });
gsap.to(".developmentleft", {
    opacity: 1,
    y: 0,
    duration: 2,
    scrollTrigger: {
        trigger: ".developmentleft",
        start: "top 60%",
        end: "bottom 60%",
        scrub: true,
    },
});
gsap.set(".developmentright", { opacity: 0, y: 50 });
gsap.to(".developmentright", {
    opacity: 1,
    y: 0,
    duration: 2,
    scrollTrigger: {
        trigger: ".developmentright",
        start: "top 60%",
        end: "bottom 60%",
        scrub: true,
    },
});
gsap.set("#cloud", { opacity: 0, x: 50 });
gsap.to("#cloud", {
    opacity: 1,
    x: 0,
    duration: 2,
    scrollTrigger: {
        trigger: "#cloud",
        start: "top 60%",
        end: "bottom 60%",
        scrub: true,
    },
});
gsap.set("#cloud h2", { opacity: 0, y: -50 });
gsap.to("#cloud h2", {
    opacity: 1,
    y: 0,
    duration: 2,
    scrollTrigger: {
        trigger: "#cloud h2",
        start: "top 60%",
        end: "bottom 60%",
        scrub: true,
    },
});
gsap.set("#security", { opacity: 0, x: -50 });
gsap.to("#security", {
    opacity: 1,
    x: 0,
    duration: 2,
    scrollTrigger: {
        trigger: "#security",
        start: "top 60%",
        end: "bottom 60%",
        scrub: true,
    },
});
gsap.set("#security h2", { opacity: 0, y: -50 });
gsap.to("#security h2", {
    opacity: 1,
    y: 0,
    duration: 2,
    scrollTrigger: {
        trigger: "#security",
        start: "top 60%",
        end: "bottom 60%",
        scrub: true,
    },
});
gsap.set("#account", { opacity: 0, x: 50 });
gsap.to("#account", {
    opacity: 1,
    x: 0,
    duration: 2,
    scrollTrigger: {
        trigger: "#account",
        start: "top 60%",
        end: "bottom 60%",
        scrub: true,
    },
});
gsap.set("#account h2", { opacity: 0, y: -50 });
gsap.to("#account h2", {
    opacity: 1,
    y: 0,
    duration: 2,
    scrollTrigger: {
        trigger: "#account",
        start: "top 60%",
        end: "bottom 60%",
        scrub: true,
    },
});
gsap.set("#moderation", { opacity: 0, x: -50 });
gsap.to("#moderation", {
    opacity: 1,
    x: 0,
    duration: 2,
    scrollTrigger: {
        trigger: "#moderation",
        start: "top 60%",
        end: "bottom 60%",
        scrub: true,
    },
});
gsap.set("#moderation h2", { opacity: 0, y: -50 });
gsap.to("#moderation h2", {
    opacity: 1,
    y: 0,
    duration: 2,
    scrollTrigger: {
        trigger: "#moderation",
        start: "top 60%",
        end: "bottom 60%",
        scrub: true,
    },
});
gsap.set("#ui", { opacity: 0, y: 50 });
gsap.to("#ui", {
    opacity: 1,
    y: 0,
    duration: 2,
    scrollTrigger: {
        trigger: "#ui",
        start: "top 60%",
        end: "bottom 60%",
        scrub: true,
    },
});
gsap.set("#ui h2", { opacity: 0, y: -50 });
gsap.to("#ui h2", {
    opacity: 1,
    y: 0,
    duration: 2,
    scrollTrigger: {
        trigger: "#ui",
        start: "top 60%",
        end: "bottom 60%",
        scrub: true,
    },
});