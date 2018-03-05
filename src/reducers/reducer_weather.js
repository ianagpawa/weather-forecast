import { FETCH_WEATHER, HANDLE_AXIOS_ERROR } from "../actions/index";

export default function(state=[], action){
    if (action.error){
        action.type = HANDLE_AXIOS_ERROR;
    }
    switch (action.type) {
    case FETCH_WEATHER:
        // return state.concat([action.payload.data]); same as below
        return [ action.payload.data ];
    case HANDLE_AXIOS_ERROR:
        return [ action.payload.data ];
    default:
        // Do nothing
    }
    return state;
}
