$(document).ready(function(){

  console.log("ready?");
  // Question 1: Add a class "active" to the element with "Cats" using the elements class name
  // Write your solution here
   $('.Cats').addClass("active");

    
  // Question 2: Add a class "active" to the element with "Walrus" using the elements ID name
  // Write your solution here
   $('#Walrus').addClass("active");

    
  // Question 3: Add a class "active" to the element with "Camel" using jquery's eq() method
  // Write your solution here
   $('.list-group-item').eq(4).addClass("active");
  
  // Question 4: On a "click" event to the html element ".item", add class "flip".
  // Write your solution here
    $(".item").click(function(){
      // "this"-the item you clicked on 
      $(this).addClass("flip");

  });

  // Question 5 (Bonus): Use jquery's animate() method to do something.
  // Write your solution here
  $("#go").click(function(){
    $("#block").animate({
      width: "70%",
      opacity: .04,
      marginLeft: "0.6in",
      fontSize: "3em",
      borderWidth: "10px"
    }, 1500);
  });

});

