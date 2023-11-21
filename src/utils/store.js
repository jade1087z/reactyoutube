import { createStore } from "redux";

const initialState = {
    isShow: false,
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case "TOGGLE_SHOW":
            return {
                ...state,
                isShow: !state.isShow,
            };
        default:
            return state;
    }
}

const store = createStore(reducer);
export default store;
