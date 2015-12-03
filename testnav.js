
$('#nav').html(
'<div class="collapse navbar-collapse bckgrnd">' +
  '<!-- Nav tabs -->' +
  '<ul class="nav navbar-nav">' +
    '<li id="home" ><a href="index.html">Home</a></li>' +
    '<li><a href="#"></a></li>' +
    '<li id="start" ><a href="Start.html">How Do I Start?</a></li>' +
    '<li><a href="#"></a></li>' +
    '<li class="dropdown" id="design">'+
    '<a class="dropdown-toggle" data-toggle="dropdown" href="Design.html">Design' +
    '<span class="caret"></span></a>' +
    '<ul class="dropdown-menu">' +
      '<li id="des"><a href="Design.html" style="color:#2980b9">Design</a></li>' +
      '<li><a href="Participants.html" style="color:#2980b9">Participants</a></li>' +
      '<li><a href="CriticalItems.html" style="color:#2980b9">Critical Items</a></li>' +
      '<li><a href="DesignTypes.html" style="color:#2980b9">Types of Design</a></li>' +
      '<li id="sprdes"><a href="SPRDesign.html" style="color:#f39c12">SPR Example: Design</a></li>' +
      '</ul>' +
    '</li>' +
    '<li><a href="#"></a></li>' +
    '<li class="dropdown" id="procedure">'+
    '<a class="dropdown-toggle" data-toggle="dropdown" href="Procedure.html">Procedure' +
    '<span class="caret"></span></a>' +
    '<ul class="dropdown-menu">' +
      '<li><a href="SPRProcedure.html" style="color:#f39c12">SPR: Procedure</a></li>' +
      '</ul>' +
    '</li>' +
    '<li><a href="#"></a></li>' +
    '<li class="dropdown" id="createstim">'+
      '<a class="dropdown-toggle" data-toggle="dropdown" href="Items.html">Materials' +
      '<span class="caret"></span></a>' +
      '<ul class="dropdown-menu">' +
        '<li><a href="SPRCriticalItems.html" style="color:#f39c12">SPR Example: Critical Items</a></li>' +
        '<li><a href="SPRRegion.html" style="color:#f39c12">SPR Example: Defining Sentence Regions</a></li>' +
        '<li><a href="SPRGoodItems.html" style="color:#f39c12">SPR Example: How to Make Good Critical Items</a></li>' +
        '<li><a href="Fillers.html" style="color:#2980b9">Filler Items</a></li>' +
        '<li><a href="SPRGoodFillers.html" style="color:#f39c12">SPR Example: How To Make Good Filler Items</a></li>' +
        '<li><a href="SPRComprehension.html" style="color:#f39c12">SPR Example: Comprehension Questions</a></li>' +
        '<li><a href="Lists.html" style="color:#2980b9">Lists & Latin Square Design</a></li>' +
        '<li><a href="SPRLists.html" style="color:#f39c12">SPR Example: Lists</a></li>' +
        '<li><a href="SPRFormat.html" style="color:#f39c12">SPR Example: Preparing your Experiment for CrowdExp</a></li>' +
        '</ul>' +
    '</li>' +
    '<li><a href="#"></a></li>' +
    '<li class="dropdown" id="analysis">'+
      '<a class="dropdown-toggle" data-toggle="dropdown" href="Analysis.html">Analysis' +
      '<span class="caret"></span></a>' +
      '<ul class="dropdown-menu">' +
        '<li><a href="Analysis.html" style="color:#2980b9">Analysis</a></li>' +
        '<li><a href="SPRAnalysis.html" style="color:#f39c12">SPR Example: Analysis</a></li>' +
        '<li><a href="Annotation.html" style="color:#2980b9">Annotation & Scoring</a></li>' +
        '<li><a href="SPRAnnotation.html" style="color:#f39c12">SPR Example: Annotation & Scoring</a></li>' +
        '<li><a href="Exclusion.html" style="color:#2980b9">Exclusion</a></li>' +
        '<li><a href="SPRExclusion.html" style="color:#f39c12">SPR Example: Exclusion</a></li>' +
        '<li><a href="Results.html" style="color:#2980b9">Results</a></li>' +
        '<li><a href="SPRResults.html" style="color:#f39c12">SPR Example: Results</a></li>' +
        '<li><a href="VSReport.html" style="color:#2980b9">Visual Report</a></li>' +
        '<li><a href="SPRVSReport.html" style="color:#f39c12">SPR Example: Visual Report</a></li>' +
        '</ul>' +
    '</li>' +
    '<li><a href="#"></a></li>' +
    '<li class="dropdown" id="interpret">'+
    '<a class="dropdown-toggle" data-toggle="dropdown" href="Interpretation.html">Interpretation' +
    '<span class="caret"></span></a>' +
    '<ul class="dropdown-menu">' +
      '<li><a href="Interpretation.html" style="color:#2980b9">Interpretation</a></li>' +
      '<li><a href="SPRInterpretation.html" style="color:#f39c12">SPR Example: Interpretation</a></li>' +
      '</ul>' +
    '</li>' +
    '<li><a href="#"></a></li>' +
    '<li><a href="#"></a></li>' +
    '<li id="about"><a href="About.html">About</a></li>' +
    '<li id="resource"><a href="Resources.html">Resources</a></li>' +
    '<li id="glossary"><a href="Glossary.html">Glossary</a></li>' +
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
