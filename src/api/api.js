import { BASE_URL } from "../config";

export async function getListCategories() {
    //www.themealdb.com/api/json/v1/1/categories.php
    try {
        const response = await fetch(`${BASE_URL}categories.php`);
        return await response.json();
    } catch (error) {
        throw Error(error);
    }
}

export async function getFoodListByCategoryName(name) {
    //www.themealdb.com/api/json/v1/1/filter.php?c=Seafood
    try {
        const response = await fetch(`${BASE_URL}filter.php?c=${name}`);
        return await response.json();
    } catch (error) {
        throw Error(error);
    }
}

export async function getFoodById(id) {
    //www.themealdb.com/api/json/v1/1/lookup.php?i=52772

    try {
        const response = await fetch(`${BASE_URL}/lookup.php?i=${id}`);
        return await response.json();
    } catch (error) {
        throw Error(error);
    }
}
