import styles from "./CustomButton.module.css";

export function CustomButton({ classes = [], onClick, children }) {
    const stylesArray = [styles["btn-align-default"], ...classes];
    return (
        <button className={stylesArray.join(" ")} onClick={() => onClick()}>
            {children}
        </button>
    );
}
