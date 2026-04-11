import './App.css';
import { Routes, Route } from 'react-router-dom';
// import { MainPage } from './components/MainPage';
// import { Movies } from './components/Movie';
// import { MoviePage } from './components/MoviePage';
// import {Reviews} from './components/Reviews';
// import {Cast} from './components/Cast';
import { lazy, Suspense } from 'react';
import { FadeLoader } from 'react-spinners';


const MainPage = lazy(() =>

  import("./components/MainPage")
// webpackChunkName: "MainPage" 
)

const Movies = lazy(() => 
  import("./components/Movie")
// webpackChunkName: "Movies" 
)

const MoviePage = lazy(() => 
  import("./components/MoviePage")
// webpackChunkName: "MoviePage" 
)

const Reviews = lazy(() =>
  import("./components/Reviews")
// webpackChunkName: "Reviews" 
)

const Cast = lazy(() =>
  import("./components/Cast")
// webpackChunkName: "Cast" 
)




const App = () => {
  return (
    <div className="App">
      <Suspense fallback={<FadeLoader 
      color="#ff0000"
  cssOverride={{
position: "absolute",
top: "50%",
left: "50%",
transform: "translate(-50%, -50%)"}}
/>}>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MoviePage />} >
                        <Route path="reviews" element={<Reviews />} />
                        <Route path="cast" element={<Cast />} />
                </Route>
      </Routes>
      </Suspense>
    </div>
  );
}

export default App;
