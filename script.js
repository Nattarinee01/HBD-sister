// สำหรับหน้า Password
let wrongCount = 0;

function checkPassword() {
    const input = document.getElementById("password");
    const value = input.value;
    const correct = "happy2025";
    const msg = document.getElementById("message");

    if (value === correct) {
        window.location.href = "menu.html";
    } else {
        wrongCount++;
        input.classList.add("shake");
        setTimeout(() => input.classList.remove("shake"), 400);

        msg.classList.add("fade-msg");

        if (wrongCount >= 2) {
            msg.innerHTML = `Incorrect password!<br>
            <span style="font-size:13px; color:#6b4e4e;">
            Hint: It’s related to her birthday.
            </span>`;
        } else {
            msg.textContent = "Incorrect password!";
        }

        setTimeout(() => msg.classList.remove("fade-msg"), 400);
    }
}

// สำหรับหน้า Wish / ข้อพรปีหน้า
function sendWish() {
    const wish = document.getElementById("wish").value;
    const status = document.getElementById("status");

    if (wish.trim() === "") {
        status.textContent = "Please write something first.";
        return;
    }

    fetch("https://script.google.com/macros/s/AKfycbwCJpiNYofyeoUMKutZSVcjvsREbGqSfV-c9CVB8Z6OM2QX33kJe6shjNLIJgFBJaL-/exec", {
        method: "POST",
        body: JSON.stringify({ wish: wish }),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(res => res.json())
    .then(data => {
        if (data.status === "success") {
            status.textContent = "Wish sent successfully! 💛";
        }
    })
    .catch(err => {
        status.textContent = "Error sending wish.";
    });
}

// สำหรับหน้า Gift
function revealGift() {
    document.getElementById("gift-box").style.display = "none";
    document.getElementById("gift-reveal").style.display = "block";
}



