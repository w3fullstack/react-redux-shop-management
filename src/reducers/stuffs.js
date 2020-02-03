import { ADD_STUFF, REMOVE_STUFF } from '../actions'; 

const stuffsInitialState = { data: [] }; 

const stuffs = (state = stuffsInitialState, action) => {
    switch(action.type) {
        case ADD_STUFF: 
            return Object.assign({}, state, {data: [...state.data, action.data]}); 
        case REMOVE_STUFF: 
            return Object.assign({}, state, { data: state.data.filter(item => item !== action.data) });
        default:
            return state;
    } 
}

export default stuffs;