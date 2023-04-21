import Link from "next/link";
import React, { FC, ReactNode } from "react";

const Menu: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <>
            <nav className="flex gap-x-5">
                <span>Logo</span>
                <Link href={"#"}>Розклад</Link>
                <Link href={"#"}>Тренування</Link>
                <Link href={"#"}>Ціни</Link>
            </nav>
            {children}
        </>
    );
};

export default React.memo(Menu);
