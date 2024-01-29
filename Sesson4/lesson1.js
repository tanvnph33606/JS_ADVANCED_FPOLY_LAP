"use strict";

const btnsOpenModel = document.querySelectorAll(".btn--open-modal");
const btnCloseModal = document.querySelector(".btn--close-modal");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const nav = document.querySelector(".nav");

const openModal = function (e) {
  e.preventDefault();

  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function (e) {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// 2.
btnsOpenModel.forEach((btn) => btn.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) closeModal();
});

document
  .querySelector(".header")
  .insertAdjacentHTML(
    "beforeend",
    '<div class="cookie-message">(OTHER) We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">OK! Close message</button></div>'
  );

document
  .querySelector(".btn--close-cookie")
  .addEventListener("click", function (e) {
    console.log(e.target);
    document.querySelector(".cookie-message").remove();
  });
message.style.backgroundColor = "#37383d";

document.querySelector(".nav__logo").style.height = "45px";

// console.log(message.style.height);

// console.log(message.style.backgroundColor);

console.log(getComputedStyle(message).height);

const height = Number.parseInt(getComputedStyle(message).height);
console.log(height);

message.style.setProperty("height", height + 40 + "px");
// Here, property names are the USUAL names, without camelCase!
message.style.setProperty("font-size", "17px");

document.documentElement.style.setProperty("--color-primary", "orangered");

const logo = document.querySelector(".nav__logo");

// console.log(logo.alt);
// console.log(logo.src);
// console.log(logo.id);
// console.log(logo.className);

const link = document.querySelector(".twitter-link");
// console.log(link.target);
// console.log(link.href);

// And we can also SET these attributes using these element properties
logo.alt = "Beautiful minimalist logo design";

console.log(logo.instructor);

console.log(logo.getAttribute("instructor"));

// Or we can SET attributes
logo.setAttribute("course", "javascript");

// console.log(logo.getAttribute("src"));

// console.log(link.getAttribute("href"));

console.log(logo.dataset.author);
// When there are hyphens, the property names becomes camelCase, just like CSS property names
console.log(logo.dataset.logoColor);

document.querySelector(".header__img").className = "btn";

document.querySelector(".header__img").classList.add("btn", "modal");

console.log(document.querySelector(".header__img").classList.contains("modal"));

document.querySelector(".nav__logo").style.height = "45px";

const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

btnScrollTo.addEventListener("click", function (e) {
  const s1Coordinates = section1.getBoundingClientRect();
  console.log(s1Coordinates);

  console.log(e.target.getBoundingClientRect());

  console.log(
    "Current scroll position (X/Y):",
    window.pageXOffset,
    window.pageYOffset
  );

  console.log(
    "Height/width of viewport",
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  // 2.
  window.scrollTo(s1Coordinates.left, s1Coordinates.top);
  window.scrollTo({
    top: s1Coordinates.top,
    left: s1Coordinates.left,
    behavior: "smooth",
  });

  window.scrollBy({ top: 200, behavior: "smooth" });

  section1.scrollIntoView({ behavior: "smooth" });
});

const h1 = document.querySelector("h1");

h1.onmouseenter = function (e) {
  alert("onmouseenter: Great, you are reading our heading 😃");
};

h1.addEventListener("mouseenter", function (e) {
  this.style.color = "red";
});

h1.onmouseenter = function (e) {
  this.style.fontSize = "80px";
};

const alertH1 = function () {
  alert("addEventListener: Great, you are reading our heading 😃");
};
h1.addEventListener("mouseenter", alertH1);

setTimeout(() => {
  h1.removeEventListener("mouseenter", alertH1);
}, 5000);

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
  `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

document.querySelector(".nav__link").addEventListener("click", function (e) {
  // 2.
  this.style.backgroundColor = randomColor();

  console.log("LINK", e.target.className, e.currentTarget.className);
});

document.querySelector(".nav__links").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  // console.log('CONTAINER', e.target);
  console.table("CONTAINER", e.target.className, e.currentTarget.className);
  console.log(e.timeStamp);

  // e.stopPropagation();
});

document.querySelector(".nav").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  // console.log('NAVIGATION', e.target);
  console.log("NAVIGATION", e.target.className, e.currentTarget.className);
  console.log(e.timeStamp);
});

document.querySelector(".header").addEventListener(
  "click",
  function (e) {
    this.style.backgroundColor = randomColor();
    // console.log('HEADER', e.target);
    console.log("HEADER", e.target.className, e.currentTarget.className);
  }

  // 7.
  // true,
);

const allLinks = document.querySelectorAll(".nav__link");

allLinks.forEach((el) =>
  el.addEventListener("click", function (e) {
    e.preventDefault();

    // Next, we need to get the href attribute. We can get it from the current element to which the element is attached to
    const id = this.getAttribute("href");

    // Finally, we just need to select the element with this ID, and scroll smoothly to it
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  })
);

document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();

  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");

    if (id !== "#")
      document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

const h1 = document.querySelector("h1");

// console.log(h1.querySelectorAll(".highlight"));

h1.firstElementChild.style.color = "white";
h1.lastElementChild.style.color = "black";

// console.log(h1.parentNode);
// console.log(h1.parentElement);

h1.closest(".header").style.backgroundImage = "var(--gradient-secondary)";

h1.closest(h1).style.backgroundImage = "var(--gradient-secondary)";

// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// console.log(h1.previousSibling);
// console.log(h1.nextSibling);

console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach((el) => {
  // We can do comparisons with elements, and it works as expected!
  if (el !== h1) el.style.transform = "scale(0.5)";
});

//////////////////////////////////////////////////////////////////
// And now just as a fun demo, let's see how it can be necessary to find elements RELATIVE to a selected element

document.body.addEventListener("mouseover", function (e) {
  const current = e.target;

  // Select all CHILD button elements
  current
    .querySelectorAll("button")
    .forEach((btn) => (btn.style.background = "var(--gradient-secondary)"));

  // Select closest section element
  const section = current.closest(".section");
  // const section = current.parentElement;
  // It won't work like this. That's why we REALLY need closest!

  if (section) {
    section.style.background = "var(--gradient-primary)";

    // Select siblings of current section
    section.previousElementSibling.style.background = "black";
    section.nextElementSibling.style.background = "black";
  }
});

const tabs = document.querySelectorAll(".operations__tab");
const tabsContent = document.querySelectorAll(".operations__content");
const tabsContainer = document.querySelector(".operations__tab-container");

tabs.forEach((t) => t.addEventListener("click", () => 1));

tabsContainer.addEventListener("click", (e) => {
  const clicked = e.target.closest(".operations__tab");

  console.log(clicked);

  if (clicked) {
    tabs.forEach((t) => t.classList.remove("operations__tab--active"));
    tabsContent.forEach((c) =>
      c.classList.remove("operations__content--active")
    );

    clicked.classList.add("operations__tab--active");

    document
      .querySelector(`.operations__content--${clicked.dataset.tab}`)
      .classList.add("operations__content--active");
  }
});

if (e.target.classList.contains("nav__link")) {
  const link = e.target;

  // Let's assume that there are other navigations on the page, and so we  need to select elements RELATIVE to the hovered link. So we need to traverse the DOM
  const siblings = link.closest(".nav").querySelectorAll(".nav__link");
  const logo = link.closest(".nav").querySelector("img");

  siblings.forEach((el) => {
    if (el !== link) el.style.opacity = 0.5;
  });
  logo.style.opacity = 0.5;
}

nav.addEventListener("mouseout", function (e) {
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    const siblings = link.closest(".nav").querySelectorAll(".nav__link");
    const logo = link.closest(".nav").querySelector("img");

    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = 1;
    });
    logo.style.opacity = 1;
  }
});

// const handleHover = function (e, opacity) {
//   if (e.target.classList.contains("nav__link")) {
//     const link = e.target;
//     const siblings = link.closest(".nav").querySelectorAll(".nav__link");
//     const logo = link.closest(".nav").querySelector("img");

//     siblings.forEach((el) => {
//       if (el !== link) el.style.opacity = opacity;
//     });
//     logo.style.opacity = opacity;
//   }
// };

nav.addEventListener("mouseover", handleHover(e, 0.5));

nav.addEventListener("mouseover", function (e) {
  handleHover(e, 0.5);
});

nav.addEventListener("mouseout", function (e) {
  handleHover(e, 1);
});

const handleHover = function (e) {
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    const siblings = link.closest(".nav").querySelectorAll(".nav__link");
    const logo = link.closest(".nav").querySelector("img");

    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

nav.addEventListener("mouseover", handleHover.bind(0.5));
nav.addEventListener("mouseout", handleHover.bind(1));

const initialCoordinates = section1.getBoundingClientRect();
console.log(initialCoordinates);

window.addEventListener("scroll", function (e) {
  console.log(window.scrollY);

  if (window.scrollY > initialCoordinates.top) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
});

const obsCallback = function (entries, observer) {
  entries.forEach((entry) => {
    console.log(entry);
  });
};

const obsOptions = {
  root: null,

  threshold: [0, 0.2],
};

const observer = new IntersectionObserver(obsCallback, obsOptions);

const navHeight = nav.getBoundingClientRect().height;
console.log(navHeight);

const stickNav = function (entries) {
  const [entry] = entries; // Destructuring
  // console.log(entry);

  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};

// 1.
const headerObserver = new IntersectionObserver(stickNav, {
  root: null,
  threshold: 0,

  //   rootMargin: `-90px`,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(document.querySelector(".header"));

const allSections = document.querySelectorAll(".section");
const revealSection = (entries, observer) => {
  const [entry] = entries;
  // console.log(entry);

  if (entry.isIntersecting) {
    entry.target.classList.remove("section--hidden");

    observer.unobserve(entry.target);
  }
};
const rowObserver = new IntersectionObserver(revealSection, {
  root: null,

  threshold: 0.17,
});

allSections.forEach((row) => {
  rowObserver.observe(row);

  row.classList.add("section--hidden");
});

const imgTargets = document.querySelectorAll("img[data-src]");
const loadImg = (entries, observer) => {
  entries.forEach((entry) => {
    console.log(entry);

    if (entry.isIntersecting) {
      entry.target.src = entry.target.dataset.src;

      entry.target.addEventListener("load", function () {
        this.classList.remove("lazy-img");
      });

      entry.target.onload = function () {};
      document.createElement("img");

      entry.target.src = entry.target.dataset.src;
      observer.unobserve(entry.target);
    }
  });
};
const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,

  rootMargin: "0px 0px -200px 0px",
});

// Observer multiple targets!
imgTargets.forEach((img) => {
  imgObserver.observe(img);
});

const slides = document.querySelectorAll(".slide");
const btnLeft = document.querySelector(".slider__btn--left");
const btnRight = document.querySelector(".slider__btn--right");
const dotContainer = document.querySelector(".dots");

let curSlide = 0;
const maxSlide = slides.length;

const createDots = () => {
  slides.forEach((s, i) => {
    dotContainer.insertAdjacentHTML(
      "beforeend",
      `<button class="dots__dot" data-slide="${i}"></button>`
    );
  });
};

const activateDot = (dot) => {
  const dots = document.querySelectorAll(".dots__dot");
  dots.forEach((d) => d.classList.remove("dots__dot--active"));
  document
    .querySelector(`.dots__dot[data-slide="${dot}"]`)
    .classList.add("dots__dot--active");
};

const goToSlide = (slide) => {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};

const prevSlide = () => {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }
  goToSlide(curSlide);
  activateDot(curSlide);
};

const nextSlide = () => {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  goToSlide(curSlide);
  activateDot(curSlide);
};

btnLeft.addEventListener("click", prevSlide);
btnRight.addEventListener("click", nextSlide);

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") prevSlide();
  if (e.key === "ArrowRight") nextSlide();
});

dotContainer.addEventListener("click", (e) => {
  console.log(e.target);

  if (e.target.matches(".dots__dot")) {
    const { slide } = e.target.dataset; // Destructuring
    goToSlide(slide);
    activateDot(slide);
  }
});

// Go to next slide every 10 seconds
setInterval(nextSlide, 10000);

const init = () => {
  goToSlide(0);
  createDots();
  activateDot(0);
};
init();

document.addEventListener("DOMContentLoaded", function (e) {
  console.log("HTML parsed and DOM tree built!", e);
});

window.addEventListener("load", function (e) {
  console.log("Page fully loaded, including images!", e);
});

window.addEventListener("beforeunload", function (e) {
  e.preventDefault();

  console.log(e);
});

const highlightedText = document.querySelectorAll(".highlight");
setInterval(() => {
  highlightedText[0].classList.toggle("highlight");
}, 500);

const mouseEl = document.createElement("div");
mouseEl.style.cssText =
  "height: 30px; width: 30px; border-radius: 50%; background: black; opacity: 0.3; position: absolute";
// document.body.append(mouseEl);

document.addEventListener("mousemove", function (e) {
  const mouseEl = document.createElement("div");
  mouseEl.style.cssText =
    "height: 30px; width: 30px; border-radius: 50%; background: black; opacity: 0.3; position: absolute";
  document.body.append(mouseEl);

  mouseEl.style.top = e.clientY + "px";
  mouseEl.style.left = e.clientX + "px";

  mouseEl.style.top = e.pageY + "px";
  mouseEl.style.left = e.pageX + "px";
});
