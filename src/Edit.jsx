const Edit = (props) => {

    return (
    <div className="modol2" id='modol2'>
        <form action="" onSubmit={props.handleTodoEdit}>
        <span className="close" onClick={props.handleTodoClose}>&times;</span>
        <h2>Edit Todo</h2>
          <label htmlFor="title">Title</label>
          <input type="text" name="" id="title"  value={props.getTitle} onChange={event => props.setTitle(event.target.value)} />

          <div className="gap"></div>

          <label htmlFor="status">Status</label>
          <select name="" id="status" value={props.getStatus} onChange={event => props.setStatus(event.target.value)} >
            <option value="completed">completed</option>
            <option value="uncompleted">uncompleted</option>
        </select>

        <div className="gap"></div>

        <button type='submit' onClick={props.handleTodoClose}>Submit</button>
        </form>
      </div>
    )
}

export default Edit