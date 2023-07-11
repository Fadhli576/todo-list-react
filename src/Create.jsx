const Create = (props) => {

    function handleTodoCreate(e) {
        e.preventDefault()
        props.setTodos(props.getTodos.concat({
          id : Math.floor(Math.random() * 10000),
          title : props.getTitle,
          status : props.getStatus
        },))
    }


    return (
    <div className="modol" id='modol'>
        <form action="" onSubmit={handleTodoCreate}>
        <span className="close" onClick={props.handleTodo}>&times;</span>
        <h2>Tambah Todo</h2>
          <label htmlFor="title">Title</label>
          <input type="text" name="" id="title"  value={props.getTitle} onChange={event => props.setTitle(event.target.value)} />

          <div className="gap"></div>

          <label htmlFor="status">Status</label>
          <select required name="" id="status" value={props.getStatus} onChange={event => props.setStatus(event.target.value)} >
            <option selected disabled value="">Pilih Opsi</option>
            <option value="completed">completed</option>
            <option value="uncompleted">uncompleted</option>
        </select>

        <div className="gap"></div>

        <button type='submit' onClick={props.handleTodo}>Submit</button>
        </form>
      </div>
    )
}

export default Create