const filterButtons = document.querySelectorAll(".filters__button");
const dataContent = document.querySelectorAll("[data-content]");
const mainSections = document.querySelectorAll(".main__section");
const darkIcon = document.querySelector(".profile__dark-icon");
const body = document.querySelector("body");
const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

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

      window.localStorage.setItem("clickButton", button.textContent);
      window.localStorage.setItem("section", clickButton.id);
    });
  });
}

// Function to toggle theme mode
function changeThemeMode() {
  darkIcon.addEventListener("click", () => {
    const isMoon = darkIcon.classList.contains("fa-moon");

    if (isMoon) {
      body.classList.add("dark");
      darkIcon.classList.remove("fa-moon");
      darkIcon.classList.add("fa-sun");
      window.localStorage.setItem("theme", "dark");
    } else {
      body.classList.remove("dark");
      darkIcon.classList.add("fa-moon");
      darkIcon.classList.remove("fa-sun");
      window.localStorage.removeItem("theme");
    }
  });
}

// Main function to initialize the page
function main() {
  if (isDark) {
    darkIcon.classList.remove("fa-moon", "fa-sun");
  }

  // Set dark mode based on local storage
  if (window.localStorage.getItem("theme")) {
    body.classList.add("dark");
    darkIcon.classList.remove("fa-moon");
    darkIcon.classList.add("fa-sun");
  }

  if (window.localStorage.getItem("clickButton")) {
    filterButtons.forEach((button) => {
      if (button.textContent === window.localStorage.getItem("clickButton")) {
        button.classList.add("filters__button--active");
        mainSections.forEach((section) => {
          if (section.id === window.localStorage.getItem("section")) {
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
  changeThemeMode();
  filterContentSection();
}

// Initialize the page when fully loaded
window.addEventListener("load", main);
