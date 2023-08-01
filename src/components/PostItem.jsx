import { useState } from "react";

function PostItem(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="post">
      <div className="post-title-container">
        <h1>{props.title}</h1>
        <button onClick={toggle}>Toggle</button>
      </div>
      {isOpen && <p>{props.content}</p>}
    </div>
  );
}

export default PostItem;
