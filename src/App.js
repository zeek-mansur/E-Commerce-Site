// styles
import './App.css';
import Modal from './components/Modal';

import NavBar from './components/NavBar';
import Sneakers from './pages/sneakers/Sneakers';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <NavBar />
        <Sneakers />
        <Modal />
      </div>
    </div>
  );
}

export default App;
