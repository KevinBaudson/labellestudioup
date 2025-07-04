const toggleButton = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");

if (toggleButton && navbar) {
  toggleButton.addEventListener("click", () => {
    navbar.classList.toggle("active");
  });


  navbar.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navbar.classList.remove("active");
    });
  });
}


const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
    } else {
      entry.target.classList.remove('animate');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in, .slide-up, .slide-left, .slide-right').forEach(el => {
  observer.observe(el);
});
