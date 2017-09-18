var deck = function(){
  var formDeck = function(){
      this.deck = {
          hearts: [],
          diamonds: [],
          spades: [],
          clubs: []
      };
    for (var suit in this.deck) {
        var numSplit = 52/4;
        for(i=0;i<numSplit+1;i++){
            if(i === 0){
                
            }else if(i === 1){
                this.deck[suit].push('A');
            }else if(i === 11){
                this.deck[suit].push('J');
            }else if(i === 12){
                this.deck[suit].push('Q');
            }else if(i === 13){
                this.deck[suit].push('K');
            }else{
                this.deck[suit].push(i);
            }            
        }
    }
    return this.deck;
  };
  var wholeDeck = function(){
    this.complete = [];
    this.deck = formDeck();
    for (suit in this.deck){
        for(i=0;i<this.deck[suit].length;i++){
        this.complete.push(this.deck[suit][i] + ' of ' + suit);
        }
    }
    shuffle(this.complete);
  };
  
  var shuffle = function(deck){
      this.complete = [];
      this.numberOfCards = deck.length;
      for(var k=deck,i=this.numberOfCards;i>0;i--){
          var random = k.splice(Math.floor(Math.random()*(i+0)),1)[0];
          this.complete.push(random);
      }
      console.log(this.complete);
      split(this.complete);
      return this.complete;
  };
  var split = function (deck){
      this.complete = [];
      this.cut = deck.length/2;
      var i = this.cut;
      while(i< deck.length){
          this.complete.push(deck[i]);
          i++;
      };
      i = 0;
      while(i<this.cut){
       this.complete.push(deck[i]);
       i++;
      };
      console.log(this.complete);
      pickCards(this.complete,1,1);
  };
  var pickCards = function (deck,num,players){
      this.choosen = [];
      this.currentDeck = deck;
      this.playersTracker = {};
      for(k=1;k<players+1;k++){
          this.playersTracker['player'+k] = [];
        for(i=0;i<num/players;i++){
            if(this.currentDeck[0] !== undefined){
                this.playersTracker['player'+k].push(this.currentDeck[0]);
                this.choosen.push(this.currentDeck[0]);
                this.currentDeck.splice(0,1);
            }
        }
      };
      console.log(this.playersTracker);
  };
  wholeDeck();
};
