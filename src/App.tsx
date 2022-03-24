import { Container, Form, TodosContainer, Title } from './globalStyles'
import { useState, ChangeEvent } from 'react'
import { ITask } from './interfaces'
import Todo from './componets/Todo'

function App(): React.ReactElement {

  const [text, setText] = useState<string>('')
  const [date, setDate] = useState<string>('')
  const [todos, setTodos] = useState<ITask[]>([])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setTodos([...todos, {text, date, id: Date.now()}])
    setText('')
    setDate('')
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target
    if(name === 'text') {
      setText(value)
    } else if(name === 'date') {
      setDate(value)
    }
  }

  const removeTodo = (id: number) => {
    setTodos(todos.filter(item => item.id !== id))
  }

  return (
    <Container>
      <Title>Todo App with TypeScript</Title>
      <Form onSubmit={handleSubmit}>
        <input type="text" name="text" placeholder='Type here...' required value={text} onChange={handleChange} />
        <input type="time" name="date" placeholder='Select date...' required value={date} onChange={handleChange} />
        <button className="btn">Submit</button>
      </Form>
      <TodosContainer>
        {
          todos.map((item): React.ReactNode => <Todo key={item.id} task={item} removeTodo={removeTodo} />)
        }
      </TodosContainer>
    </Container>
  );
}

export default App;
