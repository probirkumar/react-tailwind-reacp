import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Pricing from './Components/Pricing/Pricing';
import Assignment from './Components/Assignment/Assignment';
import PhoneBar from './Components/PhoneBar/PhoneBar';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <h1 className='text-5xl font-bold'>This is a Big Header</h1>
      <Pricing></Pricing>
      <Assignment></Assignment>
      <PhoneBar></PhoneBar>
    </div>
  );
}

export default App;
