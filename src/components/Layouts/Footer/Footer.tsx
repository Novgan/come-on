import { FC, ReactNode } from "react";

const Footer: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <>
            {children}
            <footer>footer</footer>
        </>
    );
};

export default Footer;
