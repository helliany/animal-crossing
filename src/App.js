import Villagers from "./components/VillagersPage/Villagers/Villagers";
import {Provider} from "react-redux";
import store from "./redux/redux-store";
import Container from "./components/common/Container/Container";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Fishes from "./components/FishPage/Fishes/Fishes";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Header />
        <Container>
        <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/villagers">
              <Villagers />
            </Route>
            <Route exact path="/fishes">
              <Fishes />
            </Route>
          </Switch>
        </Container>
      </Provider>
    </Router>
  );
}

export default App;
