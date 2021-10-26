import Villagers from "./components/VillagersPage/Villagers/Villagers";
import {Provider} from "react-redux";
import store from "./redux/reduxStore";
import Container from "./components/common/Container/Container";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Fishes from "./components/FishPage/Fishes/Fishes";
import Bugs from "./components/BugsPage/Bugs/Bugs";
import Details from "./components/DetailsPage/Details/Details";
import Error from "./components/common/Error/Error";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Provider store={store}>
        <Header />
        <Container>
          <Switch>
            <Route exact path="/"><Home /></Route>
            <Route exact path="/villagers"><Villagers /></Route>
            <Route exact path="/fish"><Fishes /></Route>
            <Route exact path="/bugs"><Bugs /></Route>
            <Route
              path={["/fish/:id", "/villagers/:id", "/bugs/:id"]}
              render={({match}) => <Details data={match} />}
            />
            <Route path="*"><Error /></Route>
          </Switch>
        </Container>
      </Provider>
    </Router>
  );
}

export default App;
