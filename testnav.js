
$('#nav').html(
'<div class="collapse navbar-collapse">' +
  '<!-- Nav tabs -->' +
  '<ul class="nav navbar-nav">' +
    '<li id="home" ><a href="TestBCSFrontpage.html">Home</a></li>' +
    '<li class="dropdown" id="design">'+
    '<a class="dropdown-toggle" data-toggle="dropdown" href="TestBCSDesign.html">Design' +
    '<span class="caret"></span></a>' +
    '<ul class="dropdown-menu">' +
      '<li><a href="TestBCSDesign.html" style="color:#2980b9">Design</a></li>' +
      '<li><a href="SPRBCSDesign.html" style="color:#f39c12">Design : SPR</a></li>' +
      '</ul>' +
    '</li>' +
    '<li id="method"><a href="BCSMethod.html">Method</a></li>' +
    '<li class="dropdown" id="createstim">'+
      '<a class="dropdown-toggle" data-toggle="dropdown" href="BCSStimuli.html">Creating Stimuli' +
      '<span class="caret"></span></a>' +
      '<ul class="dropdown-menu">' +
        '<li><a href="BCSItems.html" style="color:#2980b9">Items & Lists</a></li>' +
        '<li><a href="BCSFillers.html" style="color:#2980b9">Fillers</a></li>' +
        '<li><a href="SPRBCSItems.html" style="color:#f39c12">SPR : Items & Lists</a></li>' +
        '<li><a href="BCSSPRCritical.html" style="color:#f39c12">SPR : Crticial Items</a></li>' +
        '</ul>' +
    '</li>' +
    '<li id="spr"><a href="BCSSPR.html">Self-Paced Reading</a></li>' +
    '<li id="analysis"><a href="BCSAnalysis.html">Stimuli Analysis</a></li>' +
    '<li id="resource"><a href="BCSResources.html">Resources</a></li>' +
    '<li id="glossary"><a href="BCSGlossary.html">Glossary</a></li>' +
  '</ul>' +
'</div>');
//reference to the parent frame to get to the daughter frames.
//

$(document).ready(function() {

  //Pop up JS
  $('.LearnMoreBtn').on('click', function() {
    $(this).next('.popup').show();
  });

  $('.CloseBtn').on('click', function() {
    $(this).parent().hide();
  });

  $('[data-toggle="tooltip"]').tooltip();
});


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
