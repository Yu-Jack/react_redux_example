import { PADDING, RECEIVE } from '../constant/ActionList';
import request from 'superagent';

function requestPost(){
    return {
        type: PADDING
    }
}

function receivePost(response){
    return {
        type: RECEIVE,
        response
    }
}

export function fetch(){
    return (dispatch) => {
        dispatch(requestPost());
        setTimeout(() => {
            request.get('http://localhost:3000/').end( (err, response) => {
                if(err) return dispatch(receivePost(404));
                dispatch(receivePost(response.text));
            });
        }, 500)
    }
}
