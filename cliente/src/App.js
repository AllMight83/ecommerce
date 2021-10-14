
import './App.css';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import BookList from '../src/components/BookList';
import Main from '../src/components/Main';
import details from './components/Details';
import One from '../src/components/One';
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
