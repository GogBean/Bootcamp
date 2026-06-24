document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#contactform");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;

        alert(`Name: ${name}\nEmail: ${email}`);
    });
});