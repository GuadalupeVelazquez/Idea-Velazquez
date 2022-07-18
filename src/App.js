
import React from 'react';
import ItemListContainer from './components/Contenedor/ItemListContainer';
import ResponsiveAppBar from './components/Navbar/Navbar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import {BrowserRouter, Routes, Route} from 'react-router-dom'



function App() {
 
  return (
    <BrowserRouter>
      <ResponsiveAppBar/>
      <Routes>
        <Route path='/' element = { <ItemListContainer textoSaludo= "Bienvenido a Keyboards!"/> } />
        <Route path='/detalle/:id' element ={<ItemDetailContainer/>} />
        <Route path='/categorias/:categoria' element = {ItemListContainer } />
      {/* <ItemListContainer textoSaludo= "Bienvenido a Keyboards!"/>   */}
      </Routes>
   </BrowserRouter>
  );
}

export default App;
