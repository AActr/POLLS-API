// Send post request with form data
const form = document.getElementById("form");

const sendData = async (e) => {
    try {
        const formData = new FormData(e.target);
        const data = JSON.stringify({
            username: formData.get("username"),
            email: formData.get("email"),
            password: formData.get("password"),
        })

        const res = await fetch("/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: data
        })
    } catch (error) {
        console.log(error);
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    sendData(e)
})

// Show password
const showPasswordButton = document.getElementById("show-password-button");
const passwordInput = document.getElementById("password");

const showPassword = () => {
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";
}

showPasswordButton.addEventListener("click", showPassword)