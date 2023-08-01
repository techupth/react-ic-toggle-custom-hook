import "./Header.css";

import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <h1>Post App Logo</h1>
      <button className="menu-toggle-button" onClick={toggle}>
        Toggle
      </button>

      {isOpen && (
        <div className="menu-list">
          <div className="menu-item">Menu #1</div>
          <div className="menu-item">Menu #2</div>
        </div>
      )}
    </header>
  );
}

export default Header;
