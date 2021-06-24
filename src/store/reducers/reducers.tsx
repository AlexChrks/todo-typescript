const initialState: Array<any> = [];

type State = typeof initialState

export function todosReducer(state: State = initialState, action: any): State {
  switch (action.type) {
    case 'SET_INITIAL_TODOS':
      return [
        ...action.payload
      ]
    case 'ADD_TODO':
      return [
        action.payload, ...state
      ]
    case 'CHANGE_TODO_STATUS':
      state.map((todo) : void => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed
        }})
          return [
            ...state
          ]    
    case 'DELETE_TODO':
          const aer = state.filter(todo => action.payload !== todo.id)
          return [
            ...aer
          ]   
    default:
      return state;
  }
}

export const selectAvailableKeys = (state: any) => state.availableKeys;
