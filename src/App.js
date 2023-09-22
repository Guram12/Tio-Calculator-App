import {Header} from "./Header"
import { Bill } from './Bill';
import { Tip } from './Tip';
import { People } from './People';
import { Result } from './Result';
import './App.css';


function App() {
  return (
    <div className="App">
      <Header />
      <div className="center-container">
      <div className="centered-element">
        <Bill />
        <Tip />
        <People />
        <Result/>
      </div>
    </div>
    </div>
  );
}

export default App;


