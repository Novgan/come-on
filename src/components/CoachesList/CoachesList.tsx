import { useRef } from "react";
import useDragScroll from "@/shared/hooks/useDragScroll";
import { IconButton } from "../uiKit/Button/Button";
import ChevronLeftIcon from "../uiKit/Icons/ChevronLeftIcon";
import ChevronRightIcon from "../uiKit/Icons/ChevronRightIcon";
import CoachItem from "./components/CoachItem";

const CoachesList = () => {
    const tabsListRef = useRef<HTMLUListElement>(null);

    const { isFirstElementInView, isLastElementInView, isScrollable: isTabsScrollable } = useDragScroll(tabsListRef);

    const scrollToStart = () => {
        if (isTabsScrollable && !isFirstElementInView) {
            tabsListRef.current?.firstElementChild?.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }
    };

    const scrollToEnd = () => {
        if (isTabsScrollable && !isLastElementInView) {
            tabsListRef.current?.lastElementChild?.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }
    };

    return (
        <div className="min-h-screen grid grid-rows-[auto_1fr_auto] auto-rows-auto gap-y-5">
            <h1 className="text-xl font-bold">Coaches</h1>
            <div className="grid grid-cols-[auto_1fr_auto]">
                <div className="self-center">
                    <IconButton
                        onClick={scrollToStart}
                        className={!isTabsScrollable || isFirstElementInView ? "opacity-0 cursor-default" : ""}
                    >
                        <ChevronLeftIcon className="w-8 h-8 stroke-black stroke-2" />
                    </IconButton>
                </div>
                <ul ref={tabsListRef} className="flex gap-x-6 overflow-y-scroll hide-scrollbar snap-x">
                    <CoachItem />
                    <CoachItem />
                    <CoachItem />
                    <CoachItem />
                    <CoachItem />
                    <CoachItem />
                    <CoachItem />
                </ul>
                <div className="self-center">
                    <IconButton
                        onClick={scrollToEnd}
                        className={!isTabsScrollable || isLastElementInView ? "opacity-0 cursor-default" : ""}
                    >
                        <ChevronRightIcon className="w-8 h-8 stroke-black stroke-2" />
                    </IconButton>
                </div>
            </div>
            <a href="#" className="text-center">
                Show all
            </a>
        </div>
    );
};

export default CoachesList;
