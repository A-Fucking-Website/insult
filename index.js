
function getQuote() {
    document.getElementById("insult-quote").innerHTML = randomize();
}
function randomize() {
  return quoteArray[Math.floor(Math.random() * quoteArray.length)];
}

var quoteArray = ["You are getting your knockers in a twist! Calm down!", "WHAT ARE YOU? An idiot sandwich", "You fucking Donkey!", "How about a thank you, you miserable wee-bitch", "Hey, panini head, are you listening to me?", "For what we are about to eat, may the Lord make us truly not vomit", "Do you want a fucking medal?", "I wish you would go jump in the oven! It woud make my life so much easier", "Your name is Elsa, isn't it? Because this shit is so fucking frozen", "This pork is so raw it's still singing Hakuna Matata", "Fuck off you bloody donut", "This crab is so raw it just offered me a krabby patty", "You speak an infinite deal of nothing.", "If your brains were dynamite there wouldn't be enough to blow your hat off","You couldn't pour water out of a boot, even if the instructions were written on the heel.","2090 called. You're dead and you wasted your time on earth","Jeus loves you, no one else does or wants to.","IF I WANTED TO KILL MYSELF, I WOULD CLIMB TO THE NUMBER OF YOUR CHROMOSOMES AND THEN JUMP TO YOUR IQ."];


