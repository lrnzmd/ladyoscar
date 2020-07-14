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
    <h1>Sono la home ciao</h1>
    
  )
}

export default App;
