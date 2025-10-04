
import './App.css';
import { Recipe } from './components/Recipe'
import './App.module.css'
const data = require('./recipies.json')

function App() {
  return (
    <div>
        <Recipe data={data}/>
    </div>
  );
}

export default App;
