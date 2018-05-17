  //Create our data structure
  var data = {
    backgrounds: ['#EC7063', '#F4D03F', '#884EA0', '#2874A6'],
    quotes: {

      seneca: [
        'We suffer more in imagination than in reality.',
        'Wherever there is a human being, there is an opportunity for a kindness.',
        'Silence is a lesson learned through life’s many sufferings.',
        'It does not matter what you bear, but how you bear it.',
        'The whole future lies in uncertainty: live immediately.',
        'The man who has anticipated the coming of troubles takes away their power when they arrive.',
        'To bear trials with a calm mind robs misfortune of its strength and burden.',
        'We should always allow some time to elapse, for time discloses the truth.',
        'It is not that we are given a short life but we make it short, and we are not ill-supplied but wasteful of it.',
        'Two elements must therefore be rooted out once for all, – the fear of future suffering, and the recollection of past suffering; since the latter no longer concerns me, and the former concerns me not yet.'
      ],

      plato: [
        'Every heart sings a song, incomplete, until another heart whispers back. Those who wish to sing always find a song. At the touch of a lover, everyone becomes a poet.',
        'If women are expected to do the same work as men, we must teach them the same things.',
        'We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light.',
        'The price good men pay for indifference to public affairs is to be ruled by evil men.',
        'Never discourage anyone who continually makes progress, no matter how slow.',
        'Good people do not need laws to tell them to act responsibly, while bad people will find a way around the laws.',
        'There is truth in wine and children.',
        'Human behavior flows from three main sources: desire, emotion, and knowledge.',
        'Excellence is not a gift, but a skill that takes practice. We do not act ‘rightly’ because we are ‘excellent’, in fact we achieve ‘excellence’ by acting ‘rightly.',
        'Good actions give strength to ourselves and inspire good actions in others.'
      ]
    }
  }

  //Create the Methods for our APP
  var methods = {
  //Give a different background color when clicking the main button
    changeBackground: function() {
      let random = Math.floor(Math.random() * data.backgrounds.length);
      let color = data.backgrounds[random];
      $('body').css('background-color', color);
      console.log('Changed the background color to ' + color);
    },
  //Select an Author randomly
    selectAuthor: function() {
      let authors = ['seneca', 'plato'];
      let random = Math.floor(Math.random() * authors.length);
      console.log('Author for this quote: ' + authors[random]);
      return authors[random];
    },
  //Select a random Quote from the previous Author
    selectQuote: function(author) {
      let random = Math.floor(Math.random() * data.quotes[author].length);
      return data.quotes[author][random];
    },
  //Insert the Author + Quote into the UI
    displayQuote: function(author, quote) {
      let div = $('<div class="' + author + '"></div>')
      let html = '';
      html += '<h3>' + author + '</h3>';
      html += '<p>' + quote + '</p>';
      div.html(html);
      (div.fadeIn('slow')).appendTo('.quotes-container');
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
