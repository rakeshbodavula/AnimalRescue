const quotes = ["Until one has loved an animal, a part of one’s soul remains unawakened. -ANATOLE FRANCE",
                "If having a soul means being able to feel love and loyalty and gratitude, then animals are better off than a lot of humans. -JAMES HERRIOT",
                "Animals are not property or 'things' but rather living organisms, subjects of a life, who are worthy of our compassion, respect, friendship, and support. -MARC BEKOFF",
                "I think having an animal in your life makes you a better human. -RACHEL RAY",
                "If a man aspires towards a righteous life, his first act of abstinence is from injury to animals. -LEO TOLSTOY",
                "All animals are minor variations on a very particular theme. -RICHARD DAWKINS",
                "Look deep into nature, and then you will understand everything better. -ALBERT EINSTEIN",
                "An animal's eyes have the power to speak a great language. -MARTIN BUBER"
                 ];
function quotesFunction() {
  const elem = document.getElementById("quote-place");
  var i = 0;
  setInterval(frame, 3000);
  function frame() {
      elem.innerHTML = quotes[i];
      if(i<7){
         i = i + 1;
      }else{
         i = 0;
      }
  }
}