import cabecera from './/libraryPhoto.png'
import './App.css';

//imprtamon componentes
import CompShowBooks from './book/ShowBook.js';
import CompCreteBook from './book/CreateBook';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CompPriamryPage from './book/PrimaryPage';
import CompEditBook from './book/EditBook';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={cabecera} className="cabecera" alt=''/>
      </header>
      <BrowserRouter>
        <Routes>
          <Route path='/showBooks' element = { <CompShowBooks/> }> </Route>
          <Route path='/create' element = { <CompCreteBook/> }> </Route>
          <Route path='/home' element = { <CompPriamryPage/> }> </Route>
          <Route path='/edit/:id' element = { <CompEditBook/> }></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
