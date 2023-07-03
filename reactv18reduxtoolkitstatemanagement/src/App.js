import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/shared/Layout";
import AddFruit from "./pages/AddFruit";
import AllFruits from "./pages/AllFruits";
import UpdateFruit from "./pages/UpdateFruit";

function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllFruits />}></Route>
        <Route path="/add-fruit" element={<AddFruit />}></Route>
        <Route path="/update-fruit/:id" element={<UpdateFruit />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
