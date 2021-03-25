
export function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-transparent w-100">
            <div className="container d-flex align-items-center justify-content-center">
                <a className="navbar-brand" href="#">Navbar</a>

                <ul className="navbar-nav d-flex flex-row">
                    <li className="nav-item me-4">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}