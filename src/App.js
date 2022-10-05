// styles
import './App.css';

import NavBar from './components/NavBar';
import Sneakers from './pages/sneakers/Sneakers';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <NavBar />
        <Sneakers />
      </div>
    </div>
  );
}

export default App;
