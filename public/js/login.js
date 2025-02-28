const form = document.getElementById("form");

const sendData = async (e) => {
    try {
        const formData = new FormData(e.target);
        const data = JSON.stringify({
            username: formData.get("username"),
            password: formData.get("password"),
        })
        const res = await fetch("/login", {
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