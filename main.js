let showCase = document.querySelector(".showcase");
let imgs = document.querySelectorAll(".sell .card .imgs");
// let sell = document.querySelector('.sell')
let feedback = document.querySelector(".feedback");

showcase(showCase);

imgs.forEach((card) => carousel(card));

carousel(feedback);

function showcase(document) {
  let sliders = document.querySelectorAll(".carousel__slide");
  let sliderTrack = document.querySelector(".carousel__track");
  let nextBtn = document.querySelector(".next__btn");
  let previousBtn = document.querySelector(".previous__btn");

  let navigator = document.querySelector(".carousel__navigator");

  let widthSize = sliders[0].getBoundingClientRect().height;
  let currentSlider, nextSlider, previousSlider;

  sliders.forEach((element, index) => {
    element.style.bottom = widthSize * index + "px";
    navigator.insertAdjacentHTML(
      "afterbegin",
      '<button class="navigator__btn"></button>'
    );
  });
  navigator.firstChild.classList.add("current__slide");
  let dots = Array.from(navigator.children);

  function moveTarget(currentSlider, targetSlider) {
    sliderTrack.style.transform =
      "translateY(" + targetSlider.style.bottom + ")";
    currentSlider.classList.remove("current__slide");
    targetSlider.classList.add("current__slide");
  }
  function updateDot(currentDot, targetDot) {
    currentDot.classList.remove("current__slide");
    targetDot.classList.add("current__slide");
  }

  nextBtn.addEventListener("click", () => {
    currentSlider = document.querySelector(".current__slide");
    nextSlider = currentSlider.nextElementSibling;
    moveTarget(currentSlider, nextSlider);
    updateDot(
      navigator.querySelector(".current__slide"),
      navigator.querySelector(".current__slide").nextElementSibling
    );

    hide(
      Array.from(sliderTrack.children).findIndex((dot) => dot == nextSlider)
    );
  });

  previousBtn.addEventListener("click", () => {
    currentSlider = document.querySelector(".current__slide");
    previousSlider = currentSlider.previousElementSibling;
    moveTarget(currentSlider, previousSlider);
    updateDot(
      navigator.querySelector(".current__slide"),
      navigator.querySelector(".current__slide").previousElementSibling
    );
    hide(
      Array.from(sliderTrack.children).findIndex((dot) => dot == previousSlider)
    );
  });
  function hide(index) {
    if (index == 0) {
      nextBtn.classList.remove("hidden");
      previousBtn.classList.add("hidden");
    } else if (index == dots.length - 1) {
      nextBtn.classList.add("hidden");
      previousBtn.classList.remove("hidden");
    } else {
      nextBtn.classList.remove("hidden");
      previousBtn.classList.remove("hidden");
    }
  }

  navigator.addEventListener("click", (e) => {
    if (!e.target.closest("button")) return;

    let targetDot = e.target.closest("button");
    let currentSlide = sliderTrack.querySelector(".current__slide");
    let currentDot = navigator.querySelector(".current__slide");
    let targetIndex = dots.findIndex((dot) => dot === targetDot);

    moveTarget(currentSlide, sliders[targetIndex]);

    updateDot(currentDot, targetDot);
    hide(targetIndex);
  });
}

function carousel(document) {
  let sliders = document.querySelectorAll(
    "." +
      document.classList[0] +
      "> .carousel> .carousel__track--container> .carousel__track> .carousel__slide"
  );
  let sliderTrack = document.querySelector(
    "." +
      document.classList[0] +
      "> .carousel> .carousel__track--container> .carousel__track"
  );
  let nextBtn = document.querySelector(
    "." + document.classList[0] + "> .carousel> .next__btn"
  );
  let previousBtn = document.querySelector(
    "." + document.classList[0] + "> .carousel> .previous__btn"
  );

  let navigator = document.querySelector(
    "." + document.classList[0] + "> .carousel> .carousel__navigator"
  );
  let widthSize = sliders[0].getBoundingClientRect().width;
  let currentSlider, nextSlider, previousSlider;

  sliders.forEach((element, index) => {
    element.style.left = widthSize * index + "px";
    navigator.insertAdjacentHTML(
      "afterbegin",
      '<button class="navigator__btn"></button>'
    );
  });
  navigator.firstChild.classList.add("current__slide");
  let dots = Array.from(navigator.children);

  function moveTarget(currentSlider, targetSlider) {
    sliderTrack.style.transform =
      "translateX(-" + targetSlider.style.left + ")";
    currentSlider.classList.remove("current__slide");
    targetSlider.classList.add("current__slide");
  }
  function updateDot(currentDot, targetDot) {
    currentDot.classList.remove("current__slide");
    targetDot.classList.add("current__slide");
  }

  nextBtn.addEventListener("click", () => {
    currentSlider = document.querySelector(".current__slide");
    nextSlider = currentSlider.nextElementSibling;
    moveTarget(currentSlider, nextSlider);
    updateDot(
      navigator.querySelector(".current__slide"),
      navigator.querySelector(".current__slide").nextElementSibling
    );

    hide(
      Array.from(sliderTrack.children).findIndex((dot) => dot == nextSlider)
    );
  });

  previousBtn.addEventListener("click", () => {
    currentSlider = document.querySelector(".current__slide");
    previousSlider = currentSlider.previousElementSibling;
    moveTarget(currentSlider, previousSlider);
    updateDot(
      navigator.querySelector(".current__slide"),
      navigator.querySelector(".current__slide").previousElementSibling
    );
    hide(
      Array.from(sliderTrack.children).findIndex((dot) => dot == previousSlider)
    );
  });
  function hide(index) {
    if (index == 0) {
      nextBtn.classList.remove("hidden");
      previousBtn.classList.add("hidden");
    } else if (index == dots.length - 1) {
      nextBtn.classList.add("hidden");
      previousBtn.classList.remove("hidden");
    } else {
      nextBtn.classList.remove("hidden");
      previousBtn.classList.remove("hidden");
    }
  }

  navigator.addEventListener("click", (e) => {
    if (!e.target.closest("button")) return;

    let targetDot = e.target.closest("button");
    let currentSlide = sliderTrack.querySelector(".current__slide");
    let currentDot = navigator.querySelector(".current__slide");
    let targetIndex = dots.findIndex((dot) => dot === targetDot);

    moveTarget(currentSlide, sliders[targetIndex]);

    updateDot(currentDot, targetDot);
    hide(targetIndex);
  });
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
