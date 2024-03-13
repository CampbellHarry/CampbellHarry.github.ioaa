var typed = new Typed(".typesecuresync", {
    strings: ["SecureSync"],
    loop: false,
    typeSpeed: 200,
    backSpeed: 25,
    backDelay: 500,
    showCursor: false
});
var typed = new Typed(".typer2", {
    strings: ["Seamless. Secure. Synced. Your files, safeguarded with SecureSync."],
    loop: false,
    typeSpeed: 60,
    backSpeed: 25,
    backDelay: 500,
    showCursor: false
});

if (screen.width > 640) {
    const gasp = document.getElementById("gasp");
    gasp.src = " ";
}
else {
    const gasp = document.getElementById("gasp");
    gasp.src = "/backend/js/gasp.js";
}