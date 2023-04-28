import './App.css';
import List from './component/list';
import Create from './component/create';
import Edit from './component/edit';
import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<List/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/edit/:id' element={<Edit/>}/>
      </Routes>
    </div>
  );
}

export default App;
