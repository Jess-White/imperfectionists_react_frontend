import './App.css';
import Header from './Components/Header';
import Navigation from './Components/Navigation';
import BlogPostIndex from './Components/BlogPostIndex';
import BlogPostShow from './Components/BlogPostShow';
import BlogPostNew from './Components/BlogPostNew';
import BlogPostUpdate from './Components/BlogPostUpdate';
import UserIndex from './Components/UserIndex';
import UserNew from './Components/UserNew';
import Login from './Components/Login';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Navigation />
          <Header />
          <Switch>
            <Route exact path="/">
              <Redirect to="/blog_posts" />
            </Route>
            
            <Route exact path={'/blog_posts'} component={BlogPostIndex} />
            <Route path={'/blog_posts/:id'} component={BlogPostShow} />
            <Route path={'/blog_posts-new'} component={BlogPostNew} />
            <Route path={'/blog_posts-update'} component={BlogPostUpdate} />
            <Route path={'/users'} component={UserIndex} />
            <Route path={'/user-new'} component={UserNew} />
            <Route path={'/user-update'} component={UserUpdate} />
            <Route path={'/login'} component={Login} />

          </Switch>
        </BrowserRouter>
      </div>
  );
}

export default App;
