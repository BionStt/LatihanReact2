import { v4 as uuid } from "uuid";
import NavBarCrudMovie from "./NavBar";
import { useEffect, useState } from "react";
import MoviesDashboard from "./MoviesDashboard";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";

function Tampilkan() {
    const [movies, setMovies] = useState([]);
    const [movie, setMovie] = useState();
    const [showAddForm, setshowAddForm] = useState(false);
    const [showEditForm, setshowEditForm] = useState(false);
  
    useEffect(() => {
      axios.get("http://localhost:5073/api/Movie/GetMovies").then((response) => {
        setMovies(response.data);
      });
    }, [movies]);
  
    function handleEditMovie(movie) {
      axios({
        method: "put",
        url: `http://localhost:5073/api/movie/UpdateMovie/${movie.id}`,
        data: {
          Id: movie.id,
          Title: movie.title,
          MovieLanguage: movie.movieLanguage,
          ReleaseYear: movie.releaseYear,
          OTT: movie.ott,
        },
        config: {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        },
      })
        .then((response) => {
          console.log(response);
          toast.success("Movie updated successfully", {
            position: toast.POSITION.TOP_RIGHT,
          });
        })
        .catch((error) => {
          console.log("the error has occured: " + error);
        });
  
      setMovies([...movies, movie]);
    }
  
    function handleSumbit(movie) {
      const data = {
        Id: uuid(),
        Title: movie.title,
        MovieLanguage: movie.movieLanguage,
        ReleaseYear: movie.releaseYear,
        OTT: movie.ott,
      };
      axios({
        method: "post",
        url: "http://localhost:5073/api/Movie/AddMovie",
        data: data,
        config: {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        },
      })
        .then((response) => {
          console.log(response);
          toast.success("Movie added successfully", {
            position: toast.POSITION.TOP_RIGHT,
          });
        })
        .catch((error) => {
          console.log("the error has occured: " + error);
        });
  
      setMovies([...movies, data]);
    }
  
    function addForm() {
      setshowEditForm(false);
      setshowAddForm(true);
    }
  
    function closeForm() {
      setshowAddForm(false);
      setshowEditForm(false);
      setMovie("");
    }
  
    function editForm(movie) {
      setMovie("");
      setshowAddForm(false);
      setshowEditForm(true);
      setMovie(movie);
    }
  
    function deleteMovie(id) {
      setshowEditForm(false);
      setMovie("");
      axios.delete(`http://localhost:5073/api/movie/${id}`).then(() => {
        toast.success("Movie deleted successfully", {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  
      setMovies([...movies.filter((x) => x.id !== id)]);
    }
  
    return (
      <div>
        <NavBarCrudMovie addForm={addForm} />
        <h1>Movies Data</h1>
        <MoviesDashboard
          movies={movies}
          showAddForm={showAddForm}
          showEditForm={showEditForm}
          editForm={editForm}
          movie={movie}
          deleteMovie={deleteMovie}
          closeForm={closeForm}
          handleSumbit={handleSumbit}
          handleEditMovie={handleEditMovie}
        />
        <ToastContainer position="top-center" />
      </div>
    );
  }
  
  export default Tampilkan;
  