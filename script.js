const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const birthdayMessage = document.getElementById("birthdayMessage");
const fallingRoses = document.querySelector(".falling-roses");

let yesSize = 1;
let noSize = 1;

noBtn.addEventListener("click", function () {
    yesSize += 0.15;
    yesBtn.style.transform = `scale(${yesSize})`;

    noSize -= 0.10;
    if (noSize < 0.35) noSize = 0.35;
    noBtn.style.transform = `scale(${noSize})`;

    const x = (Math.random() * 160) - 80;
    const y = (Math.random() * 100) - 50;

    noBtn.style.position = "relative";
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

yesBtn.addEventListener("click", function () {
    birthdayMessage.style.display = "flex";
    createRoses();
});

function createRoses() {
    for (let i = 0; i < 40; i++) {
        const rose = document.createElement("div");
        rose.classList.add("petal");
        rose.textContent = "🌹";
        rose.style.left = Math.random() * 100 + "%";
        rose.style.fontSize = (15 + Math.random() * 25) + "px";
        rose.style.animationDuration = (3 + Math.random() * 4) + "s";
        rose.style.animationDelay = Math.random() * 3 + "s";
        fallingRoses.appendChild(rose);
    }
}
