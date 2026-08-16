/* =================================
   SURPRISE BUTTON
================================= */

function surprise() {

    fireworks();

    alert(
        "🎉 SURPRISE! 🎉\n\n" +
        "Happy Birthday! ❤️\n" +
        "I hope you have an amazing day! 🎂✨"
    );
}


/* =================================
   SPECIAL MESSAGE
================================= */

function showMessage() {

    const message =
        document.getElementById("specialMessage");

    message.innerHTML =
        "🎂 Happy Birthday! ❤️<br><br>" +
        "You are a very special friend. " +
        "May your life always be filled with " +
        "happiness, success, laughter and beautiful memories! ✨";
}


/* =================================
   BALLOON POP GAME
================================= */

function balloonGame() {

    const result =
        document.getElementById("gameResult");

    result.innerHTML =
        "🎈 POP! You caught the balloon! 🎉";

    fireworks();
}


/* =================================
   BIRTHDAY QUIZ
================================= */

function quizGame() {

    const answer = prompt(
        "🎯 Birthday Quiz\n\n" +
        "What makes a birthday better?\n\n" +
        "A) Cake 🎂\n" +
        "B) Friends 👯\n" +
        "C) Gifts 🎁\n" +
        "D) All of them ❤️"
    );

    const result =
        document.getElementById("gameResult");

    if (answer && answer.toUpperCase() === "D") {

        result.innerHTML =
            "🎉 Correct Answer! You are awesome! ❤️";

        fireworks();

    } else {

        result.innerHTML =
            "😊 Nice try! Correct answer is D.";
    }
}


/* =================================
   MEMORY GAME
================================= */

function memoryGame() {

    const number =
        Math.floor(Math.random() * 9000) + 1000;

    const display =
        document.getElementById("memoryNumber");

    const result =
        document.getElementById("gameResult");

    display.innerHTML = number;

    result.innerHTML =
        "🧠 Remember the number!";

    setTimeout(function () {

        display.innerHTML = "?";

        const answer =
            prompt("What number did you remember?");

        if (answer == number) {

            result.innerHTML =
                "🧠 Amazing! Your memory is excellent! 🎉";

            fireworks();

        } else {

            result.innerHTML =
                "😄 Good try! The number was " + number;
        }

    }, 3000);
}


/* =================================
   CATCH THE HEART GAME
================================= */

function catchHeart() {

    const result =
        document.getElementById("gameResult");

    result.innerHTML =
        "❤️ You caught the heart! 🎉";

    createHeart();
}


/* =================================
   CREATE FALLING HEART
================================= */

function createHeart() {

    const heart =
        document.createElement("div");

    heart.className = "heart";

    const hearts = [
        "❤️",
        "💖",
        "💕",
        "💗",
        "💜",
        "💝"
    ];

    heart.innerHTML =
        hearts[
            Math.floor(
                Math.random() * hearts.length
            )
        ];

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.animationDuration =
        (3 + Math.random() * 4) + "s";

    document.body.appendChild(heart);

    setTimeout(function () {

        heart.remove();

    }, 7000);
}


/* =================================
   AUTOMATIC FALLING HEARTS
================================= */

setInterval(function () {

    createHeart();

}, 500);


/* =================================
   FIREWORKS
================================= */

function fireworks() {

    for (let i = 0; i < 30; i++) {

        const firework =
            document.createElement("div");

        firework.className =
            "firework";

        firework.style.left =
            Math.random() * 100 + "vw";

        firework.style.top =
            Math.random() * 70 + "vh";

        firework.style.animationDelay =
            Math.random() * 0.5 + "s";

        document.body.appendChild(firework);

        setTimeout(function () {

            firework.remove();

        }, 1500);
    }
}


/* =================================
   WELCOME MESSAGE
================================= */

window.addEventListener("load", function () {

    console.log(
        "🎂 Birthday Website Loaded Successfully!"
    );

});