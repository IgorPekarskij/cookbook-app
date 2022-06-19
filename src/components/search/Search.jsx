import { useState } from "react";
import { CustomButton } from "../customButton/CustomButton";
import styles from "./Search.module.css";

export function Search({ cb }) {
    const [searchValue, setSearchValue] = useState("");
    const handleKey = (e) => {
        if (e.keyCode === 13) {
            cb(searchValue);
        }
    };

    const stylesClasses = ["input-field", "col", "s12", styles.search];

    return (
        <div className={stylesClasses.join(" ")}>
            <input
                type="search"
                name="search"
                placeholder="Search"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                onKeyDown={handleKey}
            />
            <CustomButton
                classes={["btn", "btn-small"]}
                onClick={() => cb(searchValue)}
            >
                Search
            </CustomButton>
        </div>
    );
}
