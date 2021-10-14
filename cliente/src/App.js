
import './App.css';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import Main from '../src/components/Main';

import Header from '../src/components/Header';
import './styles/styles.scss';
import Footer from './components/Footer';

function App() {
  return (
    
        <div className="App">
        <Header />  
            <BrowserRouter>
    
<Main /> 
    </BrowserRouter>
   <Footer />
    
        </div>
  
  );
}

export default App;
