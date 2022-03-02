import React from 'react';
import './App.css';
import {Switch, Route, Link} from 'react-router-dom';
import Button from "./components/button/Button";
import request from "superagent";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemon: {}
    }
  }

  componentDidMount() {
    const {ditto} = this.state.pokemon;
    if (!ditto) {
      request.get("https://pokeapi.co/api/v2/pokemon/ditto").then((data) => {
        if (data.body) {
          this.setState((prevState) => {
            return {pokemon: Object.assign(prevState.pokemon, {ditto: data.body})};
          }, () => {
            console.warn(this.state.pokemon);
          });
        }
      });
    }
    else {
      console.warn("already have ditto");
    }
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/items" component={Items}/>
          <Route path="/category" component={Category}/>
        </Switch>
      </div>
    );
  }
}

export const Home = () => (
  <div>
    Home Component
    <>
      <Link to="/items"><Button name="Items" /></Link>
      <Link to="/category"><Button name="Category" /></Link>
    </>
  </div>
);

export const Items = () => (
  <div>
    <h1>Items Component</h1>
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
      <li>Item 4</li>
    </ul>
  </div>

);

export const Category = () => (
  <div>
    <h1>Category Component</h1>
    <ul>
      <li>Category 1</li>
      <li>Category 2</li>
      <li>Category 3</li>
      <li>Category 4</li>
    </ul>
  </div>
);

export default App;
