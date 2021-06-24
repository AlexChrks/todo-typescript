import React, {useEffect} from 'react'
import { setInitialTodosQuery } from '../../store/actions/actions'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { ITodo } from '../../interfaces/interfaces';
import TodoTask from '../TodoTask/TodoTask';

const TodosList: React.FC = () => {

  const store: any = useAppSelector((state) => state)
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setInitialTodosQuery());
  }, []);

  return (
    <>
      {
        store && 
        <ul>
          {store.map((todo: ITodo ) => {
            const classes=['todo'];
            if (todo.completed) {
              classes.push('completed')
            }
            return (<TodoTask 
            key={todo.id}  
            title={todo.title} 
            id={todo.id} 
            isCompleted={todo.completed}
            classes={classes.join(' ')}
            />)
          }
          )}
        </ul>
      }
    </>
  )
}

export default TodosList
