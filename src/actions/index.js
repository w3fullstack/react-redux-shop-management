import { ADD_STUFF, REMOVE_STUFF } from '../actions/ActionTypes'; 

export function addStuff(data) { 
    return { type: ADD_STUFF, data }; 
}

export function removeStuff(data) {
    return { type: REMOVE_STUFF, data }; 
} 
