import Header from './component/header';
import './App.css';
import Footer from './component/footer';
import Facilities from './component/facility';
import { Route, Routes } from 'react-router-dom';
import Home from './component/home';
import Customer from './component/customer';
import ContractList from './component/contract_list';
import Contract from './component/add_contract';
import CreateCustomer from './component/add_customer';
import AddFacility from './component/add_facility';
import EditCustomer from './component/edit_customer';
import EditFacility from './component/edit_facility';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/facility' element={<Facilities/>}/>
        <Route path='/customer' element={<Customer/>}/>
        <Route path='/contractList' element={<ContractList/>}/>
        <Route path='/contract' element={<Contract/>}/>
        <Route path='/createCustomer' element={<CreateCustomer/>}/>
        <Route path='/addFacility' element={<AddFacility/>}/>
        <Route path='/editCustomer/:id' element={<EditCustomer/>}/>
        <Route path='/editFacility/:id' element={<EditFacility/>}/>
        
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
