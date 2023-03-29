import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import View from './components/View';
import Addlibrary from './components/Addlibrary';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        
        <Route path='/' element={<View />} />
        <Route path='/Add'
         element={<Addlibrary data={{id: '',genre:'',title:''}} 
         method="post"/>}/>

      </Routes>
      
    </div>
  );
}

export default App;
