import React,{ useState } from 'react'
import Addition from './Component/Addition'
import Addition2 from './Component/Addition2'
import Toastr from './Component/AnimationToastr'
import CustomToastr from './Component/CustomToastr'
import Sweetalertdemo from './Component/Sweetalertdemo'
import Calculation from './Component/Calculation'
import ChangeColor from './Component/ChangeColor'
import ClockDemo from './Component/ClockDemo'
import ClockDemoWithClass from './Component/ClockDemoWithClass'
import ClockDemoFromGeeks from './Component/ClockDemoFromGeeks'
import ClockLiveDemo from './Component/ClockLiveDemo'
import Todo from './Component/Todo/Todo'
import TodoInput from './Component/Todo/TodoInput'
import Menu from './Component/RecipesApp/Menu'
import data1 from './Component/RecipesApp/data/recipes.json'
import StarRating1 from './Component/StarRating/StarRating1'
import StarRating2 from './Component/StarRating/StarRating2'
import StarRating3 from './Component/StarRating/StarRating3'
import StarRating4 from './Component/StarRating/StarRating4/StarRating'
import StarRating5 from './Component/StarRating/StarRating5/StarRating'
import StarRatingOutput from './Component/StarRating/StarRating6/StarRatingOutput'
import StarRatingOutput2 from './Component/StarRating/StarRating7/StarRatingOutput'
import StarRatingOutput3 from './Component/StarRating/StarRating8/StarRatingOutput'
import StarRatingOutput4 from './Component/StarRating/StarRating9/StarRatingOutput'

const Latihan1 = () => {
  const data = [
    { text: "Go shopping", isDone: false },
    { text: "Wash dishes", isDone: false },
    { text: "Study for the exam", isDone: false }
  ]

  const [todos, setTodos] = useState(data);

  const markTodoDone = (index) => {
    // console.log(index); <--- no need to use this, we can inspect it in devtools
    const updatedTodos = [...todos];
    updatedTodos[index].isDone = !updatedTodos[index].isDone;
    setTodos(updatedTodos);
  }

  const deleteTodo = (index) => {
    // console.log(index); <--- no need to use this, we can inspect it in devtools
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  }

  return (
    <div>
      <h1>Haloo Latihan 1 nih</h1>
        <Addition></Addition>
        <Addition2></Addition2>
        <br/>
        <br/>
        <StarRating1></StarRating1>
        <br/>
        <br/>
        <StarRating2></StarRating2>
        <br/>
        <br/>
        <StarRating3></StarRating3>
        <br/>
        <br/>
        <StarRating4></StarRating4>
        <br/>
        <br/>
        <StarRating5></StarRating5>
        <br/>
        <br/>
       <StarRatingOutput></StarRatingOutput>
        <br/>
        <br/>
        <StarRatingOutput2></StarRatingOutput2>
        <br/>
        <br/>
        <StarRatingOutput3></StarRatingOutput3>
        <br/>
        <br/>
        <StarRatingOutput4></StarRatingOutput4>
        <br/>
        <br/>
        <Menu recipes={data1}></Menu>
        <br/>
        <br/>
        <Toastr></Toastr>
        <br/>
        <CustomToastr></CustomToastr>
        <br/>
        <Sweetalertdemo></Sweetalertdemo>
        <br/>
        <Calculation></Calculation>
        <br/>
        <ChangeColor></ChangeColor>
        <br/>
        <ClockDemo></ClockDemo>
        <br/>
        <ClockDemoWithClass></ClockDemoWithClass>
        <br/>
        <ClockDemoFromGeeks></ClockDemoFromGeeks>
        <br/>
        <ClockLiveDemo></ClockLiveDemo>
        <br/>
        {/* <Todo></Todo> */}
        <br/>
        {/* <TodoInput></TodoInput> */}
        <br/>
        {/* <h1>Todo app in construction...</h1>
       {
          todos.map(
            (todo, index) => (
              <Todo todo={todo} key={index} />
            )
          )
       }
      <TodoInput todos={todos} setTodos={setTodos} /> */}
        <br/>
        <br/>
        <h1>Todo app in construction...</h1>
       {
          todos.map(
            (todo, index) => (
              <Todo
                todo={todo}
                key={index}
                index={index}
                markTodoDone={markTodoDone}
                deleteTodo={deleteTodo}
              />
            )
          )
       }
      <TodoInput todos={todos} setTodos={setTodos} />
        <br/>

    </div>
  )
}

export default Latihan1
