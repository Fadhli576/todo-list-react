const TodoList = (props) => {

    return (
        <div className="todo">
        {
          props.getTodos.map((todo) => {
            return (
            <div className="todo-item" key={todo.id}>
              <div className="todo-desc">
                <button id={todo.id} onClick={props.handleStatus} className={todo.status === 'completed' ? 'checkbox completed' : 'checkbox'}></button>
                <div className="todo-specific">
                  <h4>{todo.title}</h4>
                  <p>{todo.status}</p>
                </div>
              </div>
                <div className="todo-action">
                  <button onClick={props.handleTodoDelete} id={todo.id} ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z" fill="#000"></path></svg></button>
                  <button onClick={props.handleTodo2} id={todo.id}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M15.7279 9.57629L14.3137 8.16207L5 17.4758V18.89H6.41421L15.7279 9.57629ZM17.1421 8.16207L18.5563 6.74786L17.1421 5.33365L15.7279 6.74786L17.1421 8.16207ZM7.24264 20.89H3V16.6474L16.435 3.21233C16.8256 2.8218 17.4587 2.8218 17.8492 3.21233L20.6777 6.04075C21.0682 6.43128 21.0682 7.06444 20.6777 7.45497L7.24264 20.89Z" fill="#000"></path></svg></button>
                </div>
           </div>
            )
          })
        }
        </div>
    )
}

export default TodoList