import useToggle from "../hooks/useToggle";
import "./Header.css";

function Header() {
  const { isOpen, toggle } = useToggle();

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
