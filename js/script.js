const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMessage = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "Jono" && password === "pass123"){
        alert("Login Successful");
        location.reload();
    }
    else{
        loginErrorMessage.style.opacity = 1;
    }
})