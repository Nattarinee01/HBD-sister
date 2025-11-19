// ------------------------ Password Page ------------------------
let wrongCount = 0;

function checkPassword() {
    const input = document.getElementById("password");
    const value = input.value;
    const correct = "221146";
    const msg = document.getElementById("message");

    if (!input || !msg) return;

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

    if (!wishInput || !status) return;

    const wish = wishInput.value.trim();
    if (!wish) {
        status.textContent = "Please write something!";
        return;
    }

    // อ่านค่าเก่าจาก localStorage
    let wishes = JSON.parse(localStorage.getItem("wishes") || "[]");
    wishes.push(wish);
    localStorage.setItem("wishes", JSON.stringify(wishes));

    status.textContent = "Wish saved locally! 💛";
    wishInput.value = "";

    console.log(wishes); // ดูได้ใน DevTools (Console)
}

// ------------------------ Gift Page ------------------------
function revealGift() {
    const box = document.getElementById("gift-box");
    const reveal = document.getElementById("gift-reveal");
    if (!box || !reveal) return;

    box.style.display = "none";
    reveal.style.display = "block";
}

function showAllWishes() {
    const allWishesDiv = document.getElementById("all-wishes");
    let wishes = JSON.parse(localStorage.getItem("wishes") || "[]");

    if (wishes.length === 0) {
        allWishesDiv.textContent = "no wish";
        return;
    }

    // แสดงแต่ละ wish เป็นรายการ
    allWishesDiv.innerHTML = wishes.map((w, i) => `${i+1}. ${w}`).join("<br>");
}

function clearAllWishes() {
    localStorage.removeItem("wishes"); // ลบ key "wishes"
    const allWishesDiv = document.getElementById("all-wishes");
    if (allWishesDiv) allWishesDiv.textContent = "";
    alert("ลบข้อความทั้งหมดเรียบร้อยแล้ว 💛");
}

