import './App.css';
import Header from './Components/View/Header/Header';
import Main from './Components/View/Main/Main';
import Write from './Components/View/Main/Write';
import Modal from './Components/View/Main/Modal';
import Detail from './Components/View/Main/Detail';
import {Route} from 'react-router-dom';



function App() {
  return (
    <div>
        <Header/>
        <Route exact path="/" component={Main}/>
        <Route exact path="/Write" component={Write}/>
        <Route exact path="/Detail" component={Detail}/>
        <Route exact path="/Modal" component={Modal}/>
    </div>
  );
}

export default App;
