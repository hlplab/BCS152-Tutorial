$(document).ready(function() {

    _.templateSettings = {
      interpolate: /\{\{(.+?)\}\}/g
    };
    var template = _.template('<div class="alert alert-warning" role="alert">' +
    '<strong>Question {{number}}:</strong> The correct answer is <strong>{{answer}}</strong>.</div>');

  $('#results').on('click', function() {

    $('#categorylist').empty();
    $('#alerts').empty();

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

    var all_answered = function() {
      return _.every(_.pluck(questions, 'number'), function(i) {
            return $('input[name="q' + i + '"]:checked').val();
      });
    };

    if (! all_answered()) {
      $('#alerts').append('<div class="alert alert-danger" role="alert">You\'re not done yet!</div>');
    } else {
      var incorrect = _.reject(questions, function(e) {
        return $('input[name="q' + e.number + '"]:checked').val() === e.answer;
      });

      var catStr = '';
      if (incorrect.length === 0) {
        $('#alerts').append('<div class="alert alert-success" role="alert">You got everything correct! Congrats</div>')
        //catStr = 'You got everything correct! Congrats';
      } else {
        $('#alerts').append('<div class="alert alert-danger" role="alert">' +
                            'You answered the following questions incorrectly: ' +
                            _.pluck(incorrect, 'number').join(', ') + '</div>');
      }

      _.each(incorrect, function(e) {
        $('#alerts').append(template(e));
      });
    }
  });
});
