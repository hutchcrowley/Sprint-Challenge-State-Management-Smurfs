import axios from 'axios';

export const getSmurf = () => {
return dispatch => {
    dispatch({ type: 'LOADING' });
    axios
    .get(`http://localhost:3333/smurfs`)
    .then(res => {
        dispatch(...state, { type: 'NEW_SMURF', payload: res.data. });
    })
}

} 