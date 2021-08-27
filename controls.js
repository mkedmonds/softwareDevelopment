let studentName = ["chigwira", "craig", "dahn123", "davidbee", "evenCallaghan", "giddy_code", "grant", "jacobH", "maddiee", "morganGrant", "nguyen", "nick"]

$(document).ready(function() {
    
    alert("JQUERY WORKING");


    for (let i = 0; i < studentName.length; i++) {
        $("#studNames").append(new Option(studentName[i], studentName[i]));
        
    }

    $("#studNames").change(function() {
        
        let sChoice = $("#studNames").val();

        alert("YOU HAVE CHOSEN " + sChoice);

        $("#studInfo").html("");

    })
})