import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { getFoodListByCategoryName } from "../api/api";
import { Preloader } from "../components/preloader";
import { CardsList } from "../components/cardsList";
import { CustomButton } from "../components/customButton";
import { Search } from "../components/search";

export function CategoryDishesPage() {
    const [searchParams] = useSearchParams();
    const [dishes, setDishes] = useState([]);
    const [filteredDishes, setFilteredDishes] = useState(dishes);
    const [category] = useState(searchParams.get("id"));
    const [isDataLoading, setIsDataLoading] = useState(true);
    const navigate = useNavigate();

    const prepareAndSetDishes = (data = []) => {
        let dishesList = data.map((dish) => {
            return {
                id: dish.idMeal,
                image: dish.strMealThumb,
                title: dish.strMeal,
                linkTitle: `Show Detail`,
                linkTo: `/dish/${dish.idMeal}`,
            };
        });

        setDishes(dishesList);
        setFilteredDishes(dishesList);
    };

    const searchDishes = (searchString) => {
        console.log("searchString ", searchString);
        let filteredDishes = dishes.filter((item) => {
            return item.title
                .toLocaleLowerCase()
                .includes(searchString.toLocaleLowerCase());
        });
        setFilteredDishes(filteredDishes);
    };

    useEffect(() => {
        setIsDataLoading(true);
        getFoodListByCategoryName(category)
            .then((data) => {
                setIsDataLoading(false);
                prepareAndSetDishes(data.meals);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [category]);

    return (
        <>
            {isDataLoading ? (
                <Preloader />
            ) : (
                <div>
                    <CustomButton
                        classes={["btn"]}
                        onClick={() => navigate(-1)}
                    >
                        Go Back
                    </CustomButton>
                    <Search cb={searchDishes} />
                    <CardsList listItems={filteredDishes} />
                </div>
            )}
        </>
    );
}
