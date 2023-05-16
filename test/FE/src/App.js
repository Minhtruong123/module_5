import './App.css';
import List from './component/list';
import {Route,Routes} from "react-router-dom"
import Edit from './component/edit';
import Create from './component/create';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<List/>}/>
        <Route path='/edit/:id' element={<Edit/>}/>
        <Route path='/create' element={<Create/>}/>
      </Routes>
    </div>
  );
}

export default App;
