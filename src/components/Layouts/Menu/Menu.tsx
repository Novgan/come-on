import React from "react";

const Menu = () => {
    return (
        <aside className={"absolute h-menu z-40"}>
            <button className="text-black bg-sky-500 dark:bg-green-500 dark:text-white">TOGGLE THEME</button>
        </aside>
    );
};

export default React.memo(Menu);
