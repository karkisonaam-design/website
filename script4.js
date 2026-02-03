function loginUser() {
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    // YOUR LOGIN DETAILS
    const correctEmail = "loveu.com";
    const correctPassword = "20810128";

    if (email === correctEmail && password === correctPassword) {
        window.location.href = "birth.html"; // page to open after login
    } else {
        alert("Invalid email or password!");
    }
}
