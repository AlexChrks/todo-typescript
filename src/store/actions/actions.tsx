
import {SET_INITIAL_TODOS, ADD_TODO, DELETE_TODO, CHANGE_TODO_STATUS} from '../constants';
import {TsetInitialTodos, TaddTodo, TdeleteTodo, TchangeTodoStatus, ITodo} from '../../interfaces/interfaces'

import { apiQuery } from '../../api/apiQuery'
import { AxiosResponse } from 'axios';
import { Dispatch } from 'react';


export function setInitialTodos(data: Array<ITodo>): TsetInitialTodos {
  return {
    type: SET_INITIAL_TODOS,
    payload: data
  }
}

export function addTodo(data: ITodo): TaddTodo {
  return {
    type: ADD_TODO,
    payload: data
  }
}

export function deleteTodo(data: number): TdeleteTodo {
  return {
    type: DELETE_TODO,
    payload: data
  }
}

export function changeTodoStatus(data: number): TchangeTodoStatus {
  return {
    type: CHANGE_TODO_STATUS,
    payload: data
  }
}

export const setInitialTodosQuery = () => {
  return (dispatch: Dispatch<TsetInitialTodos>) => {
    apiQuery().then((todos: AxiosResponse) : void => {
      const transformedArr: Array<ITodo> = todos.data.map((todo: ITodo): ITodo => {
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
