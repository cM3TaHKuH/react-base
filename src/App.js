import Header from './Components/Header/Header';
import './App.css';
import Main from './Components/Main/Main';
import Counter from './Components/Main/copmponents/Counter/Counter';

function App() {
  return (
    <div className="App">
    <Header/>
    <Main username="Ахмед"/>
    </div>
  );
}

export default App;
