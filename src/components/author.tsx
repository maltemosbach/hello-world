import React from 'react';

interface AuthorProps {
    name: string;
    website: string;
    isMe?: boolean;
    lastAuthor?: string;
}

const Author: React.FC<AuthorProps> = ({ name, website, isMe, lastAuthor}) => {
    return (
        <span className="text-center inline-block">
            <a href={website} target="_blank"
               className={`no-underline text-stone-800 hover:underline ${isMe ? 'font-medium' : 'font-normal'}`}>
                {name}
            </a>
            {lastAuthor ? null : <>,&nbsp;</>}
        </span>
    );
};

export type { AuthorProps };
export default Author;
