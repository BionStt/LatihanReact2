import React ,{ useState }from "react"

export default function TodoInput(props) {
    // return <h2>This is the TodoInput component</h2>
   
    // const handleSubmit = () => {
    //     alert("Update the props.todos with new text from user")
    // }
    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log('Ran handleSubmit', props)
    }

    return (
        <form onSubmit={handleSubmit} >
          <input
            className="add-todo"
            type="text"
            value=""
            onChange={ () => alert("Update the local state here") }
          />
        </form>
    )



}