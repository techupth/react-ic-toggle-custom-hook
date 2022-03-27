import "./App.css";
import Header from "./components/Header";
import PostList from "./components/PostList";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app-wrapper">
        <h1 className="app-title">Posts</h1>
      </div>
      <div className="board">
        <PostList />
      </div>
    </div>
  );
}

export default App;
