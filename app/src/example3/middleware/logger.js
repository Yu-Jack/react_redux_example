export function logger({getState}) {
    return (next) => (action) => {
        console.log('action', action);
        let returnValue = next(action);
        console.log('state', getState());
        return returnValue;
    }
}
