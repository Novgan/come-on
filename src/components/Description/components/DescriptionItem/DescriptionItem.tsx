import { FC } from "react";
import { DescriptionItemProps } from "./models";

const DescriptionItem: FC<DescriptionItemProps> = ({ title, img, description }) => {
    return (
        <li className="flex items-center">
            {img}
            <span>
                <h1 className="font-bold">{title}</h1>
                <p>{description}</p>
            </span>
        </li>
    );
};

export default DescriptionItem;
