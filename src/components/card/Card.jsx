import { Link } from "react-router-dom";
import styles from "./Card.module.css";

export function Card(props) {
    const {
        title = "Title",
        image,
        description,
        linkTitle = "Go",
        linkTo = "/",
    } = props;

    const containerStyles = ["card", styles["card-container"]];
    const contentStyles = ["card-content", styles["card-content"]];

    return (
        <div className={containerStyles.join(" ")}>
            <div className="card-image">
                <img src={image} alt={title} />
            </div>
            <div className={contentStyles.join(" ")}>
                <span className="card-title">{title}</span>
                {description ? (
                    <p>
                        {description.length > 100
                            ? `${description.slice(0, 100)}
                        ...`
                            : description}
                    </p>
                ) : null}
            </div>
            <div className="card-action">
                <Link to={linkTo}>{linkTitle}</Link>
            </div>
        </div>
    );
}
