import { posts } from "../data/posts";
import PostItem from "./PostItem";
import "./PostList.css";

function PostList() {
  return (
    <div className="post-list-container">
      {posts.map((post) => {
        return (
          <PostItem key={post.id} title={post.title} content={post.content} />
        );
      })}
    </div>
  );
}

export default PostList;
