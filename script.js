$("#food").on("submit", function(event) {

      event.preventDefault(); 

      var $answer = $("#food-answer"); 
      var answer = $answer.val(); 

      if (answer === "food1") { 
          $("#food-result").text("YESSSS!");
      }
      else {  
          $("#food-result").text("Try Again!");
      }
});