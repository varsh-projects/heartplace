/* =====================================================
   A PLACE IN MY HEART ♡
   FRIENDSHIP WEBSITE
===================================================== */


/* =====================================================
   01 — FRIEND DATABASE
===================================================== */

/*
   IMPORTANT:

   The letters/messages below are temporary placeholders.

   Later we will replace them with the REAL personalized
   content for each of your 8 friends.
*/


const friends = {

    varsha: {

        name: "Varsha",

        code: "moon",

        letter: `
            Dear Varsha,

            This little place was made especially for you.

            There are some friendships that slowly become
            a special part of our lives without us even
            realizing it.

            And you have your own little place here.

            ♡
        `,

        matter:
            "You matter more than you probably realize.",

        friendship:
            "Our friendship has its own little story, and I am glad I got to be part of it.",

        promise:
            "No matter how busy life gets, this little corner will always remember you."

    },


    seethalakshmi: {

        name: "Seetha",

        code: "star",

        letter: `
            Dear Seethalakshmi,

            Some people become part of our lives
            through the simplest conversations.

            Somehow those conversations become memories,
            and those memories become something special.

            This little corner is yours.

            ♡
        `,

        matter:
            "Never forget that your presence can make someone's day better.",

        friendship:
            "Our friendship is one of those little stories I am happy life wrote for me.",

        promise:
            "There will always be a tiny place here with your name on it."

    },


    princy: {

        name: "Princy",

        code: "lavender",

        letter: `
            Dear Princy,

            If friendships were little pieces of a story,
            yours would have its own page here.

            Thank you for being one of the people
            who became part of my journey.

            This page belongs to you.

            ♡
        `,

        matter:
            "You deserve to know that your presence is appreciated.",

        friendship:
            "Some friendships are impossible to explain, but easy to feel.",

        promise:
            "I hope this friendship keeps collecting little moments."

    },


    ani: {

        name: "Ani",

        code: "sunshine",

        letter: `
            Dear Ani,

            Some people somehow feel familiar
            even when you have not known them forever.

            Maybe that is what makes certain friendships
            feel a little different.

            You have your own place here.

            ♡
        `,

        matter:
            "You are more important to this little story than you know.",

        friendship:
            "Every friendship has its own kind of chaos, and ours has its own.",

        promise:
            "Keep being exactly the person who made this friendship special."

    },


    ishu: {

        name: "Ishu",

        code: "dream",

        letter: `
            Dear Ishu,

            Sometimes people enter our lives unexpectedly
            and slowly become someone we are grateful for.

            This little place exists because
            you became one of those people.

            Your corner is right here.

            ♡
        `,

        matter:
            "Your kindness has a way of making people feel less alone.",

        friendship:
            "Some friendships become comforting little corners of life.",

        promise:
            "I hope this friendship always has room for more smiles."

    },


    kavi: {

        name: "Kavi",

        code: "cloud",

        letter: `
            Dear Kavi,

            Every friendship adds something different
            to the story of our lives.

            And you are part of mine.

            So I wanted to leave a tiny place here
            that belongs only to you.

            ♡
        `,

        matter:
            "Your presence is something worth appreciating.",

        friendship:
            "Our friendship is one more little chapter in this beautiful chaos.",

        promise:
            "May there always be more conversations and more memories."

    },


    anushma: {

        name: "Anushma",

        code: "rose",

        letter: `
            Dear Anushma,

            Some friendships are made of big moments.

            Others are made of tiny conversations,
            random laughs, and simple things.

            Whatever the moment,
            I am glad you became part of my story.

            ♡
        `,

        matter:
            "Never underestimate the happiness you bring into someone's life.",

        friendship:
            "There is something beautiful about friendships that simply grow.",

        promise:
            "This little corner will always have your name."

    },


    shalini: {

        name: "Shalini",

        code: "starlight",

        letter: `
            Dear Shalini,

            Every friendship has a beginning.

            Sometimes we don't know where that beginning
            will eventually take us.

            But somehow, the journey becomes a story
            worth remembering.

            And this little corner is part of that story.

            ♡
        `,

        matter:
            "You are a meaningful part of this friendship story.",

        friendship:
            "Our friendship has its own history, its own moments, and its own place here.",

        promise:
            "Some little corners are worth keeping, and this is one of them."

    }

};


/* =====================================================
   02 — VARIABLES
===================================================== */

let currentFriend = null;

let currentFriendKey = null;

let score = 0;

let openedCards = 0;

let gameInterval = null;


/* =====================================================
   03 — ELEMENTS
===================================================== */

const music =
    document.getElementById("bgMusic");

const nameInput =
    document.getElementById("nameInput");

const codeInput =
    document.getElementById("codeInput");

const errorMessage =
    document.getElementById("errorMessage");


/* =====================================================
   04 — ENTER BUTTON
===================================================== */

document
    .getElementById("enterButton")
    .addEventListener("click", enterHeart);


/* Allow ENTER key */

nameInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {

        enterHeart();

    }

});


codeInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {

        enterHeart();

    }

});


/* =====================================================
   05 — ENTER HEART
===================================================== */

function enterHeart() {

    const name =
        nameInput.value
            .trim()
            .toLowerCase();

    const code =
        codeInput.value
            .trim()
            .toLowerCase();


    errorMessage.textContent = "";


    /* ---------------------------------------------
       WRONG NAME
    --------------------------------------------- */

    if (!friends[name]) {

        showError(
            "Sorry... you entered the wrong place of heart. ♡"
        );

        shakeInput();

        return;

    }


    /* ---------------------------------------------
       WRONG PERSONAL CODE
    --------------------------------------------- */

    if (friends[name].code !== code) {

        showError(
            "The name is right... but the key isn't. 🔐"
        );

        shakeInput();

        return;

    }


    /* ---------------------------------------------
       CORRECT FRIEND
    --------------------------------------------- */

    currentFriendKey = name;

    currentFriend = friends[name];


    /* Start music after user interaction */

    music.volume = 0.35;

    music.play().catch(function() {

        console.log("Music could not autoplay.");

    });


    /* Put friend's name */

    document
        .getElementById("friendName")
        .textContent =
        currentFriend.name;


    /* Move to welcome */

    changeScreen(
        "entryScreen",
        "welcomeScreen"
    );

}


/* =====================================================
   06 — ERROR
===================================================== */

function showError(message) {

    errorMessage.textContent = message;

}


/* =====================================================
   07 — INPUT SHAKE
===================================================== */

function shakeInput() {

    nameInput.classList.remove("shake");

    codeInput.classList.remove("shake");


    setTimeout(function() {

        nameInput.classList.add("shake");

        codeInput.classList.add("shake");

    }, 10);

}


/* =====================================================
   08 — WELCOME → LETTER
===================================================== */

document
    .getElementById("openLetterButton")
    .addEventListener("click", function() {

        changeScreen(
            "welcomeScreen",
            "letterScreen"
        );

    });


/* =====================================================
   09 — OPEN ENVELOPE
===================================================== */

document
    .getElementById("envelope")
    .addEventListener("click", showLetter);


/* =====================================================
   10 — SHOW LETTER
===================================================== */

function showLetter() {

    const envelope =
        document.getElementById("envelope");

    const hint =
        document.getElementById("envelopeHint");

    const letter =
        document.getElementById("letter");


    /* Hide envelope */

    envelope.style.display = "none";

    hint.style.display = "none";


    /* Show letter */

    letter.classList.remove("hidden");

    letter.style.display = "block";


    /* Start typing */

    typeLetter(
        currentFriend.letter,
        document.getElementById("letterText")
    );

}


/* =====================================================
   11 — TYPEWRITER LETTER
===================================================== */

function typeLetter(text, element) {

    let index = 0;


    element.textContent = "";


    /* Hide button until typing finishes */

    const continueButton =
        document.getElementById("continueButton");

    continueButton.classList.add("hidden");


    const typing =
        setInterval(function() {

            element.textContent +=
                text.charAt(index);

            index++;


            if (index >= text.length) {

                clearInterval(typing);


                /* Show button */

                continueButton.classList.remove(
                    "hidden"
                );

            }

        }, 25);

}


/* =====================================================
   12 — LETTER → LITTLE THINGS
===================================================== */

document
    .getElementById("continueButton")
    .addEventListener("click", function() {

        setupLittleThings();

        changeScreen(
            "letterScreen",
            "littleThingsScreen"
        );

    });


/* =====================================================
   13 — LITTLE THINGS SETUP
===================================================== */

function setupLittleThings() {

    openedCards = 0;


    /* Reset cards */

    document
        .querySelectorAll(".little-card")
        .forEach(function(card) {

            card.classList.remove("open");

        });


    /* Add personalized messages */

    document
        .getElementById("matterMessage")
        .textContent =
        currentFriend.matter;


    document
        .getElementById("friendshipMessage")
        .textContent =
        currentFriend.friendship;


    document
        .getElementById("promiseMessage")
        .textContent =
        currentFriend.promise;


    /* Hide completion */

    document
        .getElementById("littleThingsComplete")
        .classList.add("hidden");

}


/* =====================================================
   14 — LITTLE THINGS CARDS
===================================================== */

document
    .querySelectorAll(".little-card")
    .forEach(function(card) {

        card.addEventListener("click", function() {

            /* Prevent clicking same card twice */

            if (card.classList.contains("open")) {

                return;

            }


            card.classList.add("open");

            openedCards++;


            /* All three opened */

            if (openedCards === 3) {

                setTimeout(function() {

                    document
                        .getElementById(
                            "littleThingsComplete"
                        )
                        .classList.remove("hidden");

                }, 700);

            }

        });

    });


/* =====================================================
   15 — LITTLE THINGS → GAME
===================================================== */

document
    .getElementById("gameButton")
    .addEventListener("click", function() {

        startGame();

        changeScreen(
            "littleThingsScreen",
            "gameScreen"
        );

    });


/* =====================================================
   16 — START GAME
===================================================== */

function startGame() {

    score = 0;


    document
        .getElementById("score")
        .textContent = score;


    document
        .getElementById("secretDoorButton")
        .classList.add("hidden");


    document
        .getElementById("gameArea")
        .innerHTML = "";


    /* Create hearts continuously */

    clearInterval(gameInterval);


    gameInterval =
        setInterval(createHeart, 700);

}


/* =====================================================
   17 — CREATE HEART
===================================================== */

function createHeart() {

    const gameArea =
        document.getElementById("gameArea");


    const heart =
        document.createElement("div");


    heart.classList.add("game-heart");


    /* 💗 Always filled pink heart */

    heart.textContent = "♥";


    /* Random horizontal position */

    heart.style.left =
        Math.random() * 90 + "%";


    /* Start from bottom */

    heart.style.bottom = "0px";


    /* Random size */

    heart.style.fontSize =
        (24 + Math.random() * 18) + "px";


    /* Random animation speed */

    heart.style.animationDuration =
        (2 + Math.random() * 1.5) + "s";


    /* Click */

    heart.addEventListener("click", function() {

        catchHeart(heart);

    });


    gameArea.appendChild(heart);


    /* Remove after animation */

    setTimeout(function() {

        if (heart.parentNode) {

            heart.remove();

        }

    },2500 );

}


/* =====================================================
   18 — CATCH HEART
===================================================== */

function catchHeart(heart) {

    heart.remove();


    score++;


    document
        .getElementById("score")
        .textContent = score;


    /* WIN */

    if (score >= 10) {

        clearInterval(gameInterval);


        setTimeout(function() {

            document
                .getElementById(
                    "secretDoorButton"
                )
                .classList.remove("hidden");

        }, 500);

    }

}


/* =====================================================
   19 — GAME → SECRET DOOR
===================================================== */

document
    .getElementById("secretDoorButton")
    .addEventListener("click", function() {

        changeScreen(
            "gameScreen",
            "secretScreen"
        );

    });


/* =====================================================
   20 — OPEN SECRET DOOR
===================================================== */

document
    .getElementById("openSecretButton")
    .addEventListener("click", function() {

        prepareFinalPage();

        changeScreen(
            "secretScreen",
            "finalScreen"
        );

    });


/* =====================================================
   21 — FINAL PAGE
===================================================== */

function prepareFinalPage() {

    document
        .getElementById("finalFriendName")
        .textContent =
        currentFriend.name;

}


/* =====================================================
   22 — RESTART
===================================================== */

document
    .getElementById("restartButton")
    .addEventListener("click", function() {

        location.reload();

    });


/* =====================================================
   23 — SCREEN TRANSITION
===================================================== */

function changeScreen(oldScreen, newScreen) {

    const oldElement =
        document.getElementById(oldScreen);

    const newElement =
        document.getElementById(newScreen);


    oldElement.classList.remove("active");


    setTimeout(function() {

        newElement.classList.add("active");

    }, 500);

}


/* =====================================================
   24 — EXTRA KEYBOARD SUPPORT
===================================================== */

document.addEventListener(
    "keydown",
    function(event) {

        /* ESC does nothing intentionally */

        if (event.key === "Escape") {

            return;

        }

    }
);