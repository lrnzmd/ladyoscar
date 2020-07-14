import React from 'react';
import './App.css';
import Navbar from './component/Navbar'
import Info from './component/Info';
import Game from './component/Game';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
            <Navbar title="sito router"/>
          <Switch>
            <Route path="/" exact={true} component={Home}></Route>
            <Route path="/game" exact={true} component={Game}></Route>
            <Route path="/info" component={Info}></Route>
           </Switch>
        </Router>
    </div>
  );
}



const Home = () => {
  return(
    <img className="menu" src={'https://cdn.steamgriddb.com/logo_thumb/1b69ebedb522700034547abc5652ffac.png'} alt="Logo" /> 
  )
}

export default App;
