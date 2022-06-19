import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CustomButton } from "../components/customButton";
import { getFoodById } from "../api/api";
import { DishDetails } from "../components/dishDetails";

export function DishDetailPage() {
    const [dish, setDish] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getFoodById(id)
            .then((data) => {
                setDish(data.meals[0]);
            })
            .catch((error) => {
                console.log(error);
            });
        //eslint-disable-next-line
    }, [id]);
    return (
        <>
            <CustomButton classes={["btn"]} onClick={() => navigate(-1)}>
                Go back
            </CustomButton>
            <DishDetails {...dish} />
        </>
    );
}
