$(document).ready(function(){

  console.log("ready?");

  // Question 1: Add a class "active" to the element with "Cats" using the elements class name
  // Write your solution here

  $('#Cats').addClass('active');


  // Question 2: Add a class "active" to the element with "Walrus" using the elements ID name
  // Write your solution here
  $('#Walrus').addClass('active');


  // Question 3: Add a class "active" to the element with "Camel" using jquery's eq() method
  // Write your solution here
  $('.list-group-item').eq(4).addClass('active');

  // Question 4: On a "click" event to the html element ".item", add class "flip".
  // Write your solution here

  $('.item').click(function(event){
    $(this).addClass('flip');

  });

  // Question 5 (Bonus): Use jquery's animate() method to do something.
  // Write your solution here


$('.list-group-item').hover(function() {
    $(this).animate({"color":"red","font-size":"24px", "marginTop": "24px"});
  },
    function() {
    $(this).animate({"color": "white","font-size" : "12px", "marginTop": "0px"});

    });



$('.Cats').click(function() {
    if ($(this).text() === 'Cats') {
         $(this).text('MEEEEEOWWWW');
    }
    else {
        $(this).text('Cats');
    }


});







//toggle EXAMPLE >> use .toggleClass above.

  $('.flipper').click(function(event){
  $('.front').animate({
    opactity:0.8,
    height: 'toggle'
  }, 500, function(){

  });
});



});









