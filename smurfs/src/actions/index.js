import axios from 'axios';

export const FETCHING_SMURFS_START = "FETCHING_SMURF_START";
export const FETCHING_SMURFS_SUCCESS = "FETCHING_SMURF_SUCCESS";
export const FETCHING_SMURFS_FAILURE = "FETCHING_SMURF_FAILURE";
export const ADD_SMURF = "ADD_SMURF";
export const UPDATE_VILLAGE = "UPDATE_VILLAGE";

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