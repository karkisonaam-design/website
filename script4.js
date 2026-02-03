function loginUser() {
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    // YOUR LOGIN DETAILS
    const correctEmail = "You&Metogether@loveu.com";
    const correctPassword = "2080/01/28";

    if (email === correctEmail && password === correctPassword) {
        window.location.href = "birth.html"; // page to open after login
    } else {
        alert("Invalid email or password!");
    }
}
