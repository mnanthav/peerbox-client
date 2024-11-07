import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import routes from './routes';
import './style.css';

function App() {
  return (
    <Router>
      <div>
        {/* Navbar */}
        <NavBar />
        <div>
          <Routes>
            {routes.map((route, index) => (
              <Route 
                key={index}
                path={route.path}
                element={route.component}
                exact={route.exact}
              />
            ))}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
