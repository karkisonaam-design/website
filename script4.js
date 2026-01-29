function loginUser() {
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    // YOUR LOGIN DETAILS
    const correctEmail = "user@example.com";
    const correctPassword = "123456";

    if (email === correctEmail && password === correctPassword) {
        window.location.href = "dashboard.html"; // page to open after login
    } else {
        alert("Invalid email or password!");
    }
}
