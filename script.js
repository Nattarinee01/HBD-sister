// Password check
function checkPassword() {
    const input = document.getElementById("password").value;
    const correct = "221146";  // <--- ตั้งรหัสผ่านที่นี่

    if (input === correct) {
        window.location.href = "menu.html";
    } else {
        alert("Incorrect password! Try again.");
    }
}

// For the gift page
function revealGift() {
    document.getElementById("gift-box").style.display = "none";
    document.getElementById("gift-reveal").style.display = "block";
}
