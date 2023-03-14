import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div style={{ width: "100vw", height: "5rem" }}>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/power-checker">Power Checker</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
