var targetNumber=Math.round( Math.random()*100 );
var count=0;
  $(document).ready(function() {
    $('#verify').click(function() {
      var inputNumber=$('#input').val();

      if(inputNumber > targetNumber){
      count++
      $('#result').css('color', 'red');
      $('#result').text(inputNumber + " est trop grand, réessayez.");
    }
      if(inputNumber < targetNumber){
      count++
      $('#result').css('color', 'red');
      $('#result').text(inputNumber + " est trop petit, réessayez.");
    }
    if ( inputNumber == targetNumber){
       count ++;
       $('#result, #countResult').css('color','green');
       $('#result').text(inputNumber + ' est le bon nombre. Félicitations.');
       $('#countResult').text('Vous avez essayé ' + count +' fois.');
   }
    })

  })
