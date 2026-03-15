import './App.css';
import { Routes, Route } from 'react-router-dom';
import { MainPage } from './components/MainPage';
import { Movies } from './components/Movie';
import { MoviePage } from './components/MoviePage';
import {Reviews} from './components/Reviews';
import {Cast} from './components/Cast';


const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MoviePage />} >
                        <Route path="reviews" element={<Reviews />} />
                        <Route path="cast" element={<Cast />} />
                </Route>
      </Routes>
    </div>
  );
}

export default App;
