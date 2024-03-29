//For readability and clarity it is good practice to declare variables at the beginning of the JS document if possible
var churchillSpeech = {
      'author': 'Churchill',
      'year': 1940,
      'yearIsBCE': false,
      'authorAge': '66'
    },
    ghandiSpeech = {
      'author': 'Ghandi',
      'year': 1942,
      'yearIsBCE': false,
      'authorAge': '73'
    },
    demosthenesSpeech = {
      'author': 'Demosthenes',
      'year': 342,
      'yearIsBCE': true,
      'authorAge': '42'
    },
    speechesArray = [churchillSpeech, ghandiSpeech, demosthenesSpeech],
    donatePrompt;

      //function that returns a string with the author and year of the provided speech according to the array under each event handler.
    function getAuthAndYearString(speech){
      var responseString = 'This speech was written by ' + speech.author + ' in ' + speech.year + '<br>' + '<br>';
      return responseString;
    }


      //Checks to see if the yearIsBCE boolean is true if it is then the html changes to the first option if not it selects the second option
    function displayBCEString(year) {
      if(year.yearIsBCE === true){
        document.getElementById('ConsoleDisplay').innerHTML += 'This speech took place before the common era.' + '<br>' + '<br>';
      } else{
        document.getElementById('ConsoleDisplay').innerHTML += 'This speech took place during the common era.' + '<br>' + '<br>';
      } 
    }

    function getOldestOrYoungestString(speech) {
        var oldest = speechesArray[0].year,
            newest = speechesArray[0].year;

      for(var i = 0; i < speechesArray.length; i++){
          if(speechesArray[i].year < oldest){
            oldest = speechesArray[i].year;
          }
          if(speechesArray[i].year > newest){
            newest = speechesArray[i].year;
          }
        }

          if(speech.year === oldest){
            document.getElementById('ConsoleDisplay').innerHTML += 'This is the oldest speech on the page.' + '<br>';
          }
          else if(speech.year === newest){
            document.getElementById('ConsoleDisplay').innerHTML += 'This is the most recent speech on the page.' + '<br>';
          } else {
            document.getElementById('ConsoleDisplay').innerHTML += 'This is neither the most recent or the oldest speech on the page.' + '<br>';
          }
      }

document.getElementById('BtnDonate').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Donate" button.
  var donationDisplay = document.createElement('h3'),
      donationText,
      articleElements;

  donatePrompt = window.prompt('How much would you like to donate?');

  if(donatePrompt >= 100){
    donationText = document.createTextNode('Thank you for your very generous donation!');
    donationDisplay.setAttribute('style', 'color: #DB152C;');

    articleElements = document.getElementsByTagName('article');
    for(var i = 0; i < articleElements.length; i++){
      articleElements[i].className = 'generous-donation';
    }
  }else{
    donationText = document.createTextNode('Thank you for your donation of $' + donatePrompt);
  }

  donationDisplay.appendChild(donationText);
  document.getElementById('SideNav').appendChild(donationDisplay);
});

document.getElementById('BtnChurchill').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Churchill" button.

  document.getElementById("ConsoleDisplay").innerHTML = getAuthAndYearString(speechesArray[0]);

  displayBCEString(speechesArray[0]);

  getOldestOrYoungestString(speechesArray[0]);

});

document.getElementById('BtnGhandi').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Ghandi" button.

  document.getElementById("ConsoleDisplay").innerHTML = getAuthAndYearString(speechesArray[1]);

  displayBCEString(speechesArray[1]);

  getOldestOrYoungestString(speechesArray[1]);
});

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Demosthenes" button.

  document.getElementById("ConsoleDisplay").innerHTML = getAuthAndYearString(speechesArray[2]);

  displayBCEString(speechesArray[2]);

  getOldestOrYoungestString(speechesArray[2]);
});