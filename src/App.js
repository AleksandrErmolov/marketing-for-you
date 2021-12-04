import { Routes, Route } from 'react-router';
import './App.css';
import Header from './components/Header/Header';
import Mainpage from './components/Mainpage/Mainpage';
import Navbar from './components/Nav/Navbar';
import Quote from './components/Quote/Quote';

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/main/*" element={<Mainpage />} />
          <Route path="/quote/*" element={<Quote />} />
       </Routes>
      </div>


    </div>
  );
}

export default App;
