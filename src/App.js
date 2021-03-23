import { Container } from '@material-ui/core';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Trending from './Pages/Trending/Trending';
import Movies from './Pages/Movies/Movies';
import Series from './Pages/Series/Series';
import Search from './Pages/Search/Search';
import Header from './components/Header/Header';
import ContentDetails from './components/ContentDetails/ContentDetails';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <Container className="App">
        <Switch>
          <Route path="/" component={Trending} exact/>
          <Route path="/movies" component={Movies} />
          <Route path="/series" component={Series} />
          <Route path="/search" component={Search} />
          <Route path="/:type/:id" component={ContentDetails} />
        </Switch>
      </Container>
    </BrowserRouter>
    
  );
}

export default App;
