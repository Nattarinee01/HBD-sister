// ------------------------ Password Page ------------------------
let wrongCount = 0;

function checkPassword() {
    const input = document.getElementById("password");
    const value = input.value;
    const correct = "happy2025";
    const msg = document.getElementById("message");

    if (!input || !msg) return; // ถ้าอยู่หน้าอื่นจะไม่ทำงาน

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

// ------------------------ Wish Page ------------------------
function sendWish() {
    const wishInput = document.getElementById("wish");
    const status = document.getElementById("status");

    if (!wishInput || !status) return; // ถ้าอยู่หน้าอื่นจะไม่ทำงาน

    const wish = wishInput.value;
    if (wish.trim() === "") {
        status.textContent = "Please write something first.";
        return;
    }

    const scriptURL = "https://script.google.com/macros/s/AKfycbw3FFKqaBjhK5NcxY6_vkVrnI071WKvrSYrVqJrtBEZ7oxQKKZ36J49gHp8LNU8gK67/exec"; // เปลี่ยนเป็น URL ของคุณ

    fetch(scriptURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ wish: wish })
    })
    .then(res => res.json())
    .then(data => {
        if (data.status === "success") {
            status.textContent = "Wish sent successfully! 💛";
            wishInput.value = "";
        }
    })
    .catch(err => {
        status.textContent = "Error sending wish.";
        console.log(err);
    });
}

// ------------------------ Gift Page ------------------------
function revealGift() {
    const box = document.getElementById("gift-box");
    const reveal = document.getElementById("gift-reveal");
    if (!box || !reveal) return;

    box.style.display = "none";
    reveal.style.display = "block";
}
