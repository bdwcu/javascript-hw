$(document).ready(function(){

  console.log("ready?");
  // Question 1: Add a class "active" to the element with "Cats" using the elements class name
  // Write your solution here

  $( ".Cats" ).addClass( "active" );

  // Question 2: Add a class "active" to the element with "Walrus" using the elements ID name
  // Write your solution here
  $( "#Walrus").addClass( "active");


  // Question 3: Add a class "active" to the element with "Camel" using jquery's eq() method
  // Write your solution here
  $(".list-group li").eq(4).addClass("active");
  // Question 4: On a "click" event to the html element ".item", add class "flip".
  // Write your solution here
  $(".item").click(function(){
    $(".item").addClass("flip").animate({opacity: 0}, 1000,function ()
    {
        $('.item').animate({opacity:1}, 1000);
    })
  });
  // Question 5 (Bonus): Use jquery's animate() method to do something.
  // Write your solution here
});
