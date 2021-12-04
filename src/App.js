import './App.css';
import Header from './components/Header/Header';
import Mainpage from './components/Mainpage/Mainpage';
import Navbar from './components/Nav/Navbar';

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
      <Mainpage />
      </div>


    </div>
  );
}

export default App;
