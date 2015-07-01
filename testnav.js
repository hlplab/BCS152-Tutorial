
document.getElementById("nav").innerHTML =
"<div>" +

  <!-- Nav tabs -->
  "<ul class='nav nav-tabs' role='tablist' style='padding: 45px 200px 25px 300px;'>" +
    "<li role='presentation' class='active'><a href='TestBCSFrontpage.html' aria-controls='home' role='tab' data-toggle='tab'>Home</a></li>" +
    "<li role='presentation'><a href='TestBCSDesign.html' aria-controls='design' role='tab' data-toggle='tab'>Design</a></li>" +
    "<li role='presentation'><a href='#method' aria-controls='method' role='tab' data-toggle='tab'>Method</a></li>" +
    "<li role='presentation'><a href='#create' aria-controls='create' role='tab' data-toggle='tab'>Creating Stimuli</a></li>" +
    "<li role='presentation'><a href='#spr' aria-controls='spr' role='tab' data-toggle='tab'>Self-Paced Reading</a></li>" +
    "<li role='presentation'><a href='#analysis' aria-controls='analysis' role='tab' data-toggle='tab'>Creating Stimuli</a></li>" +
  "</ul>" +
"</div>"  ;
//reference to the parent frame to get to the daughter frames.
//
//Pop up JS
//Use the onload event so that we can make sure the DOM is at
//least mostly loaded before trying to get elements
// window.onload = function() {
//    //Get the DOM element that represents the <button> element.
//    //And set the onclick event
//    document.getElementById("LearnMoreBtn").onclick = function(){
//       //Set a variable to contain the DOM element of the overly
//       var overlay = document.getElementById("overlay");
//       //Set a variable to contain the DOM element of the popup
//       var popup = document.getElementById("popup");
//
//       //Changing the display css style from none to block will make it visible
//       overlay.style.display = "block";
//       //Same goes for the popup
//       popup.style.display = "block";
//    };
//
//    document.getElementById("CloseBtn").onclick = function(){
//        var overlay = document.getElementById("overlay");
//        var popup = document.getElementById("popup");
//        overlay.style.display = "none";
//        popup.style.display = "none";
//      };
// };

$(document).ready(function() {

  $('#LearnMoreBtn').on('click', function() {
    $('#overlay').show();
    $('#popup').show();
  });

  $('#CloseBtn').on('click', function() {
    $('#overlay').hide();
    $('#popup').hide();
  });

});

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})




/* Can I use this in order to change the active class?
<script>
function newDoc() {
    window.location.assign("http://www.w3schools.com")
}
</script>*/
/* Just a cool script! No idea for a practical use yet
<script>
$(document).ready(function(){
    $("button").click(function(){
        $("#div1").fadeIn();
        $("#div2").fadeIn("slow");
        $("#div3").fadeIn(3000);
    });
});
</script> */
/* I think this is the script to work with for my "active" class problem
<script>
$(document).ready(function(){
    $("div").click(function(){
        $("").addClass("active");
    });
});
</script> */
/* $( "a" ).trigger( "click" ); */
