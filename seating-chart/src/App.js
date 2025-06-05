import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, HashRouter } from 'react-router-dom';
import SeatingChart from './apps/seating-chart/SeatingChart';

function App() {
  return (

    <HashRouter>
      <Routes>
        <Route path="/" index element={<div>Home</div>}/>
        <Route path="/seating-chart" index element={<SeatingChart/>}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
