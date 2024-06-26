import * as React from "react"
import type {HeadFC, PageProps} from "gatsby"
import { Link } from 'gatsby';

import icra_2024 from "./videos/icra_2024.mp4"
import case_2023 from "./videos/case_2023.mp4"
import irc_2022 from "./videos/irc_2022.mp4"
import humanoids_2022 from "./videos/humanoids_2022.mp4"
import csci_2020 from "./videos/csci_2020.mp4"

import Publication from "../components/publication";
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

const mosbachAndBehnke = [
    { name: "Malte Mosbach", website: "https://maltemosbach.github.io", isMe: true },
    { name: "Sven Behnke", website: "https://www.ais.uni-bonn.de/behnke/", lastAuthor: true },
];

const mosbachMorawAndBehnke = [
    { name: "Malte Mosbach", website: "https://maltemosbach.github.io", isMe: true },
    { name: "Kara Moraw", website: "" },
    { name: "Sven Behnke", website: "https://www.ais.uni-bonn.de/behnke/", lastAuthor: true },
];

const scheidererMosbachPosadaMorenoAndMeisen = [
    { name: "Christian Scheiderer", website: "" },
    { name: "Malte Mosbach", website: "https://maltemosbach.github.io", isMe: true },
    { name: "Andrés Posada-Moreno", website: "" },
    { name: "Tobias Meisen", website: "", lastAuthor: true },
];


const publications = [
    {
        teaser: { type: 'video', src: icra_2024 },
        title: 'Grasp Anything: Combining Teacher-Augmented Policy Gradient Learning with Instance Segmentation to Grasp Arbitrary Objects',
        projectLink: 'https://maltemosbach.github.io/grasp_anything/',
        conference: 'ICRA, 2024',
        conferenceWebsite: 'https://2024.ieee-icra.org',
        authors: mosbachAndBehnke,
        paperLink: 'https://arxiv.org/abs/2403.10187',
        bibtexLink: '/bibtex/icra_2024.txt'
    },
    {
        teaser: { type: 'video', src: case_2023 },
        title: 'Learning Generalizable Tool Use with Non-rigid Grasp-pose Registration',
        projectLink: 'https://maltemosbach.github.io/generalizable_tool_use/',
        conference: 'CASE, 2023',
        conferenceAward: '(Best Conference Paper Award)',
        conferenceWebsite: 'https://case2023.org',
        authors: mosbachAndBehnke,
        paperLink: 'https://arxiv.org/abs/2307.16499',
        bibtexLink: '/bibtex/case_2023.txt'
    },
    {
        teaser: { type: 'video', src: irc_2022 },
        title: 'Efficient Representations of Object Geometry for Reinforcement Learning of Interactive Grasping Policies',
        projectLink: 'https://maltemosbach.github.io/geometry_aware_grasping',
        conference: 'IRC, 2022',
        conferenceWebsite: 'https://www.ieee-irc.org/',
        authors: mosbachAndBehnke,
        paperLink: 'https://arxiv.org/abs/2211.10957',
        bibtexLink: '/bibtex/irc_2022.txt'
    },
    {
        teaser: { type: 'video', src: humanoids_2022 },
        title: 'Accelerating Interactive Human-like Manipulation Learning with GPU-based Simulation and High-quality Demonstrations',
        projectLink: 'https://maltemosbach.github.io/interactive_human_like_manipulation',
        conference: 'Humanoids, 2022',
        conferenceWebsite: 'https://humanoids2022.org',
        authors: mosbachMorawAndBehnke,
        paperLink: 'https://arxiv.org/abs/2212.02126',
        codeLink: 'https://git.ais.uni-bonn.de/mosbach/gym-grasp',
        bibtexLink: '/bibtex/humanoids_2022.txt'
    },
    {
        teaser: { type: 'video', src: csci_2020 },
        title: 'Transfer of Hierarchical Reinforcement Learning Structures for Robotic Manipulation Tasks',
        projectLink: '',
        conference: 'CSCI, 2020',
        conferenceWebsite: 'https://www.american-cse.org/csci2020/',
        authors: scheidererMosbachPosadaMorenoAndMeisen,
        paperLink: 'https://american-cse.org/sites/csci2020proc/pdfs/CSCI2020-6SccvdzjqC7bKupZxFmCoA/762400a504/762400a504.pdf',
        codeLink: 'https://github.com/maltemosbach/Learning-Transferable-Hierarchical-Structures-for-Robotic-Mainpulation',
        bibtexLink: '/bibtex/csci_2020.txt'
    },
];



const IndexPage: React.FC<PageProps> = () => {
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

                            <h1 className="text-sm mb-2 mt-16 leading-tight text-center">Research</h1>

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
                    <div className="mt-8">
                        <Profile/> {/* Add the Profile component */}
                    </div>
                    <div className="mt-16">
                        <h2 className="font-semibold text-3xl">Selected Publications</h2>
                    </div>
                    <div className="text-left leading-loose">
                        A complete, up-to-date list of publications can be found on <a
                        href="https://scholar.google.de/citations?user=OQv4g3kAAAAJ&hl=de&oi=ao"
                        className="link underline">Google
                        Scholar</a>.
                    </div>
                    <div className="mt-8">
                        {publications.map((pub, index) => (
                            <Publication key={index} {...pub} />
                        ))}
                    </div>
                    <Footer/>
                </Article>
            </main></div>
    );
};

export default IndexPage;
