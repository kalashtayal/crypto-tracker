import React from 'react';
import './App.css';
import { BrowserRouter ,Route ,Routes } from 'react-router-dom';
import Home from "./pages/Home"
import DashboardPage from './pages/Dashboard';
import Coin from './pages/Coin';
import ComparePage from "./pages/ComparePage";
import WatchList from './pages/WatchlistPage';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<DashboardPage />} />
        <Route path="/coin/:id" element={<Coin />} />
        <Route path="/compare" element={<ComparePage />} />
        <Route path="/watchlist" element={<WatchList /> } />
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
