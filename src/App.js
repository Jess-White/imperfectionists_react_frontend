import './App.css';
import Header from './Components/Header';
import Navigation from './Components/Navigation';
import BlogPostIndex from './Components/BlogPostIndex';
import BlogPostShow from './Components/BlogPostShow';
import BlogPostNew from './Components/BlogPostNew';
import BlogPostUpdate from './Components/BlogPostUpdate';
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
          </Switch>
        </BrowserRouter>
        <Footer />
      </div>
  );
}

export default App;
