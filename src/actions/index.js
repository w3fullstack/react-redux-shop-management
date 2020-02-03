export const REMOVE_STUFF = 'REMOVE_STUFF'; 
export const ADD_STUFF = 'ADD_STUFF'; 

export function addStuff(data) { 
    return { type: ADD_STUFF, data }; 
}

export function removeStuff(data) {
    return { type: REMOVE_STUFF, data }; 
} 
