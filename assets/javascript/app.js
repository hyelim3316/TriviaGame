
    var number = 30;
    var intervalId;

    $("#start").on("click", run);

    function run() {
      clearInterval(intervalId);
      intervalId = setInterval(decrement, 1000);
    }

    function decrement() {

      number--;

      $("#show-number").html("<h2>" + number + "</h2>");


      if (number === 0) {

        alert("Time Up!");
      }
    }