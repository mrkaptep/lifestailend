import logo from './logo.svg';
import './App.scss';
import routes from './routes';
import Header from './Components/Header/Header';

function App() {
  return ( 
    <div className = "App" > 
      <Header/>
      {routes} 
    </div>
  );
}

export default App;