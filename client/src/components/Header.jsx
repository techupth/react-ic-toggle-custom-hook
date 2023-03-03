import "./Header.css";

function Header() {
  return (
    <header>
      <h1>Post App Logo</h1>
      <button className="menu-toggle-button">Toggle</button>

      <div className="menu-list">
        <div className="menu-item">Menu #1</div>
        <div className="menu-item">Menu #2</div>
      </div>
    </header>
  );
}

export default Header;
