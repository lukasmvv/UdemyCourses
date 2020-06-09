import * as actionTypes from '../actions';

const initialState = {
    results: []
}

const resultReducer = (state=initialState, action) => {
    switch(action.type) {
        case actionTypes.STORE_RESULT:
            return {
                ...state,   
                results: state.results.concat({id: new Date(), val: action.result}) // concat is like push but returns a new array             
            }
            // note here immutability
            // changing something immutabilly, means not mutating the original source
            // spreading an array will returns a new array, but if the values are objects, the objects are still references to original
            // removing a whole object from array is OK, but mutating a value in an object in an array is a problem
            // the object must be spread when added to new array
            // Immutable Update Patterns on reduxjs.org: https://redux.js.org/recipes/structuring-reducers/immutable-update-patterns/
        case actionTypes.DELETE_RESULT:
            // const index = 2;
            // const newArray = [...state.results];
            // newArray.splice(index,1);

            // filter returns a new array - returning true in arrow function returns that element
            const updatedArray = state.results.filter(result => result.id!==action.resultElementId); 
            return {
                ...state,
                results: updatedArray
            }
    }
    return state;
};

export default resultReducer;