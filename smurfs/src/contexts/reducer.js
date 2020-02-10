import {
    Fetch_Start, Fetch_Success, Fetch_Fail, Post_Start, Post_Success, Post_Fail
} from '../contexts/context'


const initial = {
    smurf: [],
    error: ''
};

function Reducer(state = initial, action) {
    switch(action.type) {
        case Fetch_Start: return {
            ...state, isFetching: true, error: ''
        }
        case Fetch_Success: return {
            ...state, smurf: action.payload, isFetching: false, error: ''
        }
        case Fetch_Fail: return {
            ...state, error: action.payload
        }
        case Post_Start: return {
            ...state, isFetching: true
        }
        case Post_Success: return {
            ...state, smurf: action.payload, isFetching: false
        }
        case Post_Fail: return {
            ...state, isFetching: false, error: action.payload
        };
        default:
            return state;
    }
}

export default Reducer;