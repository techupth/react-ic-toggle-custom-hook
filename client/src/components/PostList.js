import { posts } from "../data/posts";
import "./PostList.css";

function PostList() {
  return (
    <div className="post-list-container">
      {posts.map((post) => {
        return (
          <div key={post.id} className="post">
            <div className="post-title-container">
              <h1>{post.title}</h1>
              <button>Toggle</button>
            </div>
            <p>{post.content}</p>
          </div>
        );
      })}
    </div>
  );
}

export default PostList;
