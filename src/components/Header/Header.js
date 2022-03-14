import "./header.css";

const Header = () => {
  return (
    <div>
      <img
        src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1"
        alt="docplanner logo"
      />
      <ul>
        <li style={{ color: "blue" }}>About us</li>
        <li>Career</li>
        <li>Departments</li>
      </ul>
    </div>
  );
};

export default Header;
