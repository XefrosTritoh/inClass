import { api}  from './my-fetch';

export const Game_Server = {
    Get_Hand(amount = 7){
        return api('hand')
    },
    Flip_Picture(){
        return api('picture/flip')
    },
    Get_State(){
        return api('')
    }
}
//Shape of a player
export class Player{
    name;
    points;
    caption_hand;
}