import {createStore} from 'redux';

const reducerFn = (state = {counter: 0}, action:any) => {
    
    //limitations
    //should be synchronous function
    //we should not mutate the original state (copy of the original state will be updated)

    if(action.type === "INC"){
        return {counter: state.counter + 1};
    }

    if(action.type === "DEC"){
        return {counter: state.counter - 1};
    }
    return state;
};

const store = createStore(reducerFn);

export default store;