import { base_url } from "../utils/constants";

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const GETSYMBOLS = 'GETSYMBOLS';
export const GETMESSAGE = 'GETMESSAGE';
export const PUTITEM = 'PUTITEM';
export const DELETEITEM = 'DELETEITEM';
export const APICALLTIMER = 'APICALLTIMER';


export const loginAction = passkey => (
    {
        type: LOGIN,
        payload: passkey
    }
)

export const logoutAction = () => {
    return {
        type: LOGOUT
    }
}

export const getSymbolsAction = symbols => (
    {
        type: GETSYMBOLS,
        payload: symbols,
    }
)

export const messageAction = msg => (
    {
        type: GETMESSAGE,
        payload: msg
    }
)

export const putItemAction = item => (
    {
        type: PUTITEM,
        payload: item,
    }
)

export const fetchData = () => {
    return async (dispatch) => {
        try {
            const response = await fetch(`${base_url}`);

            const symbols = await response.json();
            // console.log(symbols);
            dispatch(getSymbolsAction(symbols));
        } catch (err) {
            dispatch(messageAction("fetchdata Something went wrong"));
        }
    }
}

export const logWPassKey = passkey => {
    return async (dispatch) => {
        try {
            const response = await fetch(`${base_url}/${passkey}`);

            const data = await response.json();

            if (data.length) {

                dispatch(loginAction(data[0]));
                data[0].respTime = Date.now();

                dispatch(putItemAction(data[0]));

            } else {
                dispatch(messageAction(passkey));
            }
        } catch (err) {
            // dispatch(messageAction("Error: " + err.message));
            dispatch(messageAction(passkey));
        }
    }
}

export const deleteItem = (dataItems) => (
    {
        type: DELETEITEM,
        payload: dataItems
    }
)

export const respTime = (timer) => (
    {
        type: APICALLTIMER,
        payload: timer
    }
)