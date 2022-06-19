import { Card } from "../card";
import styles from "./CardsList.module.css";

export function CardsList({ listItems = [] }) {
    return (
        <>
            {listItems.length === 0 ? (
                <h1>Can't load list of categories</h1>
            ) : (
                <div className={styles["list-container"]}>
                    {listItems.map((item) => {
                        return <Card key={item.id} {...item} />;
                    })}
                </div>
            )}
        </>
    );
}
