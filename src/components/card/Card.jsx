import { Link } from "react-router-dom";
import "./Card.css";

export function Card(props) {
    const {
        title = "Title",
        image,
        description,
        linkTitle = "Go",
        linkTo = "/",
    } = props;

    return (
        <div className="card card-container">
            <div className="card-image">
                <img src={image} alt={title} />
            </div>
            <div className="card-content">
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
