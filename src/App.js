import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import DataContext, { DataProvider } from './context/DataContext';
import Toaster from './CommonView/Toaster';
import { useContext } from 'react';
import Footer from './components/Footer';

function App() {
  const { posts, setPosts, errMsg, showAlert , setShowAlert } = useContext(DataContext);
  
  return (
    <div className="App">
      <div className="row">
        <div className="col-md-12">
          <Header />
        </div>
      </div>   
      <div className="row">
        <div className="col-md-12">
          <Home />
        </div>
      </div>    
      <div className="row">
        <div className="col-md-12">
          <Footer />
        </div>
      </div>  
    </div>
  );
}

export default App;
