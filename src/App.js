import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/layouts/header';
import Sidebar from './components/layouts/sidebar';
import Query from './components/query';
import Dashboard from './components/dashboard';
import Quiz from './components/Quiz';

function App() {
  return (
   <Router>
    <div className="App">
      <Header/>  
      <Sidebar/>
      <Route exact path="/demo" component={Dashboard}/>
      <Switch>
      <Route exact path="/" component={Query}/>
      <Route exact path="/quiz" component={Quiz}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
