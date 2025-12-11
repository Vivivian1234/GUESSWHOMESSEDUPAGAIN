// Load saved data from localStorage
document.getElementById("r_username").textContent = localStorage.getItem("username") || "—";
document.getElementById("r_email").textContent = localStorage.getItem("email") || "—";
document.getElementById("r_birth").textContent = localStorage.getItem("dob") || "—";

// Mask password by default (e.g., ********)
const savedPassword = localStorage.getItem("password") || "";
document.getElementById("r_password").textContent = "*".repeat(savedPassword.length);

// Toggle show/hide password
function togglePassword() {
    const passwordSpan = document.getElementById("r_password");
    const icon = document.getElementById("eyeIcon");

    if (passwordSpan.dataset.visible === "true") {
        // Hide password again
        passwordSpan.textContent = "*".repeat(savedPassword.length);
        passwordSpan.dataset.visible = "false";
        icon.setAttribute("name", "eye-off");
    } else {
        // Show full password
        passwordSpan.textContent = savedPassword;
        passwordSpan.dataset.visible = "true";
        icon.setAttribute("name", "eye");
    }
}

window.onload = () => {
    const box = document.querySelector(".homepage-box");
    box.style.opacity = "1";
};

const homepageBox = document.querySelector(".homepage-box");
homepageBox.style.opacity = 0;
window.onload = () => {

    homepageBox.style.opacity = 1;

const fields = document.querySelectorAll(".homepage-list p");
fields.forEach((field, index) => {
    field.style.opacity = 1;

});


const backButton = document.querySelector(".back-btn");
backButton.style.opacity = 1;
}