const inputName = document.querySelector(".form__input--name");
const inputEmail = document.querySelector(".form__input--email");
const inputMessage = document.querySelector(".form__textarea");
const inputSubmit = document.querySelector(".div__form");
const messagesError = document.querySelectorAll(".div__p--error");
const botTrap = document.querySelector("#bot_trap");

inputName.addEventListener("input", (event) => {
  const valueLength = event.currentTarget.value.length;

  if (valueLength <= 2 && valueLength >= 1) {
    inputName.style.borderBottomColor = "#ff6f5b";
    messagesError[0].style.display = "block";
    messagesError[0].textContent = "Input too short, please try again.";
  } else if (valueLength >= 3) {
    inputName.style.borderBottomColor = "#4ee1a0";
    messagesError[0].textContent = "";
    messagesError[0].style.display = "none";
  } else {
    inputName.style.borderBottomColor = "#ffffff";
    messagesError[0].textContent = "";
    messagesError[0].style.display = "none";
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
    messagesError[1].style.display = "block";
    messagesError[1].textContent = "Sorry, invalid format here";
  } else if (validationsThen) {
    inputEmail.style.borderBottomColor = "#4ee1a0";
    messagesError[1].textContent = "";
    messagesError[1].style.display = "none";
  } else {
    messagesError[1].textContent = "";
    messagesError[1].style.display = "none";
    inputEmail.style.borderBottomColor = "#ffffff";
  }
});

inputMessage.addEventListener("input", (event) => {
  const valueLength = event.currentTarget.value.length;

  if (valueLength <= 19 && valueLength >= 1) {
    inputMessage.style.borderBottomColor = "#ff6f5b";
    messagesError[2].style.display = "block";
    messagesError[2].textContent = "Input too short, please try again.";
  } else if (valueLength >= 20) {
    inputMessage.style.borderBottomColor = "#4ee1a0";
    messagesError[2].textContent = "";
    messagesError[2].style.display = "none";
  } else {
    inputMessage.style.borderBottomColor = "#ffffff";
    messagesError[2].textContent = "";
    messagesError[2].style.display = "none";
  }
});

function main() {
  inputSubmit.addEventListener("submit", (e) => {
    if (botTrap.value.length >= 1) {
      e.preventDefault();
      return;
    }

    if (
      inputName.value.length <= 2 ||
      inputEmail.value.length <= 10 ||
      inputMessage.value.length <= 20
    ) {
      e.preventDefault();
      if (inputName.value.length === 0) {
        inputName.style.borderBottomColor = "#ff6f5b";
        messagesError[0].style.display = "block";
        messagesError[0].textContent = "Input empty, please try again";
      }
      if (inputEmail.value.length === 0) {
        inputEmail.style.borderBottomColor = "#ff6f5b";
        messagesError[1].style.display = "block";
        messagesError[1].textContent = "Input empty, please try again";
      }

      if (inputMessage.value.length === 0) {
        inputMessage.style.borderBottomColor = "#ff6f5b";
        messagesError[2].style.display = "block";
        messagesError[2].textContent = "Input empty, please try again";
      }
      return;
    }

    if (inputEmail.value.includes(" ")) {
      e.preventDefault();
      inputEmail.style.borderBottomColor = "#ff6f5b";
      messagesError[1].style.display = "block";
      messagesError[1].textContent = "Sorry, invalid format here";
      return;
    }

    if (!inputEmail.value.endsWith("@gmail.com")) {
      e.preventDefault();
      inputEmail.style.borderBottomColor = "#ff6f5b";
      messagesError[1].style.display = "block";
      messagesError[1].textContent = "Sorry, invalid format here";
      return;
    }

    const nameUserEmail = inputEmail.value.split("").slice(0, -10);
    if (nameUserEmail.includes("@")) {
      e.preventDefault();
      inputEmail.style.borderBottomColor = "#ff6f5b";
      messagesError[1].style.display = "block";
      messagesError[1].textContent = "Sorry, invalid format here";
      return;
    }
  });
}

document.addEventListener("DOMContentLoaded", main);
