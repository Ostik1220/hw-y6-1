import './App.css';
import { Routes, Route } from 'react-router-dom';
import { MainPage } from './components/MainPage';
import { Movies } from './components/Movie';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </div>
  );
}

export default App;
