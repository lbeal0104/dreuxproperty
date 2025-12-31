(function () {
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");
  const prevBtn = document.querySelector("#prevSlide");
  const nextBtn = document.querySelector("#nextSlide");

  if (!slides.length) return;

  let index = 0;
  let timer = null;
  const intervalMs = 5500;

  function show(i) {
    slides.forEach((s) => s.classList.remove("active"));
    dots.forEach((d) => d.classList.remove("active"));
    index = (i + slides.length) % slides.length;
    slides[index].classList.add("active");
    dots[index].classList.add("active");
  }

  function next(){ show(index + 1); }
  function prev(){ show(index - 1); }

  function start(){
    stop();
    timer = setInterval(next, intervalMs);
  }
  function stop(){
    if (timer) clearInterval(timer);
    timer = null;
  }

  nextBtn?.addEventListener("click", () => { next(); start(); });
  prevBtn?.addEventListener("click", () => { prev(); start(); });

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => { show(i); start(); });
  });

  const slideshow = document.querySelector(".slideshow");
  slideshow?.addEventListener("mouseenter", stop);
  slideshow?.addEventListener("mouseleave", start);

  show(0);
  start();
})();

