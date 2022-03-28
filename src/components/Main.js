import { useState } from "react"

const date = new Date()

const Main = () => {

    const [todoItems, setTodoItems] = useState([])

    const todoItem = {
        constructor(name, description, dueDate) {
            this.name = name
            this.description = description
            this.dueDate = dueDate
        }
    }

    const handleSubmit = evt => {
        let todoName = evt.target.elements.name.value
        let todoDesc = evt.target.elements.desc.value 
        let todoDate = evt.target.elements.date.value
        let newTodo = new todoItem()

        newTodo.name = todoName
        newTodo.description = todoDesc
        newTodo.dueDate = todoDate
        
         
        console.log(newTodo.name);
    }

    return (
        <main>
            <form onSubmit={evt => {
                    evt.preventDefault()
                    handleSubmit(evt)
                } 
            }>
                <div className="container">
                    <div>
                        <label htmlFor="name">Name of Todo</label>
                        <input type="text" name="name" id="name" />
                    </div>
                    <div>
                        <label htmlFor="desc">Description</label>
                        <textarea name="desc" id="desc" cols="30" rows="10"></textarea>
                    </div>
                    <div>
                        <label htmlFor="date">Due Date</label>
                        <input name="date" id="date" type="date" />
                    </div>
                </div>               
                
                <button type="submit">Submit</button>
            </form>
        </main>
    )
}

export default Main

