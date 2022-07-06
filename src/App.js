
import React from 'react';
import './App.css';
import ItemListContainer from './components/Contenedor/ItemListContainer';
import ResponsiveAppBar from './components/Navbar/Navbar'


function App() {
 
  return (
    <div className='App'>
      <ResponsiveAppBar/>
      <ItemListContainer textoSaludo= "Bienvenido a Keyboards!"/>  
      
    </div>
  );
}

export default App;
