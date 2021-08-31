let studentName = ["chigwira", "craig", "danh1234", "davidbee", "evanCallaghan", "giddy_code", "grant", "jacobH", "jacobT", "maddiee", "morganGant", "nguyen", "nick"]

$(document).ready(function() {
    
    //alert("JQUERY WORKING");


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

                console.log("maddiee TEST")

                $("#studInfo").html(result);
              }});
        }

        if (sChoice == "chigwira") {

            //console.log("chigwira TEST")

            $.ajax({url: "chigwira.txt", success: function(result1){

                console.log("chigwira TEST")

                $("#studInfo").html(result1);
              }});
        }

        if (sChoice == "evanCallaghan") {

            //console.log("evanCallaghan TEST")

            $.ajax({url: "evanCallaghan.txt", success: function(result2){

                console.log("evanCallaghan TEST")

                $("#studInfo").html(result2);
              }});
        }

        if (sChoice == "davidbee") {

            //console.log("davidbee TEST")

            $.ajax({url: "davidbee.txt", success: function(result3){

                console.log("davidbee TEST")

                $("#studInfo").html(result3);
              }});
        }

        if (sChoice == "nguyen") {

            //console.log("nguyen TEST")

            $.ajax({url: "nguyen.txt", success: function(result4){

                console.log("nguyen TEST")

                $("#studInfo").html(result4);
              }});
        }

        if (sChoice == "danh1234") {

            //console.log("danh1234 TEST")

            $.ajax({url: "danh1234.txt", success: function(result5){

                console.log("danh1234 TEST")

                $("#studInfo").html(result5);
              }});
        }

        if (sChoice == "morganGant") {

            //console.log("morganGant TEST")

            $.ajax({url: "morganGant.txt", success: function(result6){

                console.log("morganGant TEST")

                $("#studInfo").html(result6);
              }});
        }

        if (sChoice == "craig") {

            console.log("craig TEST")

            $.ajax({url: "craig.txt", success: function(result7){

                console.log("craig TEST2")

                $("#studInfo").html(result7);
              }});
        }

        if (sChoice == "giddy_code") {

            //console.log("giddy_code TEST")

            $.ajax({url: "giddy_code.txt", success: function(result8){

                console.log("giddy_code TEST")

                $("#studInfo").html(result8);
              }});
        }

        if (sChoice == "grant") {

            //console.log("grant TEST")

            $.ajax({url: "grant.txt", success: function(result9){

                console.log("grant TEST")

                $("#studInfo").html(result9);
              }});
        }

        if (sChoice == "jacobH") {

            //console.log("jacobH TEST")

            $.ajax({url: "jacobH.txt", success: function(result10){

                console.log("jacobH TEST")

                $("#studInfo").html(result10);
              }});
        }

        if (sChoice == "jacobT") {

            //console.log("jacobT TEST")

            $.ajax({url: "jacobT.txt", success: function(result11){

                console.log("jacobT TEST")

                $("#studInfo").html(result11);
              }});
        }

        if (sChoice == "nick") {

            //console.log("nick TEST")

            $.ajax({url: "nick.txt", success: function(result12){

                console.log("nick TEST")

                $("#studInfo").html(result12);
              }});
        }

    });
});