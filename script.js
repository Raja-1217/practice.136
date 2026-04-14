function play() {
    let choice = ["s", "w", "g"];
    let computerchoice = choice[Math.floor(Math.random() * 3)];

    let manchoice = document.getElementById("inputBox").value.toLowerCase();

    let result = "";

    if (computerchoice == "s" && manchoice == "w") {
        result = "🎉 You Win!";
    }
    else if (computerchoice == "w" && manchoice == "s") {
        result = "💻 Computer Wins!";
    }
    else if (computerchoice == "g" && manchoice == "s") {
        result = "💻 Computer Wins!";
    }
    else if (computerchoice == "g" && manchoice == "w") {
        result = "🎉 You Win!";
    }
    else if (computerchoice == "w" && manchoice == "g") {
        result = "💻 Computer Wins!";
    }
    else if (computerchoice == "s" && manchoice == "g") {
        result = "🎉 You Win!";
    }
    else if (computerchoice == manchoice) {
        result = "🤝 Draw!";
    }
    else {
        result = "❌ Invalid input!";
    }

    document.getElementById("output").innerHTML =
        `<b>Computer:</b> ${computerchoice} <br>
         <b>You:</b> ${manchoice} <br><br>
         <b>${result}</b>`;
}