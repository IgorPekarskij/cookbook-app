import { useEffect, useState } from "react";
import { getListCategories } from "../api/api";
import { Preloader } from "../components/preloader";
import { CardsList } from "../components/cardsList";
import { Search } from "../components/search";

export function DishesCategoriesPage() {
    const [categoriesList, setCategories] = useState([]);
    const [filteredCategories, setFilteredCategories] =
        useState(categoriesList);
    const [isDataLoading, setIsDataLoading] = useState(true);

    const prepareAndSetCategories = (data = []) => {
        let categoriesList = data.map((cat) => {
            return {
                id: cat.idCategory,
                image: cat.strCategoryThumb,
                title: cat.strCategory,
                description: cat.strCategoryDescription,
                linkTitle: `Show ${cat.strCategory} Dishes`,
                linkTo: `/dishes?id=${cat.strCategory}`,
            };
        });

        setCategories(categoriesList);
        setFilteredCategories(categoriesList);
    };

    const searchCategories = (searchString) => {
        let filteredCategories = categoriesList.filter((item) => {
            return item.title
                .toLocaleLowerCase()
                .includes(searchString.toLocaleLowerCase());
        });
        setFilteredCategories(filteredCategories);
    };

    useEffect(() => {
        setIsDataLoading(true);
        getListCategories()
            .then((data) => {
                setIsDataLoading(false);
                prepareAndSetCategories(data.categories);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <>
            {isDataLoading ? (
                <Preloader />
            ) : (
                <>
                    <Search cb={searchCategories} />
                    <CardsList listItems={filteredCategories} />
                </>
            )}
        </>
    );
}
