// Loader
window.addEventListener("load", () => {
    document.getElementById("loader").style.display = "none";
});

// Scroll reveal
const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
    const trigger = window.innerHeight * 0.8;
    sections.forEach(sec => {
        if (sec.getBoundingClientRect().top < trigger) {
            sec.classList.add("show");
        }
    });
});
