import React from "react"

// export default function Todo() {
//     // return <h2>This is the Todo component</h2>
//     return (
//         <li>
//           <span>
//             Todo text (will come from props)
//           </span>
//           <button onClick={() => alert("Add the markTodoDone method call here")} >
//             Todo isDone ? check here will show either "Done" or "Todo"
//           </button>
//           <button onClick={() => alert("Add the deleteTodo method call here")} >
//             Delete
//           </button>
//         </li>
//       )
// }



// export default function Todo(props) {
//   console.table(props);
//   return (
//     <li>
//       <span>
//         { props.todo.text }
//       </span>
//       <button onClick={() => alert("Add the markTodoDone method call here")} >
//         Todo isDone ? check here will show either "Done" or "Todo"
//       </button>
//       <button onClick={() => alert("Add the deleteTodo method call here")} >
//         Delete
//       </button>
//     </li>
//   )
// }

export default function Todo(props) {
    // console.table(props); <--- no need to use this, we can inspect it in devtools
    return (
      <li>
        <span style={{ opacity: props.todo.isDone ? "0.4" : "1" }}>
          {props.todo.text}
        </span>
        <button onClick={() => props.markTodoDone(props.index)} >
          { props.todo.isDone ? "Done" : "Todo"}
        </button>
        <button onClick={() => props.deleteTodo(props.index)} >
          Delete
        </button>
      </li>
    )
  }