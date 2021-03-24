import './App.css';

import Navbar from './components/Navbar';

import MovieDetail from './components/MovieDetail';
import BookmarkPage from './components/BookmarkPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home';



function App() {

  return (
    <>
    <div className="App flex flex-col gap-3">
      <Navbar />
      <Router>
        <Switch>      
          <Route path="/"   exact ><Home /></Route>
          <Route path="/detail" component={MovieDetail} render={(props)=><MovieDetail {...props} />} ></Route>
          <Route path="/bookmark" component={BookmarkPage} render={(props)=><BookmarkPage {...props} />} ></Route>
        </Switch>    
      </Router>
      
    </div>
    
    </>
  );
}

export default App;
