import './App.css';
import React, { useState } from 'react';
import Header from './Components/Header';
import Navigation from './Components/Navigation';
import BlogPostIndex from './Components/BlogPostIndex';
import BlogPostShow from './Components/BlogPostShow';
import BlogPostNew from './Components/BlogPostNew';
import BlogPostUpdate from './Components/BlogPostUpdate';
import UserIndex from './Components/UserIndex';
import UserNew from './Components/UserNew';
import UserUpdate from './Components/UserUpdate';
// import Login from './Components/Login';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function App() {

  const [isDark, setIsDark] = useState(false);

  const handleDarkMode = () => {
    setIsDark((prevState) => !prevState)
    console.log(isDark)
  };

  return (
    <div className={isDark ? "App dark" : "App"}>
      <div className={isDark ? "dark" : null}>
      <div>
        <Button onClick={handleDarkMode}>Turn on Dark Mode</Button>
        <BrowserRouter>
          <Navigation />
          <Header />
          <Switch>
            <Route exact path="/">
              <Redirect to="/blog_posts" />
            </Route>
            
            <Route exact path={'/blog_posts'} component={BlogPostIndex} />
            <Route exact path={'/blog_posts/:id'} component={BlogPostShow} />
            <Route exact path={'/blog_posts/new'} component={BlogPostNew} />
            <Route exact path={'/blog_posts/:id/update'} component={BlogPostUpdate} />
            <Route exact path={'/users'} component={UserIndex} />
            <Route exact path={'/user/new'} component={UserNew} />
            <Route exact path={'/user/:id'} component={UserUpdate} />
            {/* <Route path={'/login'} component={Login} /> */}

            </Switch>
          </BrowserRouter>
        </div>
        </div>
      </div>
  );
}

export default App;
