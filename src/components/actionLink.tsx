import React from 'react';
import { IoIosArrowForward } from "react-icons/io";

interface ActionLinkProps {
    children: React.ReactNode;
    url: string;
    button?: boolean;
}

const ActionLink: React.FC<LinkProps> = ({ children, url, button = false }) => {
    return button ? (
        <a href={url} target={!url.startsWith("#") ? "_blank" : "_self"} className="inline-flex items-center text-white bg-black hover:bg-gray-800 rounded-full text-sm px-4 p-2 text-center mr-4">
            {children}
        </a>
    ) : (
        <a href={url} target={!url.startsWith("#") ? "_blank" : "_self"} className="inline-flex items-center text-gray-800 hover:text-gray-600 text-sm mr-4">
            {children} <IoIosArrowForward className="ml-1" />
        </a>
    );
};

export default ActionLink;
