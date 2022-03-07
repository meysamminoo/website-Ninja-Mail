const inputJoinUs = document.querySelector(".input-join-us");
const btnJoinUs = document.querySelector(".btn-join-us");
const successInput = document.querySelector(".success-email");
const errorInput = document.querySelector(".error-email");

inputJoinUs.addEventListener("input", formHandler);
btnJoinUs.addEventListener("click", clickHandler);

// todo: get input user
function formHandler(e) {
  inputJoinUs.value = e.target.value;
}

// todo: validate and submit email
function clickHandler() {
  if (inputJoinUs.value === "" || !inputJoinUs.value) {
    errorInput.style.display = "block";
    errorInput.style.visibility = "visible";
    errorInput.style.opacity = "1 ";
    clearMessage();
  }

  const regEXEmail =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (inputJoinUs.value.match(regEXEmail)) {
    successInput.style.display = "block";
    successInput.style.visibility = "visible";
    clearMessage();
  } else {
    errorInput.style.display = "block";
    errorInput.style.visibility = "visible";
    clearMessage();
  }
}

function clearMessage() {
  setTimeout(() => {
    errorInput.style.display = "none";
    errorInput.style.visibility = "hidden";
    successInput.style.display = "none";
    successInput.style.visibility = "hidden";
  }, 3000);
}
