"use strict";

const nav_btn = document.querySelector(".nav-btn");
const sidebar = document.querySelector(".sidebar");
const side_nav = document.querySelector(".side-nav");

const nav_text = document.querySelectorAll(".nav__text");
console.log(nav_text);

nav_btn.addEventListener("click", function () {
  sidebar.classList.toggle("sidebar-expand");
  nav_btn.classList.toggle("nav-btn-expand");

  nav_text.forEach((ele) => {
    console.log(ele);
    ele.classList.toggle("hidden");
    ele.classList.toggle("pad");
  });
});

const btn_header = document.getElementById("btn-header");
const btn_features = document.getElementById("btn-features");
const btn_story = document.getElementById("btn-story");
const btn_homes = document.getElementById("btn-homes");
const btn_gallery = document.getElementById("btn-gallery");
const btn_footer = document.getElementById("btn-footer");

const features = document.getElementById("features");
const story = document.getElementById("story");
const homes = document.getElementById("homes");
const footer = document.getElementById("footer");
const gallery = document.getElementById("gallery");
const header = document.getElementById("header");

btn_header.addEventListener("click", function (e) {
  header.scrollIntoView({ behavior: "smooth" });
});
btn_gallery.addEventListener("click", function (e) {
  gallery.scrollIntoView({ behavior: "smooth" });
});
btn_story.addEventListener("click", function (e) {
  story.scrollIntoView({ behavior: "smooth" });
});
btn_features.addEventListener("click", function (e) {
  features.scrollIntoView({ behavior: "smooth" });
});
btn_homes.addEventListener("click", function (e) {
  homes.scrollIntoView({ behavior: "smooth" });
});
btn_footer.addEventListener("click", function (e) {
  footer.scrollIntoView({ behavior: "smooth" });
});

const header_btn = document.querySelector(".header__btn");
header_btn.addEventListener("click", function () {
  homes.scrollIntoView({ behavior: "smooth" });
});

const contactBtn = document.querySelectorAll(".home__btn");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

contactBtn.forEach((ele) => {
  ele.addEventListener("click", function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
});

overlay.addEventListener("click", function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && sidebar.classList.contains("sidebar-expand")) {
    console.log("key pressed");
    sidebar.classList.toggle("sidebar-expand");
    nav_btn.classList.toggle("nav-btn-expand");

    nav_text.forEach((ele) => {
      console.log(ele);
      ele.classList.toggle("hidden");
      ele.classList.toggle("pad");
    });
  }
});

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  nav_btn.style.transform = `translateY(${scrollY}px)`;
});

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  btn_header.style.transform = `translateY(${scrollY}px)`;
});

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  btn_features.style.transform = `translateY(${scrollY}px)`;
});

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  btn_story.style.transform = `translateY(${scrollY}px)`;
});

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  btn_homes.style.transform = `translateY(${scrollY}px)`;
});

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  btn_gallery.style.transform = `translateY(${scrollY}px)`;
});

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  btn_footer.style.transform = `translateY(${scrollY}px)`;
});
