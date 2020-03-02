import axios from 'axios';

export const Fetch_Start = "Fetch_Start";
export const Fetch_Success = "Fetch_Success";
export const Fetch_Fail = "Fetch_Fail";

export const Post_Start = "Post_Start";
export const Post_Success = "Post_Success";
export const Post_Fail = "Post_Fail";

export const fetchSmurfs = () => dispatch => {
    dispatch({type: Fetch_Start});

    axios.get('http://localhost:3333/smurfs')
    .then(res => {
        console.log("Get success", res);
        dispatch({type: Fetch_Success, payload: res.data})
    })
    .catch(err => {
        console.log("Get fail", err);
        dispatch({type: Fetch_Fail, payload: `${err.response.status} ${err.response.data}`})
    })
}

export const newSmurf = addSmurf => dispatch => {
    dispatch({ type: Post_Start });
    axios.post(`http://localhost:3333/smurfs`, addSmurf)
    .then(res => {
        console.log('Post Success', res)
        dispatch({
            type: Post_Success, payload: res.data
            
        })
    })

    .catch(err => {
        console.log('Post Fail', err)
        dispatch({
            type: Post_Fail, payload: err
        })
    })
}
