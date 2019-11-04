import Caption_Deck from "./Captions"

export const Game_Server = {
    Player: [],
    Picture_Deck: [],
    Caption_Deck,
    Top_Of_Caption_Deck: 0,
    Top_Of_Picture_Deck: 0,
    Dealer: -1,
    Captions_in_play: [], //strings
    Picture_in_play: "",
    Caption_chosen: -1,

    Get_Hand(amount = 7){
        this.Top_Of_Caption_Deck += amount
        return this.Caption_Deck.slice(this.Top_Of_Caption_Deck - amount, this.Top_Of_Caption_Deck)
    },
    Get_Next_Picture(){
        return this.Picture_Deck[this.Top_Of_Picture_Deck++]
    }


}

export const Game_Client = {
    Player: [
        { name:"Xefros", points: 0 },
        { name:"Joey", points: 0 },
        { name:"Jude", points: 0 },
        { name:"Tetrarch", points: 0 },

    ],
    Dealer: 0,
    Captions_in_play: [], //strings
    Picture_in_play: "",
    Caption_chosen: -1
}

export var My_Captions = [];


export class Player{
    name;
    points;
    caption_hand;
}