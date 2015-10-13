$(document).ready(function() {

    _.templateSettings = {
      interpolate: /\{\{(.+?)\}\}/g
    };
    var template = _.template('<div class="alert alert-warning" role="alert">' +
    '<strong>Question {{number}}: </strong>{{tip}}</div>');

  $('#results').on('click', function() {

    $('#categorylist').empty();
    $('#alerts').empty();

    var questions = [
      { number: 1, answer: 'a', tip: 'Be smarter!'},
      { number: 2, answer: 'b', tip: 'Be smarter!'},
      { number: 3, answer: 'c', tip: 'Be smarter!'},
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
        $('#alerts').append('<div class="alert alert-success" role="alert">You got everything correct! Congrats</div>');
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
