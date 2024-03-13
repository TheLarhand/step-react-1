const Header = ({navLinks, books}) => {
  return (
  <header>
    <div>
      <h2>Библивотека</h2>
      <nav>
        {navLinks.map ((navLink) => 
          <a href={navLink.href}>{navLink.title}</a>
        )}
      </nav>
    </div>

  <div>
      <h1>У нас на сайте {books.length} книг</h1>
  </div>
  </header>
  )
}

export default Header;