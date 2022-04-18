import Routers from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Redux/store";
import axios from "axios";

axios.defaults.baseURL = "https://fakestoreapi.com";

function App() {
  return (
    <Provider store={store}>
      <AppWrapper />
    </Provider>
  );
}

const AppWrapper = () => {
  return(
    <Router>
      <Routers />
    </Router>
  )
}

export default App;
