//select inputs
const userEmail = document.getElementById("user-email");
const userPass = document.getElementById("user-pass");
const toggle = document
  .getElementById("toggle")
  .addEventListener("click", () => {
    if (userPass.type === "password") {
      userPass.type = "text";
    } else if (userPass.type === "text") {
      userPass.type = "password";
    }
  });
//select massage after fetch
const responseFetch = document.getElementById("response");
const emailValidation = document.getElementById("email-validation");
const passValidation = document.getElementById("pass-validation");
//select form handler
const form = document
  .getElementById("form")
  .addEventListener("submit", submiting);

function submiting(e) {
  e.preventDefault();
  //reset previus text
  emailValidation.innerText = "";
  passValidation.innerText = "";
  //the value of inputs
  const userEmailValue = userEmail.value;
  const userPassValue = userPass.value;
  //when validation is true =>fetch data to server
  let validation = true;
  if (
    userEmailValue.indexOf("@") === -1 ||
    userEmailValue.indexOf(".") === -1
  ) {
    emailValidation.innerText = "please enter a vali email";
    validation = false;
  }
  if (userPassValue.length === 0) {
    passValidation.innerText = "enter your password";
    validation = false;
  } else if (userPassValue.length <= 4) {
    passValidation.innerText = "your password should be longer than 4";
    validation = false;
  }

  if (validation) {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        userEmail: userEmailValue,
        userPass: userPassValue,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((response) => {
      if (response.ok) {
        responseFetch.innerText = "your signin successffuly";
      }
    });
  }
}
