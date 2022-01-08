import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

function App() {

  const history = createBrowserHistory({ forceRefresh: true });

  return (
    <Router history={history} basename="/">
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/profile' exact element={<Profile />} />
        <Route path='/login' exact element={<Login />} />
        <Route path='/register' exact element={<Register />} />
      </Routes>
    </Router>
  )
}

export default App;
