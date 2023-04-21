import { RefObject, useMemo } from "react";
import useIsInViewport from "./useIsInViewport";
import useMount from "./useMount";

const useDragScroll = (parentRef: RefObject<Element | null>) => {
    const parentElement = parentRef.current;

    useMount();

    const isFirstElementFullInView = useIsInViewport(parentElement?.firstElementChild, 100);
    const isLastElementFullInView = useIsInViewport(parentElement?.lastElementChild, 100);
    const isFirstElementInView = useIsInViewport(parentElement?.firstElementChild, 60);
    const isLastElementInView = useIsInViewport(parentElement?.lastElementChild, 60);

    const isScrollable = useMemo(() => {
        if (isFirstElementFullInView && isLastElementFullInView) return false;

        return true;
    }, [isFirstElementFullInView, isLastElementFullInView]);

    if (!isScrollable) {
        return { isFirstElementInView, isLastElementInView, isScrollable };
    }

    return {
        isFirstElementInView,
        isLastElementInView,
        isScrollable,
    };
};

export default useDragScroll;
