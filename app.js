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
      ],

      marcusAurelius: [
        'When you arise in the morning, think of what a precious privilege it is to be alive - to breathe, to think, to enjoy, to love.',
        'It never ceases to amaze me: we all love ourselves more than other people, but care more about their opinions than our own.',
        'Everything we hear is an opinion, not a fact. Everything we see is a perspective, not the truth.',
        'The happiness of your life depends upon the quality of your thoughts.',
        'If you are distressed by anything external, the pain is not due to the thing itself, but to your estimate of it; and this you have the power to revoke at any moment.',
        'You have power over your mind - not outside events. Realize this, and you will find strength.',
        'The object of life is not to be on the side of the majority, but to escape finding oneself in the ranks of the insane.',
        'The opinion of 10,000 men is of no value if none of them know anything about the subject.',
        'Whenever you are about to find fault with someone, ask yourself the following question: What fault of mine most nearly resembles the one I am about to criticize?',
        'It is not death that a man should fear, but he should fear never beginning to live.'
      ],

      epictetus: [
        'It is impossible for a man to learn what he thinks he already knows.',
        'No man is free who is not master of himself.',
        'Who is your master? Anyone who has control over things upon which you’ve set your heart, or over things which you seek to avoid.',
        'You are not your body and hair-style, but your capacity for choosing well. If your choices are beautiful, so too will you be.',
        'Circumstances don’t make the man, they only reveal him to himself.',
        'In prosperity it is very easy to find a friend; but in adversity it is the most difficult of all things.',
        'Deliberate much before saying or doing anything, for you will not have the power of recalling what is said or done.',
        'It isn’t the events themselves that disturb people, but only their judgements about them.',
        'To make the best of what is in our power, and take the rest as it occurs.'
      ]
    }
  }

  //Create the Methods for our APP
  var methods = {
  //Give a different background color when clicking the main button
    changeBackground: function(author) {
      let random = Math.floor(Math.random() * data.backgrounds.length);
      let color = data.backgrounds[random];
      const quotes = $('#quotes-container');
      const circle = $('#circle')
      $('body').css('background-color', color);
      quotes.css("background-image", "url(imgs/" + author + ".jpg)");
      quotes.toggleClass();
      quotes.addClass('' + author + '-bk');
      circle.toggleClass();
      circle.addClass('' + author + '-bk');
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
      const $div = $('<div class="' + author + '"></div>');
      const $quotes = $("#quotes-container")
      //let html = '';
      //html += '<h3>' + author + '</h3>';
      //html += '<p>' + quote + '</p>';
      //let author = '<h3>' + author + '</h3>'
      //let quote = '<p>' + quote + '</p>'
      //div.html(html);
      //(div.fadeIn('slow')).appendTo('#quotes-container');
      //(div.hide.()).appendTo('#quotes-container').show('normal');
      $quotes.append($div)
      $quotes.hide().fadeIn(700);

      let a = $('<h3>' + author + '</h3>').hide();
      $div.append(a);
      setTimeout(function() { return a.show('normal') }, 400)

      let q = $('<p>' + quote + '</p>').hide();
      $div.append(q);
      setTimeout(function() { return q.show('normal') }, 400)

    },
    displayBtn: function() {
      const $btn = $('<a href="#" class="change2">RANDOM QUOTE</a>');
      const $quotes = $("#quotes-container")
      $quotes.append($btn);
      $btn.hide().fadeIn(1500).delay(1500);
      $btn.animate({ opacity: 1, top: "-10px" }, 'normal');

    },
   //animation
    animation: function() {
      $('#circle').appendTo('.container')
      $('#cirlce').hide().fadeIn(3000).delay(3000);
      $('#circle').animate({ opacity: 1, top: "-10px" }, 'slow');
      $('#quotes-container').appendTo('#circle')
      //$('#quotes-container').hide().fadeIn(3000).delay(3000);
    }

  };

  //Global controllet of our APP
  $('.change').click(function(event){
    //Delete previous quote if there is one
      //Get the siblings of the target button and hide them
    $(event.target).siblings().hide();
    //Hide button
    $(event.target).hide();
    //Select a random author
    var author = methods.selectAuthor();
    //Select a random quote from the previous author
    var quote = methods.selectQuote(author);
    //animation
    //methods.animation();
    //Display button again in the UI
    methods.displayBtn();
    //Changue the background
    methods.changeBackground(author);
    //Display the quote in the UI interface
    methods.displayQuote(author, quote);
  });

  //Global controllet of our APP
  $('body').on('click', '.change2', function(event){
    //Delete previous quote if there is one
      //Get the siblings of the target button and hide them
    console.log('Change 2 was clicked');
    $(event.target).siblings().hide();
    //Hide button
    $(event.target).hide();
    //Select a random author
    var author = methods.selectAuthor();
    //Select a random quote from the previous author
    var quote = methods.selectQuote(author);
    //animation
    //methods.animation();
    //Display button again in the UI
    methods.displayBtn();
    //Changue the background
    methods.changeBackground(author);
    //Display the quote in the UI interface
    methods.displayQuote(author, quote);
  });
