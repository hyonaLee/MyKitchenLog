import "./style.min.css";
import Header from "./Components/View/Header/Header";
import Main from "./Components/View/Main/Main";
import Edit from "./Components/View/Main/Edit";
import Detail from "./Components/View/Main/Detail";
import { Route } from "react-router-dom";
import NewPost from "./Components/View/Main/NewPost";

function App() {

  return (
    <div className="Wrap">
      <Header />
      <Route exact path="/" component={Main} />
      <Route exact path="/NewPost" component={NewPost} />
      <Route exact path="/Edit/:id" component={Edit} />
      <Route exact path="/Detail/:id" component={Detail} />
    </div>
  );
}

export default App;
