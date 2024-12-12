document.getElementById("registerForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("newUsername").value;
    const password = document.getElementById("newPassword").value;

    const userData = JSON.parse(localStorage.getItem("users")) || [];

    if (userData.find(user => user.username === username)) {
        alert("Username already exists!");
    } else {
        userData.push({ username, password });
        localStorage.setItem("users", JSON.stringify(userData));
        alert("User registered successfully! You can now log in.");
        window.location.href = "index.html"; // Redirect to login page
    }
});
