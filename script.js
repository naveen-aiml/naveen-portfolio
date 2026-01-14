// Scroll reveal animation
const blocks = document.querySelectorAll(".block");

const revealOnScroll = () => {
  blocks.forEach(block => {
    const top = block.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (top < windowHeight - 100) {
      block.classList.add("show");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
