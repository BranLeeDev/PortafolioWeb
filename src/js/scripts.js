import scrollReveal from "scrollreveal";

const filterButtons = document.querySelectorAll(".filters__button");
const dataContent = document.querySelectorAll("[data-content]");
const mainSections = document.querySelectorAll(".main__section");
const darkIcon = document.querySelector(".profile__dark-icon");
const body = document.querySelector("body");
let isDarkPreference = window.matchMedia(
  "(prefers-color-scheme: dark)"
).matches;

// Variables from localStorage
const theme = window.localStorage.getItem("theme");
const sectionTitle = window.localStorage.getItem("sectionTitle");
const sectionBody = window.localStorage.getItem("sectionBody");

function removeClassIconAndBody(classBody) {
  if (classBody === "light") {
    body.classList.remove(classBody);
    body.classList.add("dark");
    darkIcon.classList.remove("fa-moon");
    darkIcon.classList.add("fa-sun");
  } else {
    body.classList.remove(classBody);
    body.classList.add("light");
    darkIcon.classList.remove("fa-sun");
    darkIcon.classList.add("fa-moon");
  }
}

// Function to handle filtering content sections
function filterContentSection() {
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const clickButton = document.querySelector(button.dataset.target);

      dataContent.forEach((section) => {
        section.classList.remove("main__section--active");
      });
      clickButton.classList.add("main__section--active");

      filterButtons.forEach((button) => {
        button.classList.remove("filters__button--active");
      });
      button.classList.add("filters__button--active");

      window.localStorage.setItem("sectionTitle", button.textContent);
      window.localStorage.setItem("sectionBody", clickButton.id);
    });
  });
}

// Function to toggle theme mode
function changeThemeMode() {
  darkIcon.addEventListener("click", () => {
    const isMoon = darkIcon.classList.contains("fa-moon");

    if (isMoon) {
      removeClassIconAndBody("light");
      window.localStorage.setItem("theme", "dark");
    } else {
      removeClassIconAndBody("dark");
      window.localStorage.setItem("theme", "light");
    }
  });
}

// Function to initialize scrollReveal
function initScrollReveal() {
  const sr = scrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 400,
  });

  sr.reveal(".profile__container-img");
  sr.reveal(".profile__dark-button");
  sr.reveal(".profile__name", { delay: 500 });
  sr.reveal(".profile__profession", { delay: 600 });
  sr.reveal(".profile__socials", { delay: 700 });
  sr.reveal(".profile__section--info", { delay: 800 });
  sr.reveal(".profile__section--buttons", { delay: 900 });
  sr.reveal(".main__section--filters", { delay: 1000 });
  sr.reveal(".main__section--active", { delay: 1100 });
  sr.reveal(".footer", { delay: 1200 });
}

function setDataFromLocalStorage() {
  // If the theme is set to dark in the local storage, update the body's class to "dark".
  if (theme === "dark") {
    removeClassIconAndBody("light");
    isDarkPreference = true;
  }

  // If the theme is set to light in the local storage, update the body's class to "light".
  if (theme === "light") {
    removeClassIconAndBody("dark");
    isDarkPreference = false;
  }

  /* 
    If the section body exists, the user was previously in a different section. 
    In this case, update the filters__button--active and main__section--active classes accordingly.
  */
  if (sectionBody) {
    filterButtons.forEach((button) => {
      if (button.textContent === sectionTitle) {
        button.classList.add("filters__button--active");

        mainSections.forEach((section) => {
          if (section.id === sectionBody) {
            section.classList.add("main__section--active");
          } else {
            section.classList.remove("main__section--active");
          }
        });
      } else {
        button.classList.remove("filters__button--active");
      }
    });
  }
}

function verifyPrefersColorScheme() {
  removeClassIconAndBody(isDarkPreference ? "light" : "dark");
}

// Main function to initialize the page
function main() {
  setDataFromLocalStorage();

  verifyPrefersColorScheme();

  initScrollReveal();
  changeThemeMode();
  filterContentSection();
}

// Initialize the page when fully loaded
window.addEventListener("load", main);
