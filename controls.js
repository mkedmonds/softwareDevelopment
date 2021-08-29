let studentName = ["chigwira", "craig", "danh1234", "davidbee", "evanCallaghan", "giddy_code", "grant", "jacobH", "maddiee", "morganGrant", "nguyen", "nick"]

$(document).ready(function() {
    
    alert("JQUERY WORKING");


    for (let i = 0; i < studentName.length; i++) {
        $("#studNames").append(new Option(studentName[i], studentName[i]));
        
    }

    $("#studNames").change(function() {
        
        let sChoice = $("#studNames").val();

        //alert("YOU HAVE CHOSEN " + sChoice);

        $("#studInfo").html("");

        if (sChoice == "maddiee") {

            //console.log("maddiee TEST")

            $.ajax({url: "maddiee.txt", success: function(result){

                console.log("maddiee TEST5")

                $("#studInfo").html(result);
              }});
        }

        if (sChoice == "chigwira") {

            //console.log("chigwira TEST")

            $.ajax({url: "chigwira.txt", success: function(result1){

                console.log("chigwira TEST5")

                $("#studInfo").html(result1);
              }});
        }

        if (sChoice == "evanCallaghan") {

            //console.log("evanCallaghan TEST")

            $.ajax({url: "evanCallaghan.txt", success: function(result2){

                console.log("evanCallaghan TEST5")

                $("#studInfo").html(result2);
              }});
        }

        if (sChoice == "davidbee") {

            //console.log("davidbee TEST")

            $.ajax({url: "davidbee.txt", success: function(result3){

                console.log("davidbee TEST5")

                $("#studInfo").html(result3);
              }});
        }

        if (sChoice == "nguyen") {

            //console.log("nguyen TEST")

            $.ajax({url: "nguyen.txt", success: function(result4){

                console.log("nguyen TEST5")

                $("#studInfo").html(result4);
              }});
        }

        if (sChoice == "danh1234") {

            //console.log("danh1234 TEST")

            $.ajax({url: "danh1234.txt", success: function(result5){

                console.log("danh1234 TEST5")

                $("#studInfo").html(result5);
              }});
        }

    });
});