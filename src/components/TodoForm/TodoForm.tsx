import React, {useRef} from 'react';
import { Ref } from 'react';
import { TodoInterface } from '../../interfaces/interfaces';
import { addTodo } from '../../store/actions/actions';
import { useDispatch } from 'react-redux';


const TodoForm: React.FC = () => {

  const dispatch = useDispatch();
  
  const input: Ref<any> = useRef(null);

  const addHandler = (title: string) => {
    const newTodo: TodoInterface = {
      title: title,
      id: Date.now(),
      completed: false
    }
    dispatch(addTodo(newTodo));
  }

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' ) {
      addHandler(input.current!.value);
      input.current!.value = '';
    }
  }

  return (
    <div className="input-field mt2">
      <input 
      ref={ input }
      type="text" 
      id="title" 
      placeholder="Type task here"
      onKeyPress={ keyPressHandler }/>
      <label htmlFor="title" className="active">
        Type task here
      </label>
    </div>
  )
}

export default TodoForm
