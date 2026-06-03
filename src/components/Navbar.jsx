import "../styles/Navbar.css";

function Navbar() {
    return (
        <nav className="navbar">
            <h1 className="logo">SmartCV</h1>

            <div className="nav-links">
                <button>Home</button>
                <button>Features</button>
                <button>About</button>
                <button>Login</button>
            </div>
        </nav>
    );
}

export default Navbar;