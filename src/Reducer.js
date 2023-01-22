const initialState = {
    todos: []
};

export default function todoList(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TODO':
            return { todos: [...state.todos, action.todo] };
        case 'REMOVE_TODO':
            return { todos: state.todos.filter((todo, i) => i !== action.index) };
        default:
            return state;
    }
}
