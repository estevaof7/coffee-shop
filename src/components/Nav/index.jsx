export const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black" id="nav">
        <div className="container">
            <a href="/" className="navbar-brand">Brand</a>

            <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#nav-options" aria-controls="nav"
                aria-label="Expand Navigation">
                <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse" style={{flexGrow: 0}} id="nav-options">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a href="/" className="nav-link">About</a>
                    </li>
                    <li className="nav-item">
                        <a href="/" className="nav-link">Menu</a>
                    </li>
                    <li className="nav-item">
                        <a href="/" className="nav-link">Contact</a>
                    </li>
                </ul>
            </div>

        </div>
    </nav>
  )
}
