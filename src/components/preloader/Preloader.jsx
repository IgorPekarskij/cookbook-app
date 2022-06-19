import styles from "./Preloader.module.css";

export function Preloader() {
    const stylesClasses = ["progress", styles["container-position"]];
    return (
        <div className={stylesClasses.join(" ")}>
            <div className="indeterminate"></div>
        </div>
    );
}
