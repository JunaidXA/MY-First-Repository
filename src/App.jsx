import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomeComponent from './Routes/Home/HomeComponent';
import NavigationComponent from './Routes/Navigation/NavigationComponent';

const Shop = () => {
  return <h1>This is a Shop Page</h1>
}

const App = () => {

  return (
    <Routes>
      <Route path='/' element={<NavigationComponent/>}> 
      <Route index element={<HomeComponent/>}/>
      <Route path='shop' element={<Shop/>}/>
      </Route>
    </Routes>
  );
};
export default App;