import { DELETEITEM, GETMESSAGE, GETSYMBOLS, LOGIN, LOGOUT, PUTITEM, APICALLTIMER } from "../actions/accountActions";
import { initialState } from "../configureStore/store";

export const accountReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return { ...state, passkey: action.payload };
        case LOGOUT:
            return { ...initialState };
        case GETMESSAGE:
            return { ...state, msg: action.payload };
        case GETSYMBOLS:
            return {...state, symbolsData: action.payload};
        case PUTITEM:
            const newState = { ...state };
            const items = newState.itemsData;
            const item = items.filter(item => item.symbol === action.payload.symbol)[0];
            if (item) {
                const index = items.indexOf(item);
                items.splice(index, 1);
            }
            items.push(action.payload);
            return { ...newState, itemsData: items };

        case APICALLTIMER:
            return { ...state, respTime: action.payload }

        case DELETEITEM:
            return { ...state, itemsData: action.payload }

        default:
            return state;
    }
}