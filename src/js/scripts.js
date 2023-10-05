const inputName = document.querySelector(".form__input--name");
const inputEmail = document.querySelector(".form__input--email");
const inputMessage = document.querySelector(".form__textarea");
const inputSubmit = document.querySelector(".div__form");

inputName.addEventListener("input", (event) => {
  const valueLength = event.currentTarget.value.length;

  if (valueLength <= 2 && valueLength >= 1) {
    inputName.style.borderBottomColor = "#ff6f5b";
  } else if (valueLength >= 3) {
    inputName.style.borderBottomColor = "#4ee1a0";
  } else {
    inputName.style.borderBottomColor = "#ffffff";
  }
});

inputEmail.addEventListener("input", (event) => {
  const valueLength = event.currentTarget.value.length;
  const inputValue = event.currentTarget.value;
  const nameUserEmail = inputValue.split("").slice(0, -10);

  const validationsError =
    (valueLength <= 10 && valueLength >= 1) ||
    (valueLength >= 10 && !inputValue.endsWith("@gmail.com")) ||
    inputValue.includes(" ") ||
    nameUserEmail.includes("@");

  const validationsThen =
    valueLength >= 11 &&
    !inputValue.includes(" ") &&
    inputValue.endsWith("@gmail.com") &&
    !nameUserEmail.includes("@");

  if (validationsError) {
    inputEmail.style.borderBottomColor = "#ff6f5b";
  } else if (validationsThen) {
    inputEmail.style.borderBottomColor = "#4ee1a0";
  } else {
    inputEmail.style.borderBottomColor = "#ffffff";
  }
});

inputMessage.addEventListener("input", (event) => {
  const valueLength = event.currentTarget.value.length;

  if (valueLength <= 19 && valueLength >= 1) {
    inputMessage.style.borderBottomColor = "#ff6f5b";
  } else if (valueLength >= 20) {
    inputMessage.style.borderBottomColor = "#4ee1a0";
  } else {
    inputMessage.style.borderBottomColor = "#ffffff";
  }
});

function main() {
  inputSubmit.addEventListener("submit", (e) => {
    if (
      inputName.value.length <= 2 ||
      inputEmail.value.length <= 10 ||
      inputMessage.value.length <= 20
    ) {
      e.preventDefault();
      return;
    }

    if (inputEmail.value.includes(" ")) {
      e.preventDefault();
      return;
    }

    if (!inputEmail.value.endsWith("@gmail.com")) {
      e.preventDefault();
      return;
    }

    const nameUserEmail = inputEmail.value.split("").slice(0, -10);
    if (nameUserEmail.includes("@")) {
      e.preventDefault();
      return;
    }
  });
}

document.addEventListener("DOMContentLoaded", main);
