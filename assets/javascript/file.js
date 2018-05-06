var config = {
    apiKey: "AIzaSyB243-GvZcJ45-dUlnJdEqNkhUH4RpDm20",
    authDomain: "traintime-71054.firebaseapp.com",
    databaseURL: "https://traintime-71054.firebaseio.com",
    projectId: "traintime-71054",
    storageBucket: "",
    messagingSenderId: "357146889632"
};


firebase.initializeApp(config);

var database = firebase.database();






$("#newButton").click(function () {

    event.preventDefault();

    var trainName = $("#trainName").val().trim();
    console.log("trainName", trainName);
    var destination = $("#destination").val().trim();
    console.log("destination", destination)
    var firstTrainTime = $("#firstTrainTime").val().trim();
    console.log("firstTrainTime", firstTrainTime)
    var frequency = $("#frequency").val().trim();
    console.log("frequency", frequency)

    var newTrain = {
        name: trainName,
        destination: destination,
        time: firstTrainTime,
        frequency: frequency
    };

    database.ref().push(newTrain);

    console.log(newTrain.name);
    console.log(newTrain.destination);
    console.log(newTrain.time);
    console.log(newTrain.frequency);

    alert("New Train Added");

    $("#trainName").val("");
    $("#destination").val("");
    $("#firstTrainTime").val("");
    $("#frequency").val("");

});

database.ref().on("child_added", function(childSnapshot, prevChildKey) {

    console.log(childSnapshot.val());
  
  
    var trainName = childSnapshot.val().name;
    var destination = childSnapshot.val().destination;
    var firstTrainTime = childSnapshot.val().time;
    var frequency = childSnapshot.val().frequency;
    var firstTrainArr = firstTrainTime.split(":");
    console.log("this is", firstTrainArr);

  
   
    console.log(trainName);
    console.log(destination);
    console.log("Hello its", firstTrainTime);
    console.log(frequency);


  var nextArrival = 
  console.log(nextArrival);
  
  var minutesAway = 
  console.log(minutesAway);

  $("#train-table > tbody").append("<tr><td>" + trainName + "</td><td>" + destination + "</td><td>" +
  frequency + "</td><td>" + nextArrival + "</td><td>" + minutesAway + "</td><td>");
});


