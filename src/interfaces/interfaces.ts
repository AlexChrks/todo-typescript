import {SET_INITIAL_TODOS, ADD_TODO, DELETE_TODO, CHANGE_TODO_STATUS} from '../store/constants';

export interface ITodo {
  id: number,
  title: string,
  completed: boolean,
}

export type TsetInitialTodos = {
  type: typeof SET_INITIAL_TODOS
  payload: any
}

export type TaddTodo = {
  type: typeof ADD_TODO
  payload: ITodo
}

export type TdeleteTodo = {
  type: typeof DELETE_TODO
  payload: number
}

export type TchangeTodoStatus = {
  type: typeof CHANGE_TODO_STATUS
  payload: number
}
