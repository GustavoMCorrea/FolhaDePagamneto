import React from 'react';




import './App.css';
import NavBar from './components/navbar/navbar';
import SideBar from './components/sidebar/sidebar'
import Rotas from './rota';


class App extends React.Component {
  render(){
    return (
      <div className='container'>
      <div className='sidebar'><SideBar /></div>
      <div className='navbar'><NavBar /></div>
      <div className='home'><Rotas/></div>
      </div>
    );
  }
}
  

export default App;
