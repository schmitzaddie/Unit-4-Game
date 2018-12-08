var targetNumber = 0;

var counter = 0;

var wins = 0;

var losses = 0;

var numberOptions = [18, 7, 3, 12];

var imageCrystalOne = $("<img>");
var imageCrystalTwo = $("<img>");
var imageCrystalThree = $("<img>");
var imageCrystalFour = $("<img>");

imageCrystalOne.addClass("crystal-image");
imageCrystalTwo.addClass("crystal-image");
imageCrystalThree.addClass("crystal-image");
imageCrystalFour.addClass("crystal-image");

imageCrystalOne.attr("src", "assets/images/blue.png");
imageCrystalTwo.attr("src", "assets/images/red.png")
imageCrystalThree.attr("src", "assets/images/clear.png");
imageCrystalFour.attr("src", "assets/images/green.png");

imageCrystalOne.attr("data-crystalvalue", numberOptions[0]);
imageCrystalTwo.attr("data-crystalvalue", numberOptions[1]);
imageCrystalThree.attr("data-crystalvalue", numberOptions[2]);
imageCrystalFour.attr("data-crystalvalue", numberOptions[3]);

$("#crystals").append(imageCrystalOne);
$("#crystals").append(imageCrystalTwo);
$("#crystals").append(imageCrystalThree);
$("#crystals").append(imageCrystalFour);

$("#wins").text("Wins: " + wins);
$("#losses").text("Losses: " + losses);

resetGame();

$(".crystal-image").on("click", function () {

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);

    counter += crystalValue;

    $("#score").text("Score: " + counter);
    $("#wins").text("Wins: " + wins);

    if (counter === targetNumber) {
        alert("You win!");
        wins++;
        counter=0;
        $("#wins").text("Wins: " + wins);
        resetGame();
    }

    else if (counter >= targetNumber) {
        alert("You lose!!");
        losses++;
        $("#losses").text("Losses: " + losses);
        resetGame();
    }

});

function resetGame() {
    counter=0;
    targetNumber = Math.floor((Math.random() * 120) + 19);
    $("#number-to-guess").text("Number to guess: " +targetNumber);
    $("#score").text("Score: " + counter);
}
