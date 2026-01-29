function loginUser() {
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    // YOUR LOGIN DETAILS
    const correctEmail = "uwillbemine@143";
    const correctPassword = "uaremylove";

    if (email === correctEmail && password === correctPassword) {
        window.location.href = "dashboard.html"; // page to open after login
    } else {
        alert("Invalid email or password!");
    }
}
