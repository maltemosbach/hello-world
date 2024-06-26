import React from 'react';
import ActionLink from './actionLink';
import Author, { AuthorProps } from './author';

interface PublicationProps {
    teaser: { type: 'video', src: string };
    title: string;
    projectLink: string;
    conference: string;
    conferenceAward?: string;
    conferenceWebsite: string;
    authors: Array<AuthorProps>;
    paperLink: string;
    bibtexLink: string;
    codeLink?: string;
}

const Publication: React.FC<PublicationProps> = ({ teaser, title, projectLink, conference, conferenceAward, conferenceWebsite, authors, paperLink, bibtexLink, codeLink}) => {

    const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
        const video = event.currentTarget.querySelector('video');
        if (video) {
            video.play();
        }
    };

    const handleMouseLeave = (event: React.MouseEvent<HTMLDivElement>) => {
        const video = event.currentTarget.querySelector('video');
        if (video) {
            video.pause();
        }
    };

    return (
        <div className="publication-entry rounded-lg shadow-sm" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="publication-video">
                {teaser.type === 'video' && (
                    <a href={projectLink}>
                        <video src={teaser.src} muted playsInline loop></video>
                    </a>
                )}
            </div>
            <div className="publication-details">
                <h3 className="text-lg">{title}</h3>
                <div className="author-list">
                    {authors.map((author, index) => (
                        <Author key={index} {...author} className="author" />
                    ))}
                </div>
                <div className="flex items-center">
                    <a href={conferenceWebsite} className="no-underline text-stone-800 hover:underline">
                        {conference}
                        {conferenceAward && <span className="text-red-700">&nbsp;{conferenceAward}</span>}
                    </a>
                </div>
                <div className="flex items-center mt-2.5">
                    <ActionLink url={paperLink} button>Read the Paper</ActionLink>
                    <ActionLink url={bibtexLink}>BibTeX</ActionLink>
                    {codeLink && <ActionLink url={codeLink}>Code</ActionLink>}
                </div>
            </div>
        </div>
    );
};

export default Publication;
