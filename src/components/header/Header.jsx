import { Link } from "react-router-dom";
import "./Header.css";

export function Header() {
    return (
        <div className="navigation">
            <nav>
                <div className="nav-wrapper">
                    <Link to="/" className="brand-logo logo-image">
                        <img
                            src="/cookbook-app/recipes_book_logo.svg"
                            alt="Recipes Book"
                            width="55px"
                        />
                        COOKBOOK
                    </Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li>
                            <Link to="/">Dishes</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/contacts">Contact</Link>
                        </li>
                        <li>
                            <a
                                href="https://github.com/IgorPekarskij/cookbook-app"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Repo
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}
