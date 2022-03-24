import {ReactElement} from 'react'
import { ITask } from '../interfaces'
import { TodoCom } from '../globalStyles'

interface Props{
    task: ITask,
    removeTodo(id: number): void
}

const Todo = ({task, removeTodo}: Props): ReactElement => {
    const {text, date, id} = task

  return (
    <TodoCom>
        <h3>{text} at {date}</h3>
        <button className="btn" onClick={() => removeTodo(id)}>-</button>
    </TodoCom>
  )
}

export default Todo