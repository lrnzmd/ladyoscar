import React from 'react';
import './App.css';
import Navbar from './component/Navbar'
import Contacts from './component/Contacts';
import Blog from './component/Blog';
import PostDetail from './component/PostDetail'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
            <Navbar title="sito router"/>
          <Switch>
            <Route path="/" exact={true} component={Home}></Route>
            <Route path="/blog" exact={true} component={Blog}></Route>
            <Route path="/blog/:id" component={PostDetail}></Route>
            <Route path="/contatti" component={Contacts}></Route>
           </Switch>
        </Router>
    </div>
  );
}



const Home = () => {
  return(
    <h1>Sono la home</h1>
  )
}

export default App;
