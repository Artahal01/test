import "./style.css";
export const NavBar = () => {
  return (
    <div>
      <div className="navbar">
        <div className="navbar-logo">Vaika</div>
        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#pojects">Works</a>
          <a href="#contact">Contact</a>
          <span></span>
        </nav>
      </div>
    </div>
  )
}