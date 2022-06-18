import "./CustomButton.css";

export function CustomButton({ classes = [], onClick, children }) {
    const styles = ["btn-align-default", ...classes];
    return (
        <button className={styles.join(" ")} onClick={() => onClick()}>
            {children}
        </button>
    );
}
