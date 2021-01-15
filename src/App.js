import './App.css';
import Header from './Components/Header';
import BlogPostIndex from './Components/BlogPostIndex';
import BlogPostNew from './Components/BlogPostNew';

function App() {
  return (
    <div className="App">
      <Header />
      <BlogPostIndex />
      <BlogPostNew />
    </div>
  );
}

export default App;
