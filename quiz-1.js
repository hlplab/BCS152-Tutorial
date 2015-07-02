$(document).ready(function() {

    _.templateSettings = {
      interpolate: /\{\{(.+?)\}\}/g
    };

    var template = _.template('<p><strong>Question {{number}}:</strong> The correct answer is <strong>{{answer}}</strong>.</p>');

  $('#results').on('click', function() {

    $('#categorylist').empty();

    var questions = [
      { number: 1, answer: 'a'},
      { number: 2, answer: 'b'},
      { number: 3, answer: 'c'},
      { number: 4, answer: 'd'},
      { number: 5, answer: 'a'},
      { number: 6, answer: 'b'},
      { number: 7, answer: 'c'},
      { number: 8, answer: 'd'},
      { number: 9, answer: 'a'},
      { number: 10, answer: 'b'}
    ];

    if (! _.every(_.pluck(questions, 'number'), function(i) {
          return $('input[name="q' + i + '"]:checked').val();
        })
        ) {
      alert("You're not done yet!");
    } else {
      var incorrect = _.reject(questions, function(e) {
        return $('input[name="q' + e.number + '"]:checked').val() === e.answer;
      });

      var catStr = '';
      if (incorrect.length === 0) {
        catStr = 'You got everything correct! Congrats';
      } else {
        catStr = 'You answered the following questions incorrectly: ' +
                   _.pluck(incorrect, 'number').join(', ') + '';
      }
      $('#categorylist').append('<p>' + catStr + '</p>');
      $('#categorylist').show('slow');

      _.each(incorrect, function(e) {
        $('#categorylist').append(template(e));
      });
    }
});
