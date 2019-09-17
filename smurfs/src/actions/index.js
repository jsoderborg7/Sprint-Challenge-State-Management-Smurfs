import axios from 'axios';

export const FETCHING_SMURFS_START = "FETCHING_SMURF_START";
export const FETCHING_SMURFS_SUCCESS = "FETCHING_SMURF_SUCCESS";
export const FETCHING_SMURFS_FAILURE = "FETCHING_SMURF_FAILURE";
export const ADD_SMURF_START = "ADD_SMURF_START";
export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESS";
export const ADD_SMURF_FAILURE = "ADD_SMURF_FAILURE";


export const getSmurfs = () => dispatch =>{
  dispatch({type: FETCHING_SMURFS_START});
  axios
    .get(`http://localhost:3333/smurfs`)
    .then(res =>{
      console.log(res);
      dispatch({type: FETCHING_SMURFS_SUCCESS, payload : res.data});
    })
    .catch(err =>{
      dispatch({type: FETCHING_SMURFS_FAILURE, payload: `${err.response}`});
    });
};

// export const addSmurf = () => dispatch =>{
//   dispatch({type: ADD_SMURF_START});
//   axios
//     .post('http://localhost:3333/smurfs')
//     .then(res =>{
//       console.log('add res', res);
//       dispatch({type: ADD_SMURF_SUCCESS, payload: res.data});
//     })
//     .catch(err =>{
//       ({type: ADD_SMURF_FAILURE, payload: `${err.response}`})
//     });
// };