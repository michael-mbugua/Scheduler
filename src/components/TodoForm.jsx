import React,{useState,useEffect,useRef} from 'react'

function TodoForm(props) {
    const [input,setInput]=useState("")

    const inputRef=useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })
    function handleChange(e) {
        setInput(e.target.value)
    }
    function handleSubmit(e) {
        e.preventDefault();
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });
        setInput("")
    }
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <input 
            className='todo-input'
            type="text"
            placeholder='Add todo'
            name='todo'
            value={input}
            onChange={handleChange} 
            ref={inputRef}/>
            <button className="todo-button">add todo</button>
        </form>
    </div>
  )
}

export default TodoForm