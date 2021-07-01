import React, {useEffect} from 'react'
import { setInitialTodosQuery } from '../../store/actions/actions'
import { TodoInterface } from '../../interfaces/interfaces';
import TodoTask from '../TodoTask/TodoTask';
import Preloader from '../Preloader/Preloader';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { StateType } from '../../store/reducers/reducers';

const TodosList: React.FC = () => {

  const store = useSelector<RootState, StateType>((state) => state.todosReducer)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setInitialTodosQuery());
  }, []);

  return (
    <>
      {
        store.length ? 
          <ul>
            {store.map((todo: TodoInterface ) => {
              const classes=['todo'];
              if (todo.completed) { classes.push('completed')}
              return <TodoTask 
                        key={todo.id}  
                        title={todo.title} 
                        id={todo.id} 
                        isCompleted={todo.completed}
                        classes={classes.join(' ')}
                      />
              }
            )}
          </ul>
        : <Preloader/>
      }
    </>
  )
}

export default TodosList
