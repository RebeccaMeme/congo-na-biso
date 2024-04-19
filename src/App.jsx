import React from 'react';
import Home from './pages/home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import MyForm from './pages/login';
import FormulaireInscription from './pages/register';
function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path= "/" element= {<Home/>}/>
        <Route path='/login' element= {<MyForm/>}/>
         <Route path='/register' element= {<FormulaireInscription/>}/>
        {/* <Route path='/suivi' element= {<FollowUp/>}/>  */}
      </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;