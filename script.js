const quizBox = document.getElementById("quizBox");
const resultBox = document.getElementById("resultBox");
const paymentBox = document.getElementById("paymentBox");

const emoji = document.getElementById("emoji");
const question = document.getElementById("question");
const subText = document.getElementById("subText");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

let currentQuestion = 0;

const questions = [
    {
        emoji: "🫂",
        question: "Are you actually my best friend? 👀",
        subText: "Think carefully... your friendship depends on this.",
        yes: "Obviously ❤️",
        no: "NO 😭"
    },

    {
        emoji: "😂",
        question: "Who is more annoying? 💀",
        subText: "Be honest. I already know the answer.",
        yes: "You 😭",
        no: "Me 😇"
    },

    {
        emoji: "📞",
        question: "If I call you at 3 AM, will you answer?",
        subText: "This is an important friendship test.",
        yes: "Of course 🫡",
        no: "I'm sleeping 😴"
    },

    {
        emoji: "🧟",
        question: "Who would survive longer in a zombie apocalypse?",
        subText: "Choose wisely...",
        yes: "ME 😎",
        no: "YOU 😂"
    },

    {
        emoji: "🤫",
        question: "Have you ever secretly been annoyed by me?",
        subText: "You can't escape this question.",
        yes: "Never ❤️",
        no: "Every day 💀"
    },

    {
        emoji: "🥹",
        question: "Would you choose me as your bestie again?",
        subText: "This answer will determine your fate.",
        yes: "YES ❤️",
        no: "NO 😈"
    }
];


// YES BUTTON
yesBtn.addEventListener("click", function () {

    currentQuestion++;

    if (currentQuestion < questions.length) {

        updateQuestion();

    } else {

        quizBox.classList.add("hidden");
        resultBox.classList.remove("hidden");

    }

});


// UPDATE QUESTION
function updateQuestion() {

    const q = questions[currentQuestion];

    emoji.textContent = q.emoji;
    question.textContent = q.question;
    subText.textContent = q.subText;

    yesBtn.textContent = q.yes;
    noBtn.textContent = q.no;

    // Put button back
    noBtn.style.position = "relative";
    noBtn.style.left = "0px";
    noBtn.style.top = "0px";
}


// MAKE NO BUTTON RUN AWAY 😂
function moveNoButton() {

    const container = document.querySelector(".container");

    const maxX = Math.max(
        20,
        container.clientWidth - noBtn.offsetWidth - 40
    );

    const maxY = Math.max(
        20,
        container.clientHeight - noBtn.offsetHeight - 40
    );

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.position = "absolute";
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
}


// COMPUTER
noBtn.addEventListener("mouseover", moveNoButton);


// PHONE
noBtn.addEventListener("touchstart", function(event) {

    event.preventDefault();
    moveNoButton();

});


// FINAL SCREEN
function showPayment() {

    resultBox.classList.add("hidden");
    paymentBox.classList.remove("hidden");

}