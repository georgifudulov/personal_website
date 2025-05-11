import { useState } from "react";
import "../styles/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <header className="wrapper header">
        <h1 className="logo">
          <a href="#hero" onClick={handleClose}>
            Georgi Fudulov
          </a>
        </h1>

        <button
          className="menu-toggle"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <FontAwesomeIcon icon={isOpen ? faXmark : faBars} />
        </button>

        <nav className={`wrapper nav ${isOpen ? "open" : ""}`}>
          <ul className="wrapper list" role="list">
            <li>
              <a href="#about" onClick={handleClose}>
                About
              </a>
            </li>
            <li>
              <a href="#what-i-do" onClick={handleClose}>
                What I Do
              </a>
            </li>
            <li>
              <a href="#projects" onClick={handleClose}>
                Projects
              </a>
            </li>
            <li>
              <a href="#contacts" onClick={handleClose}>
                Contacts
              </a>
            </li>
          </ul>
        </nav>
      </header>
      {isOpen && <div className="backdrop" onClick={handleClose}></div>}
    </>
  );
}
