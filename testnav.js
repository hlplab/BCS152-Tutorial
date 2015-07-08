
$('#nav').html(
'<div class="collapse navbar-collapse">' +
  '<!-- Nav tabs -->' +
  '<ul class="nav navbar-nav">' +
    '<li id="home" ><a href="TestBCSFrontpage.html">Home</a></li>' +
    '<li id="design"><a href="TestBCSDesign.html">Design</a></li>' +
    '<li id="method"><a href="BCSMethod.html">Method</a></li>' +
    '<li id="createstim"><a href="BCSStimuli.html">Creating Stimuli</a></li>' +
    '<li id="spr"><a href="BCSSPR.html">Self-Paced Reading</a></li>' +
    '<li id="analysis" ><a href="BCSAnalysis.html">Stimuli Analysis</a></li>' +
  '</ul>' +
'</div>');
//reference to the parent frame to get to the daughter frames.
//

$(document).ready(function() {

  //Pop up JS
  $('.LearnMoreBtn').on('click', function() {
    $(this).siblings('.overlay').show();
    $(this).siblings('.popup').show();
  });

  $('.CloseBtn').on('click', function() {
    $(this).parent().hide(function() {
      $(this).siblings('.overlay').hide();
    });
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
