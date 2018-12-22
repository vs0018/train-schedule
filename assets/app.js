    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyAknC--rGI2sx8FVKjXDjyDGgIh4RndILs",
        authDomain: "train-schedule-83cf0.firebaseapp.com",
        databaseURL: "https://train-schedule-83cf0.firebaseio.com",
        projectId: "train-schedule-83cf0",
        storageBucket: "train-schedule-83cf0.appspot.com",
        messagingSenderId: "761811730905"
    };
    firebase.initializeApp(config);
    
    // Assumptions
    var tFrequency = 3;

    // Time is 3:30 AM
    var firstTime = "03:30";

    // First Time (pushed back 1 year to make sure it comes before current time)
    var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
    console.log(firstTimeConverted);

    // Current Time
    var currentTime = moment();
    console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

    // Difference between the times
    var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
    console.log("DIFFERENCE IN TIME: " + diffTime);

    // Time apart (remainder)
    var tRemainder = diffTime % tFrequency;
    console.log(tRemainder);

    // Minute Until Train
    var tMinutesTillTrain = tFrequency - tRemainder;
    console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

    // Next Train
    var nextTrain = moment().add(tMinutesTillTrain, "minutes");
    console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));