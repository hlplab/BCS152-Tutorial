
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

$(document).ready(function() {

  //Pop up JS
  $('#LearnMoreBtn').on('click', function() {
    $('#overlay').show();
    $('#popup').show();
  });

  $('#CloseBtn').on('click', function() {
    $('#overlay').hide();
    $('#popup').hide();
  });

  $('[data-toggle="tooltip"]').tooltip();
});




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
