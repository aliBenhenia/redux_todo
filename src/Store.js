import { createStore } from 'redux';
import todoList from './Reducer';

const store = createStore(todoList);

export default store;