const VALID_MSG = "Formário enviado com sucesso";
const INVALID_MSG = "Todos os campos precisam ser preenchidos";

const statusElement = document.querySelector("#formStatus");

document.querySelector("form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const elements = e.target.elements;

  const email = elements["email"].value;
  const name = elements["name"].value;
  const message = elements["message"].value;

  let isValidEmail,
    isValidName,
    isValidMessage = false;

  if (email.trim() != "") {
    isValidEmail = true;
  }
  if (name.trim() != "") {
    isValidName = true;
  }
  if (message.trim() != "") {
    isValidMessage = true;
  }

  if ((isValidEmail, isValidName, isValidMessage)) {
    await timeout(1000 * 1);

    statusElement.className = "valid";
    statusElement.textContent = VALID_MSG;
  } else {
    statusElement.className = "invalid";
    statusElement.textContent = INVALID_MSG;
  }
});

async function timeout(miliseconds) {
  return new Promise((res) => {
    setTimeout(res, miliseconds);
  });
}
