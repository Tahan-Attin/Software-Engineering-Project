
import Signup from './components/Signup';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
     <BrowserRouter>
       <Routes>
         <Route path="/" element={<Signup/>}></Route>
       </Routes>
     </BrowserRouter>

    </div>
    
  );
}

export default App;
