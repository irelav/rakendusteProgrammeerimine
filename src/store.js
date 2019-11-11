import {createStore} from "redux";

const USER_LOADED = "USER_LOADED";
const initialState = {
    email: null,
    _id: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type){
        case USER_LOADED: {
            return {
                ...state,
                ...action.payload,
            };
        }
        default: {
            return state;
        }
    }
};

const store = createStore(authReducer);
store.subscribe(() => console.log(store.getState()));

store.dispatch({
    type: USER_LOADED,
    payload: {
        email: "testin@gmail.com",
        _id: 2,
    }
});

store.dispatch({
    type: USER_LOADED,
    payload: {
        email: "test404@spam.com",
        _id: 3,
    }
});

export default store;