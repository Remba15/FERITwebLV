import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { StartFirebase } from "./components/firebaseconfig";
import Header from "./components/header/index";
import Routing from "./components/Routes";

function App() {
  StartFirebase();

  return (
    <BrowserRouter>
      <div>
        <Header />
      </div>
      <Routing />
    </BrowserRouter>
  );
}

export default App;
