function loginUser() {
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    // YOUR LOGIN DETAILS
<<<<<<< HEAD
    const correctEmail = "You&Me@loveu.com";
    const correctPassword = "2080/01/28";
=======
    const correctEmail = "loveu.com";
    const correctPassword = "20810128";
>>>>>>> 2c31196b0d871aa5e6feb13af15ac3052bd6f5d1

    if (email === correctEmail && password === correctPassword) {
        window.location.href = "birth.html"; // page to open after login
    } else {
        alert("Invalid email or password!");
    }
}
