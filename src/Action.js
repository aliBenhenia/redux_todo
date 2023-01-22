export const addTodo = (todo) => ({
    type: 'ADD_TODO',
    todo
});

export const removeTodo = (index) => ({
    type: 'REMOVE_TODO',
    index
});
