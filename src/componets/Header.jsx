import '../styles/Header.css'

export default function Header() {
  return (
    <header className="wrapper header">
      <h1 className='logo'><a href='#hero'>Georgi Fudulov</a></h1>
      <nav className='wrapper'>
        <ul className="wrapper list" role='list'>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#what-i-do">What I Do</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contacts">Contacts</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
