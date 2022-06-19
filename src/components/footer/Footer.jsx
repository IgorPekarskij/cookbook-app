import styles from "./Footer.module.css";

export function Footer() {
    const stylesClasses = ["page-footer", styles["page-footer"]];
    return (
        <footer className={stylesClasses.join(" ")}>
            <div className="footer-copyright">
                <div className="container">
                    © {new Date().getFullYear()} Igor Pekarsky
                </div>
            </div>
        </footer>
    );
}
