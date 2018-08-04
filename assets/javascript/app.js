
$(document).ready(function () {
    //Random crytsal number betweem 1 and 12 



    /** Returns a random number between min (inclusive) and max (exclusive)
    (max - min) + min;

     Returns a random integer between min (inclusive) and max (inclusive)
    (max - min + 1)) + min;
    */
    var targetNumber_max = 120;
    var targetNumber_min = 19;
    var crytsal_max = 12;
    var crytsal_min = 1;
    //Random guess number betweem 19 and 120
    var targetNumber = Math.floor((Math.random() * (targetNumber_max - targetNumber_min) + 1) + targetNumber_min);
    var crytsal_1 = Math.floor((Math.random() * (crytsal_max - crytsal_min) + 1) + crytsal_min);
    var crytsal_2 = Math.floor((Math.random() * (crytsal_max - crytsal_min) + 1) + crytsal_min);
    var crytsal_3 = Math.floor((Math.random() * (crytsal_max - crytsal_min) + 1) + crytsal_min);
    var crytsal_4 = Math.floor((Math.random() * (crytsal_max - crytsal_min) + 1) + crytsal_min);
    var counter = 0;
    var wins = 0;
    var losts = 0;

    $("#number-to-guess").text(targetNumber);
    $("#crystal-points").text(counter);

    $("#Crystal-1").on("click", function () {
        counter += crytsal_1;
        $("#crystal-points").text(counter);
        reset();

        // This is fine except the way our code is written every user will win first (when they hit 50).
        // But will then lose immediately if they click again. Seems pointless right?
        // To make this a game we need to create additional code to randomize the counter and targetScore.

    });

    $("#Crystal-2").on("click", function () {

        counter += crytsal_2;
        $("#crystal-points").text(counter);
        reset();

        // This is fine except the way our code is written every user will win first (when they hit 50).
        // But will then lose immediately if they click again. Seems pointless right?
        // To make this a game we need to create additional code to randomize the counter and targetScore.

    });


    $("#Crystal-3").on("click", function () {

        counter += crytsal_3;


        $("#crystal-points").text(counter);

        reset();
        // This is fine except the way our code is written every user will win first (when they hit 50).
        // But will then lose immediately if they click again. Seems pointless right?
        // To make this a game we need to create additional code to randomize the counter and targetScore.

    });


    $("#Crystal-4").on("click", function () {
        counter += crytsal_4;
        $("#crystal-points").text(counter);
        reset();
        // This is fine except the way our code is written every user will win first (when they hit 50).
        // But will then lose immediately if they click again. Seems pointless right?
        // To make this a game we need to create additional code to randomize the counter and targetScore.
    });

    function reset() {
        if (counter === targetNumber) {
            counter = 0;
            wins++;
            crystalsAndTargetReset();
            $("#crystal-points").text(counter);
            $("#wins").text("Wins: " + wins);
            $("#number-to-guess").text(targetNumber);


        }

        // Here we added an "else if" condition. If the user's counter ever exceeds the targetNumber...
        else if (counter >= targetNumber) {
            losts++;
            counter = 0;

            // Then they are alerted with a loss.
            crystalsAndTargetReset();
            $("#crystal-points").text(counter);
            $("#losts").text("Losses: " + losts);
            $("#number-to-guess").text(targetNumber);


        }
    }

    function crystalsAndTargetReset() {
        targetNumber = Math.floor((Math.random() * (targetNumber_max - targetNumber_min) + 1) + targetNumber_min);
        crytsal_1 = Math.floor((Math.random() * crytsal_max - crytsal_min + 1) + crytsal_min);
        crytsal_2 = Math.floor((Math.random() * crytsal_max - crytsal_min + 1) + crytsal_min);
        crytsal_3 = Math.floor((Math.random() * crytsal_max - crytsal_min + 1) + crytsal_min);
        crytsal_4 = Math.floor((Math.random() * crytsal_max - crytsal_min + 1) + crytsal_min);

    }


});