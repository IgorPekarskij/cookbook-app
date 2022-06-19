import { Routes, Route } from "react-router-dom";
import { DishesCategoriesPage } from "../../pages/DishesCategoriesPage";
import { CategoryDishesPage } from "../../pages/CategoryDishesPage";
import { NotFoundPage } from "../../pages/NotFoundPage";
import { Layout } from "../layout";
import { DishDetailPage } from "../../pages/DishDetailPage";
import { About } from "../../pages/About";
import { Contacts } from "../../pages/Contacts";

export function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<DishesCategoriesPage />} />
                    <Route path="dishes" element={<CategoryDishesPage />} />
                    <Route path="about" element={<Contacts />} />
                    <Route path="contacts" element={<About />} />
                    <Route path="dish/:id" element={<DishDetailPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Route>
            </Routes>
        </>
    );
}
