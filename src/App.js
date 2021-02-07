import logo from './logo.svg';
import './App.css';
import Header from './components/layouts/header';
import Sidebar from './components/layouts/sidebar';
import Query from './components/query';

function App() {
  return (
    <div className="App">
  <Header/>
  <Sidebar/>
  <Query/>
    </div>
  );
}

export default App;
