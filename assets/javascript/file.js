var config = {
  apiKey: "AIzaSyB243-GvZcJ45-dUlnJdEqNkhUH4RpDm20",
  authDomain: "traintime-71054.firebaseapp.com",
  databaseURL: "https://traintime-71054.firebaseio.com",
  projectId: "traintime-71054",
  storageBucket: "",
  messagingSenderId: "357146889632"
};

//firebase, api, etc
firebase.initializeApp(config);

var database = firebase.database();


$("#newButton").on("click", function (event) {
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

  // Uploads employee data to the database
  database.ref().push(newTrain);

  // Logs everything to console
  console.log(newTrain.name);
  console.log(newTrain.destination);
  console.log(newTrain.time);
  console.log(newTrain.frequency);
  // Alert
  alert("New Train Added");

  // Clears all of the text-boxes
  $("#trainName").val("");
  $("#destination").val("");
  $("#firstTrainTime").val("");
  $("#frequency").val("");
});

// 3. Create Firebase event for adding employee to the database and a row in the html when a user adds an entry
database.ref().on("child_added", function (childSnapshot, prevChildKey) {

  console.log(childSnapshot.val());

  // Store everything into a variable; snapshot
  var trainName = childSnapshot.val().name;
  var destination = childSnapshot.val().destination;
  var firstTrainTime = childSnapshot.val().time;
  var frequency = childSnapshot.val().frequency;
  var firstTrainArr = firstTrainTime.split(":");
  var trainTime = moment().hours(firstTrainArr[0]).minutes(firstTrainArr[1]);
  console.log("firstTrainArr", firstTrainArr);
  var maxMoment = moment.max(moment(), trainTime);
  console.log(maxMoment);
  if (trainTime === maxMoment) {
    var nextArrival = firstTrainTime.format("hh:mm A");
    var minutesAway = firstTrainTime.diff(moment(), "minutes");
  } else {


    var differenceTimes = moment().diff(firstTrainTime, "minutes");
    var tRemainder = differenceTimes % frequency;
    minutesAway = frequency - tRemainder;
    nextArrival
    nextArrival = moment().add(minutesAway, "m").format("hh:mm A");
  }





  var nextArrival =
    console.log(nextArrival);


  var minutesAway =
    console.log(minutesAway);

  // Add each train's data into the table
  $("#train-table > tbody").append("<tr><td>" + trainName + "</td><td>" + destination + "</td><td>" +
    frequency + "</td><td>" + nextArrival + "</td><td>" + minutesAway + "</td><td>");
});

