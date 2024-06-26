import * as React from "react"
import type {HeadFC, PageProps} from "gatsby"
import { Link } from 'gatsby';

import icra_2024 from "./videos/icra_2024.mp4"
import case_2023 from "./videos/case_2023.mp4"
import irc_2022 from "./videos/irc_2022.mp4"
import humanoids_2022 from "./videos/humanoids_2022.mp4"
import csci_2020 from "./videos/csci_2020.mp4"

import Profile from "../components/profile";
import Footer from "../components/footer";


const Article: React.FC = ({children}) => {
    return (
        <div
            className="mx-auto w-full max-w-4xl flex-none content-start">
            {children}
        </div>
    )
}

const ArticleHeader: React.FC = ({children}) => {
    return (
        <div
            className="mx-auto w-full max-w-2xl flex-none content-start">
            {children}
        </div>
    )
}


export const Head: HeadFC = () => <title>Malte Mosbach</title>


const AboutPage: React.FC<PageProps> = () => {
    return (
        <div>
            <header className="p-4">

                <div className="container mx-auto max-w-4xl flex justify-between items-center">
                    <div className="text-left">
                        Malte Mosbach
                    </div>
                    <nav className="space-x-8">
                        <Link to="/" className="text-gray-800 hover:text-gray-600">Research</Link>
                        <Link to="/about" className="text-gray-800 hover:text-gray-600">About</Link>
                    </nav>
                </div>
            </header>
            <main>
                <ArticleHeader>
                    <div className="flex flex-wrap items-center content-start">
                        <div className="flex-1">

                            <h1 className="text-sm mb-2 mt-16 leading-tight text-center">About</h1>

                            <h1 className="text-5xl mb-2 leading-tight text-center">Malte Mosbach</h1>

                            <div className="text-center text-xl">
                                <p>
                                    I am a PhD student in the <a href="https://www.ais.uni-bonn.de" className="underline">Autonomous Intelligent Systems Group</a> at University of Bonn advised by <a href="https://www.ais.uni-bonn.de/behnke/" className="underline">Sven Behnke</a>.
                                </p>
                            </div>
                        </div>
                    </div>
                </ArticleHeader>
                <Article>
                    <div className="mt-8 mb-96">
                        <Profile/> {/* Add the Profile component */}
                    </div>
                    <Footer/>
                </Article>
            </main></div>
    );
};

export default AboutPage;
