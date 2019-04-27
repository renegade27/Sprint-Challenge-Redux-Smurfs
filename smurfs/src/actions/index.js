/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from 'axios';

export const FETCH_START = 'FETCH_START';
export const FETCH_FAILURE = 'FETCH_FAILURE';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';

export const POST_START = 'POST_START';
export const POST_FAILURE = 'POST_FAILURE'
export const POST_SMURF = 'POST_SMURF';

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

export const fetch = () => dispatch => {
  dispatch({
    type : FETCH_START,
    payload : true
  })
  const request = axios.get('http://localhost:3333/smurfs/');
    request.then(({data}) => {
        console.log(data);
        dispatch({
            type : FETCH_SUCCESS,
            payload : data
        });
    })
    .catch(err => {
        dispatch({
            type : FETCH_FAILURE,
            error : err
        })
    })
}

export const post = smurf => dispatch => {
  dispatch({
    type : POST_START,
    payload : true
  })
  return axios.post('http://localhost:3333/smurfs/', smurf)
  .then(({data}) => {
    console.log(data);
    dispatch({ type: POST_SMURF, payload: smurf });
  })
  .catch(err => {
      dispatch({
          type : POST_FAILURE,
          payload : err.response.status
      })
  })
};


