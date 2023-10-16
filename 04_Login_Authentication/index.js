const users = [
    { username: "user1", password: "password1" },
    { username: "user2", password: "password2" }
];

const registrationSection = document.getElementById("registration");
const loginSection = document.getElementById("login");
const securedContent = document.getElementById("secured-content");
const registerButton = document.getElementById("register-btn");
const loginButton = document.getElementById("login-btn");

registerButton.addEventListener("click", () => {
    const regUsername = document.getElementById("reg-username").value;
    const regPassword = document.getElementById("reg-password").value;
    
    if (users.find(user => user.username === regUsername)) {
        alert("Username already taken.");
    } else {
        users.push({ username: regUsername, password: regPassword });
        alert("Registration successful. You can now log in.");
    }
});

loginButton.addEventListener("click", () => {
    const loginUsername = document.getElementById("login-username").value;
    const loginPassword = document.getElementById("login-password").value;

    const user = users.find(user => user.username === loginUsername);

    if (user && user.password === loginPassword) {
        alert("Login successful.");
        registrationSection.style.display = "none";
        loginSection.style.display = "none";
        securedContent.style.display = "block";
    } else {
        alert("Login failed. Please check your credentials.");
    }
});
