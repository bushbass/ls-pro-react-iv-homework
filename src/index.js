import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { render } from 'react-dom';
import About from './About';
import Hobbies from './Hobbies';
import Media from './Media';
import './styles.css';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center'
};

const App = () => (
  <Router>
    <div>
      <header>
        <h1>Alex Nielsen</h1></header>
      <nav>
        <ul>
          <li>
            <Link to="/about" class='li'>About </Link>
          </li>
          <li>
            <Link to="/hobbies" class='li'>Hobbies </Link>
          </li>
          <li>
            <Link to="/media" class='li'>Media </Link>
          </li>
        </ul>
      </nav>
      <hr />

      <Route path="/about" component={About} />
      <Route path="/hobbies" component={Hobbies} />
      <Route path="/media" component={Media} />
    </div>
  </Router>
);

render(<App />, document.getElementById('root'));
