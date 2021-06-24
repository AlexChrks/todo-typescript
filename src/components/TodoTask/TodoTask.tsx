import React from 'react'
import { useAppDispatch } from '../../hooks/hooks';
import { changeTodoStatus, deleteTodo } from '../../store/actions/actions';

type TodoTaskProps = {
  title: string
  id: number
  isCompleted: boolean,
  classes: string
}

const TodoTask: React.FC<TodoTaskProps> = ({ title, id, isCompleted, classes }) => {
  
  const dispatch = useAppDispatch();

  const toggleHandler = (id: number) => {
    dispatch(changeTodoStatus(id))
  }

  const removeHandler = (id: number) => {
    dispatch(deleteTodo(id));
  }

  return (
    <li className={classes} key={id}>
      <label>
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={toggleHandler.bind(null, id)}
        />
        <span>{title}</span>
        <i
          className="material-icons red-text"
          onClick={() => removeHandler(id)}
        >
          delete
        </i>
      </label>
  </li>
  )
}

export default TodoTask
