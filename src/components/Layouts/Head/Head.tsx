import Telephone from "@/components/Telephone/Telephone";
import { IconButton, SolidButton } from "@/components/uiKit/Button/Button";
import { useDisclosure } from "@/shared/hooks/useDisclosure";
import Link from "next/link";
import React, { FC, ReactNode, useEffect } from "react";

const HeadLayout: FC<{ children: ReactNode }> = ({ children }) => {
    const { isOpen, toggle } = useDisclosure(false);

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";
    }, [isOpen]);

    return (
        <>
            <header className="sticky top-0 h-20 w-screen z-10 bg-white flex justify-between md:grid items-center md:grid-cols-[auto_1fr] gap-x-5 px-5">
                <div className="h-full">
                    <img src="/favicon.ico" alt="logo" className="max-h-16" />
                </div>
                <span
                    className={`${
                        isOpen ? "absolute max-h-screen" : "hidden max-h-0"
                    } md:flex md:!relative md:justify-between md:translate-y-0 md:bottom-auto md:left-auto md:w-auto md:h-auto md:items-center translate-y-full bottom-0 left-0 w-full h-[calc(100vh-5rem)] bg-white transition-all duration-250`}
                >
                    <nav className="md:flex-row flex-col flex items-center gap-x-5">
                        <Link href={"#"}>Розклад</Link>
                        <Link href={"#"}>Тренування</Link>
                        <Link href={"#"}>Тренери</Link>
                        <Link href={"#"}>Ціни</Link>
                    </nav>
                    <div className="flex justify-center items-center gap-x-5">
                        <Telephone />
                        <SolidButton className="md:block hidden" text="записатись" variant="neutral" />
                    </div>
                </span>
                <IconButton
                    data-collapse-toggle="navbar"
                    type="button"
                    aria-controls="navbar"
                    aria-expanded="false"
                    className="md:hidden"
                    onClick={toggle}
                >
                    {/* TODO: change svg */}
                    <svg
                        className="w-6 h-6"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                </IconButton>
            </header>
            <main className={`${isOpen ? "overflow-hidden" : ""} px-5`}>{children}</main>
        </>
    );
};

export default React.memo(HeadLayout);
