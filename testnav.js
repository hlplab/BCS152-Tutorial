
$('#nav').html(
'<div class="collapse navbar-collapse">' +
  '<!-- Nav tabs -->' +
  '<ul class="nav navbar-nav">' +
    '<li id="home" ><a href="BCSFrontpage.html">Home</a></li>' +
    '<li><a href="#"></a></li>' +
    '<li id="start" ><a href="BCSHDIStart.html">How Do I Start?</a></li>' +
    '<li><a href="#"></a></li>' +
    '<li class="dropdown" id="design">'+
    '<a class="dropdown-toggle" data-toggle="dropdown" href="BCSDesign.html">Design' +
    '<span class="caret"></span></a>' +
    '<ul class="dropdown-menu">' +
      '<li><a href="BCSDesign.html" style="color:#2980b9">Design</a></li>' +
      '<li><a href="BCSParticipants.html" style="color:#2980b9">Participants</a></li>' +
      '<li><a href="BCSSPRDesign.html" style="color:#f39c12">SPR Design</a></li>' +
      '<li><a href="BCSSPRParticipants.html" style="color:#f39c12">SPR Participants</a></li>' +
      '</ul>' +
    '</li>' +
    '<li><a href="#"></a></li>' +
    '<li class="dropdown" id="createstim">'+
      '<a class="dropdown-toggle" data-toggle="dropdown" href="BCSItems.html">Materials' +
      '<span class="caret"></span></a>' +
      '<ul class="dropdown-menu">' +
        '<li><a href="BCSItems.html" style="color:#2980b9">Items & Lists</a></li>' +
        '<li><a href="BCSFillers.html" style="color:#2980b9">Fillers</a></li>' +
        '<li><a href="BCSCritical.html" style="color:#2980b9">Critical Items</a></li>' +
        '<li><a href="BCSConfounds.html" style="color:#2980b9">Confounds</a></li>' +
        '<li><a href="BCSSPRItems.html" style="color:#f39c12">SPR Items & Lists</a></li>' +
        '<li><a href="BCSSPRFillers.html" style="color:#f39c12">SPR Fillers</a></li>' +
        '<li><a href="BCSSPRCritical.html" style="color:#f39c12">SPR Crticial Items</a></li>' +
        '<li><a href="BCSSPRGoodStimuli.html" style="color:#f39c12">SPR Making Good Stimuli</a></li>' +
        '</ul>' +
    '</li>' +
    '<li><a href="#"></a></li>' +
    '<li class="dropdown" id="procedure">'+
    '<a class="dropdown-toggle" data-toggle="dropdown" href="BCSProcedure.html">Procedure' +
    '<span class="caret"></span></a>' +
    '<ul class="dropdown-menu">' +
      '<li><a href="BCSProcedure.html" style="color:#2980b9">Procedure</a></li>' +
      '<li><a href="BCSSPRProcedure.html" style="color:#f39c12">SPR Procedure</a></li>' +
      '</ul>' +
    '</li>' +
    '<li><a href="#"></a></li>' +
    '<li class="dropdown" id="analysis">'+
      '<a class="dropdown-toggle" data-toggle="dropdown" href="BCSAnalysis.html">Analysis' +
      '<span class="caret"></span></a>' +
      '<ul class="dropdown-menu">' +
        '<li><a href="BCSGenAnalysis.html" style="color:#2980b9">Overview</a></li>' +
        '<li><a href="BCSAnnotation.html" style="color:#2980b9">Annotation & Scoring</a></li>' +
        '<li><a href="BCSExclusion.html" style="color:#2980b9">Exclusion</a></li>' +
        '<li><a href="BCSResults.html" style="color:#2980b9">Results</a></li>' +
        '<li><a href="BCSVSReport.html" style="color:#2980b9">Visual Report</a></li>' +
        '<li><a href="BCSSPRAnalysis.html" style="color:#f39c12">SPR Overview</a></li>' +
        '<li><a href="BCSSPRAnnotation.html" style="color:#f39c12">SPR Annotation & Scoring</a></li>' +
        '<li><a href="BCSSPRExclusion.html" style="color:#f39c12">SPR Exclusion</a></li>' +
        '<li><a href="BCSSPRResults.html" style="color:#f39c12">SPR Results</a></li>' +
        '<li><a href="BCSSPRVSReport.html" style="color:#f39c12">SPR Visual Report</a></li>' +
        '</ul>' +
    '</li>' +
    '<li><a href="#"></a></li>' +
    '<li class="dropdown" id="interpret">'+
    '<a class="dropdown-toggle" data-toggle="dropdown" href="BCSParticipants.html">Interpretation' +
    '<span class="caret"></span></a>' +
    '<ul class="dropdown-menu">' +
      '<li><a href="BCSInterpretation.html" style="color:#2980b9">Interpretation</a></li>' +
      '<li><a href="BCSSPRInterpretation.html" style="color:#f39c12">SPR Interpretation</a></li>' +
      '</ul>' +
    '</li>' +
    '<li><a href="#"></a></li>' +
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
