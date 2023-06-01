import { Link } from "react-router-dom";

export default function Header() {
    return(
        <div className="header" style={{marginTop: '-100px', marginBottom: '4    0px'}}>
            <nav>
                <div>
                    <h1>BENTLIZONE</h1>
                </div>
                <div className="nav-content">
                    <Link to={'/'}>
                        <p>home</p>
                    </Link>
                    <Link to={'/menu'}>
                        <p>menu</p>
                    </Link>
                    <Link to={'/services'}>
                        <p>services</p>
                    </Link>
                    <Link to={'/about'}>
                        <p>about us</p>
                    </Link>
                    <Link to={'/contact'}>
                        <p>contact</p>
                    </Link>
                </div>
            </nav>
        </div>
    )
}