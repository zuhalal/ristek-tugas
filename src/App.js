import './App.css';
import Navbar from './components/Navbar';
import MovieDetail from './components/MovieDetail';
import {
  BrowserRouter as Router,
  Switch,
  Route,
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
        </Switch>    
      </Router>
    </div>
    </>
  );
}

export default App;
