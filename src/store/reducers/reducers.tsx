import { actionsType, TodoInterface } from "../../interfaces/interfaces";
import { SET_INITIAL_TODOS, ADD_TODO, CHANGE_TODO_STATUS, DELETE_TODO } from "../constants";
const initialState: [] = [];

export type StateType = typeof initialState | TodoInterface[]

export function todosReducer(state: StateType = initialState, action: any): StateType {
  switch (action.type) {
    case SET_INITIAL_TODOS:
      return [
        ...action.payload
      ]
    case ADD_TODO:
      return [
        action.payload, ...state
      ]
    case CHANGE_TODO_STATUS:
      state.map((todo) : void => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed
        }})
          return [
            ...state
          ]    
    case DELETE_TODO:
          const aer = state.filter(todo => action.payload !== todo.id)
          return [
            ...aer
          ]   
    default:
      return state;
  }
}
