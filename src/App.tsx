import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/rooms/new" component={NewRoom} />
      {/* <NewRoom /> */}
      {/* <Home /> */}
    </BrowserRouter>
  );
}

export default App;
