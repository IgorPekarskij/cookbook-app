import { Link } from "react-router-dom";
import logo from "./recipes_book_logo.svg";
import styles from "./Header.module.css";

export function Header() {
    return (
        <div className={styles.navigation}>
            <nav>
                <div
                    className={[
                        "nav-wrapper",
                        styles["header-background"],
                    ].join(" ")}
                >
                    <Link
                        to="/"
                        className={[
                            "brand-logo",
                            styles["logo-image-align"],
                        ].join(" ")}
                    >
                        <img src={logo} alt="Recipes Book" width="55px" />
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
