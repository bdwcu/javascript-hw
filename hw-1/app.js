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
   $('.list-group-item').eq( 4 ).addClass("active");

  // Question 4: On a "click" event to the html element ".item", add class "flip".
  // Write your solution here
  $('.item').click(function(event){
    $(this).addClass('flip');   
  });

  $('.questions').hover(
      function(){
        $(this).animate({"font-size":"72px"},"fast");
    },
     function() {
        $(this).animate({"font-size": "16px"}, "fast");
   });


  $(".list-group-item").mouseover(
   function() {
      $(this).animate({"marginTop": "76px"}, "900");
  });    
 
   $(".list-group-item").mouseleave(
   function() {
      $(this).animate({"marginTop": "0px"}, "900");
   });




  // Question 5 (Bonus): Use jquery's animate() method to do something.
  // Write your solution here
  $(".flipper").click(function(event){
    $(".front").animate({
      opacity:0.8,
      height: 'toggle'
    }, 500, function(){
    });
  });
});
