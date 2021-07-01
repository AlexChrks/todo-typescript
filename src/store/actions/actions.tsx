
import {SET_INITIAL_TODOS, ADD_TODO, DELETE_TODO, CHANGE_TODO_STATUS} from '../constants';
import {setInitialTodosActionType, addTodoActionType, deleteTodoActionType, changeTodoStatusActionType, TodoInterface} from '../../interfaces/interfaces'

import { apiQuery } from '../../api/apiQuery'
import { AxiosResponse } from 'axios';
import { Dispatch } from 'react';


export function setInitialTodos(data: TodoInterface[]): setInitialTodosActionType {
  return {
    type: SET_INITIAL_TODOS,
    payload: data
  }
}

export function addTodo(data: TodoInterface): addTodoActionType {
  return {
    type: ADD_TODO,
    payload: data
  }
}

export function deleteTodo(data: number): deleteTodoActionType {
  return {
    type: DELETE_TODO,
    payload: data
  }
}

export function changeTodoStatus(data: number): changeTodoStatusActionType {
  return {
    type: CHANGE_TODO_STATUS,
    payload: data
  }
}

export const setInitialTodosQuery = () => {
  return (dispatch: Dispatch<setInitialTodosActionType>) => {
    apiQuery().then((todos: AxiosResponse) : void => {
      const transformedArr: Array<TodoInterface> = todos.data.map((todo: TodoInterface): TodoInterface => {
        return {
          id: todo.id,
          title: todo.title,
          completed: todo.completed
        }
      });
      dispatch(setInitialTodos(transformedArr))
    })
  };
}
