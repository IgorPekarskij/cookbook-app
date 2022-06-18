import { useState } from "react";
import { CustomButton } from "../customButton/CustomButton";
import "./Search.css";

export function Search({ cb }) {
    const [searchValue, setSearchValue] = useState("");
    const handleKey = (e) => {
        if (e.keyCode === 13) {
            cb(searchValue);
        }
    };

    return (
        <div className="search input-field col s12">
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
