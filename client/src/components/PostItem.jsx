function PostItem(props) {
  return (
    <div className="post">
      <div className="post-title-container">
        <h1>{props.title}</h1>
        <button>Toggle</button>
      </div>
      <p>{props.content}</p>
    </div>
  );
}

export default PostItem;
