import styles from "./DishDetail.module.css";

export function DishDetails(props) {
    const {
        strMeal,
        strCategory,
        strArea,
        strInstructions,
        strMealThumb,
        strYoutube,
    } = props;

    const getIngredients = () => {
        let data = Object.keys(props)
            .filter((key) => key.includes("Ingredient") && props[key])
            .map((key) => {
                return {
                    ingredient: props[key],
                    qty: props[`strMeasure${key.split("Ingredient")[1]}`],
                };
            });
        return data;
    };

    return (
        <div className={styles["dish-details-content"]}>
            <h1>{strMeal}</h1>
            <img src={strMealThumb} alt={strMeal} />
            <div className={styles["dish-data"]}>
                <p>
                    <strong>Category: </strong> {strCategory}
                </p>
                {strArea ? (
                    <span>
                        <strong>Area: </strong>
                        {strArea}
                    </span>
                ) : null}
            </div>
            <p>{strInstructions}</p>
            <div className={styles["dish-data"]}>
                <h5>Ingredients</h5>
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Ingredient</th>
                            <th>Quantity</th>
                        </tr>
                    </thead>

                    <tbody>
                        {getIngredients().map((item, index) => {
                            return (
                                <tr key={item.ingredient + index}>
                                    <td>{index + 1}</td>
                                    <td>{item.ingredient}</td>
                                    <td>{item.qty}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            {strYoutube ? (
                <div className={styles["video-container"]}>
                    <h5>Video recipe</h5>
                    <iframe
                        className={styles["video-content"]}
                        src={`https://www.youtube.com/embed/${
                            strYoutube.split("v=")[1]
                        }`}
                        title={strMeal}
                        frameBorder="0"
                        allow="clipboard-write;"
                    />
                </div>
            ) : null}
        </div>
    );
}
