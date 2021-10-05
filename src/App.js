import './App.css';
import Header from './Components/View/Header/Header';
import Main from './Components/View/Main/Main';
import Write from './Components/View/Main/Write';
import {Route} from 'react-router-dom';



function App() {
  return (
    <div>
        <Header/>
        <Route exact path="/" component={Main}/>
        <Route exact path="/Write" component={Write}/>
    </div>
  );
}

export default App;
