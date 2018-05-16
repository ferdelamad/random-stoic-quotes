//Create our data structure
var data = {
  backgrounds: ['#EC7063', '#F4D03F', '#884EA0', '#2874A6'],
  quotes: {
    seneca: ['A simple quote that Seneca said', 'another seneca quote', 'Seneca said a lot of good things in his life'],
    plato: ['A simple quote that Plato said', 'another plato quote', 'Plato said a lot of good things in his life']
  }
}

//Create our Methods for our APP
var methods = {
//Give a different background color when clicking the main button
  changeBackground: function() {
    let random = Math.floor(Math.random() * data.backgrounds.length);
    let color = data.backgrounds[random];
    $('body').css('background-color', color);
    console.log('Changed the background color to ' + color);
  },

  selectAuthor: function() {
    let authors = ['seneca', 'plato'];
    let random = Math.floor(Math.random() * authors.length);
    console.log('Author for this quote: ' + authors[random]);
    return authors[random];
  },

  selectQuote: function(author) {
    let random = Math.floor(Math.random() * data.quotes[author].length);
    return data.quotes[author][random];
  },

  displayQuote: function(author, quote) {
    let div = $('<div class="' + author + '"></div>')
    let html = '';
    html += '<h3>' + author + '</h3>';
    html += '<p>' + quote + '</p>';
    div.html(html);
    (div.fadeIn('slow')).appendTo('.container');
  }

};

//Global controllet of our APP
$('.change').click(function(event){
  //Changue the background
  methods.changeBackground();
  //Delete previous quote if there is one
    //Get the siblings of the target button and hide them
  $(event.target).siblings().hide();
  //Select a random author
  var author = methods.selectAuthor();
  //Select a random quote from the previous author
  var quote = methods.selectQuote(author);
  //Display the quote on the UI interface
  methods.displayQuote(author, quote);
});
