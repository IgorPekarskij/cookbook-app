import { Card } from "../card/Card";
import "./CardsList.css";

export function CardsList({ listItems = [] }) {
    return (
        <>
            {listItems.length === 0 ? (
                <h1>Can't load list of categories</h1>
            ) : (
                <div className="list-container">
                    {listItems.map((item) => {
                        return <Card key={item.id} {...item} />;
                    })}
                </div>
            )}
        </>
    );
}
