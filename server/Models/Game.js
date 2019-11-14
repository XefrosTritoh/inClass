const Caption_Deck = require('./Captions')


module.exports.Game = {
    Players: [
        { name:"Xefros", points: 0 },
        { name:"Joey", points: 0 },
        { name:"Jude", points: 0 },
        { name:"Tetrarch", points: 0 },

    ],
    Picture_Deck: [
        "http://www.dailyhaha.com/_pics/prepared-to-slice-onions.jpg",
        "http://www.dailyhaha.com/_pics/no-parking-here-guys.jpg",
        "http://www.dailyhaha.com/_pics/best-parking-spot.jpg",
        "http://www.dailyhaha.com/_pics/a-good-selling-point.jpg",
    ],
    Caption_Deck,
    Top_Of_Caption_Deck: 0,
    Top_Of_Picture_Deck: 0,
    Dealer: 0,
    Captions_in_play: [], //strings
    Picture_in_play: "",
    Caption_chosen: -1,

    Get_Hand(amount = 7){
        this.Top_Of_Caption_Deck += +amount;
        return this.Caption_Deck.slice(this.Top_Of_Caption_Deck - amount, this.Top_Of_Caption_Deck)
    },
    Flip_Picture(){
        this.Picture_in_play = this.Picture_Deck[this.Top_Of_Picture_Deck++];
        this.Dealer++;
    },
    Join(name){
        if(this.Players.find(x=> x.name == name)){
            return -1;
        }
        this.Players.push( {name , score: 0 });
        return this.Players.length-1;
    },
    Get_State(){ 
        return{
        Players: this.Players,
        Dealer: this.Dealer,
        Captions_in_play: this.Captions_in_play, 
        Picture_in_play: this.Picture_in_play,
        Caption_chosen: this.Caption_chosen
        }
    }

}