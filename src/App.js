
import './App.css';
import { Recipe } from './components/Recipe'

const data = require('./recipies.json')

function App() {
  return (
    <div className="App">
        <Recipe data={data}/>
    </div>
  );
}

export default App;
