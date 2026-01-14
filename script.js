// Parallax background
window.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    document.querySelector(".hero").style.backgroundPosition =
        `${50 + x}% ${50 + y}%`;
});

// Reveal blocks on scroll
const blocks = document.querySelectorAll(".block");

window.addEventListener("scroll", () => {
    const trigger = window.innerHeight * 0.8;
    blocks.forEach(block => {
        if (block.getBoundingClientRect().top < trigger) {
            block.classList.add("show");
        }
    });
});
