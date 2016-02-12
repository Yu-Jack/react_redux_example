import { PADDING, RECEIVE } from '../constant/ActionList';

export default function ( state = '', action) {
    switch (action.type) {
        case PADDING:
            return 'Loading';
        case RECEIVE:
            return action.response;
        default:
            return state;
    }
}
