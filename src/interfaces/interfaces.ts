import {SET_INITIAL_TODOS, ADD_TODO, DELETE_TODO, CHANGE_TODO_STATUS} from '../store/constants';

export interface TodoInterface {
  id: number,
  title: string,
  completed: boolean,
}

export type setInitialTodosActionType = {
  type: typeof SET_INITIAL_TODOS
  payload: any
}

export type addTodoActionType = {
  type: typeof ADD_TODO
  payload: TodoInterface
}

export type deleteTodoActionType = {
  type: typeof DELETE_TODO
  payload: number
}

export type changeTodoStatusActionType = {
  type: typeof CHANGE_TODO_STATUS
  payload: number
}

export type actionsType = 
    setInitialTodosActionType 
  | addTodoActionType
  | deleteTodoActionType
  | changeTodoStatusActionType
