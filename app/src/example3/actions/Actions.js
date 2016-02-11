const ADD_TODO = 'ADD_TODO';

export function addTodo(id, text){
    return {
        type: ADD_TODO,
        id,
        text
    }
}
