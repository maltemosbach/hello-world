import * as React from "react"
import type {HeadFC, PageProps} from "gatsby"
import { Link } from 'gatsby';

import icra_2024 from "./videos/icra_2024.mp4"
import uni_bonn from "./images/uni_bonn_large.jpg"

import Publication from "../components/publication";
import ActionLink from "../components/actionLink";
import Profile from "../components/profile";
import Footer from "../components/footer";


import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import { AiFillGithub, AiOutlineGoogle, AiFillLinkedin, AiFillPushpin } from 'react-icons/ai';
import { FaFilePdf, FaRegFilePdf } from "react-icons/fa";




const Title: React.FC = ({children}) => {
    // Paper title
    return (
        <div className="mt-10">
            <h1 className="pb-1 mb-5 sm:mb-4 sm:leading-tight md:leading-tight lg:leading-tight text-center text-4xl">{children}</h1>
        </div>
        
    )
}

const Venue: React.FC = ({website, children}) => {
    return (
        <div className="flex flex-wrap justify-center text-2xl lg:text-2xl mb-6 sm:mb-5">
            <a className="no-underline" href={website} target="_blank">{children}</a>
        </div>
    )
}

const Abstract: React.FC = ({children}) => {
    return (
        <div>
            <div className="flex justify-center content-center">
                <p className="font-normal text-3xl mt-24 mb-0">Abstract</p>
            </div>
            <div className="flex justify-center content-center">
                <p className="text-justify font-normal text-base m-1 sm:m-1 max-w-[100%] sm:max-w-[620px]">{
                    children
                }</p>
            </div>
        </div>
    )
}

const Author: React.FC = ({children, website, firstAuthor, affiliations, lastAuthor}) => {
    return (
        <span className="text-center inline-block mb-0 leading-tight font-inter">
                <a href={website} target={"_blank"}
                   className="font-normal no-underline text-gray-800 hover:text-blue-600 underline-offset-3 hover:transition-all">
                    {children}
                </a>
            {firstAuthor || affiliations ?
                <sup className={"pl-0.5"}>{firstAuthor ?
                    <span className="font-bold">*</span> : null}{affiliations ? affiliations : null}</sup>
                : null}
            {lastAuthor ? null : <>,&nbsp;</>}
            </span>
    )
}

const Affiliation: React.FC = ({children, website, number}) => {
    return (
        <span className={"text-center inline-block mr-4 mt-0 leading-tight"}>
            {/* <img src={uni_bonn} alt="University of Bonn" className="w-auto h-6 align-middle inline-block mr-1 mt-0 mb-0 leading-tight"/> */}
            <sup className={"mr-0.5"}>{number}</sup>
            <a href={website} target={"_blank"}
               className="font-normal no-underline text-gray-600 hover:text-blue-600 underline-offset-3 hover:transition-all">
                    {children}
                </a>
        </span>
    )
}



const Article: React.FC = ({children}) => {
    return (
        <div
            className="mx-auto w-full max-w-5xl flex-none 
            md:format-base
            lg:max-w-5xl lg:format-lg
            content-start overflow-hidden">
            {children}
        </div>
    )
}


export const Head: HeadFC = () => <title>Promptable Visual Object Manipulation</title>

const carouselResponsive = {
    desktop: {
        breakpoint: {max: 3000, min: 1024},
        items: 4,
        partialVisibilityGutter: 40 // Allow partial view of the next item
    },
    tablet: {
        breakpoint: {max: 1024, min: 464},
        items: 2,
    },
    mobile: {
        breakpoint: {max: 464, min: 0},
        items: 1,
    }
};


const CarouselItem: React.FC = ({children, video}) => {
    return (
        <div>
            <video autoPlay muted playsInline loop alt={video}
                   className="carousel-video px-0 rounded-xl">
                <source src={video} type="video/mp4"/>
            </video>
            {/*<p className="text-center">{children}</p>*/}
        </div>
    )
}


const IndexPage: React.FC<PageProps> = () => {
    return (
        <div>
            {/* <header className="p-4 mb-0">
                <div className="container mx-auto max-w-6xl flex justify-between items-center">
                    <div className="text-left">
                        <p>Promptable Visual Object Manipulation</p>
                    </div>
                    <nav className="space-x-8">
                        <Link to="/" className="text-gray-800 hover:text-blue-600">Home</Link>
                        <Link to="/about" className="text-gray-800 hover:text-blue-600">Related Projects</Link>
                    </nav>
                </div>
            </header> */}
            <main className="bg-gray-50">
                <Article>
                    <Title>
                        {/* <span className="text-gray-900 font-normal">A System for</span>
                        &nbsp; */}

                            <span className="text-gray-900 font-medium">
                            A System for Promptable Visual Object Manipulation in Cluttered Environments
                            </span>
                            {/* &nbsp;
                            <span className="text-gray-900">in Cluttered Environments</span> */}
                    </Title>
                    {/* <Venue website={"https://2025.ieee-icra.org"}>
                        <span className="font-normal text-gray-800 hover:text-gray-600">Submitted to ICRA 2024</span>
                    </Venue> */}

                    {/* Authors */}
                    <div className="flex flex-wrap justify-center text-lg mb-2.5 mt-0 leading-none">
                        <Author website={"https://maltemosbach.github.io"} firstAuthor={false} affiliations={"1"}>Malte Mosbach</Author>
                        <Author website={"https://www.ais.uni-bonn.de/behnke/"} firstAuthor={false} lastAuthor={true} affiliations={"1"}>Sven Behnke </Author>
                    </div>

                    {/* Affilations */}
                    <div className="flex flex-wrap justify-center text-base mb-4 mt-0 leading-none">
                        <Affiliation website={"https://www.ais.uni-bonn.de"} number={"1"}>University of Bonn</Affiliation> 
                    </div>

                    <div className="flex justify-center mt-0">
                        <a href={""} className="inline-flex items-center text-gray-800 bg-gray-200 hover:bg-gray-300 rounded-r hover:text-blue-600 rounded-full text-center text-base pl-6 pr-2">
                            <svg class="w-12 h-5 me-2 fill-current -ms-1" aria-hidden="true" data-name="primary logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 246.978 111.119"><path d="M427.571,255.154c1.859,0,3.1,1.24,3.985,3.453,1.062-2.213,2.568-3.453,4.694-3.453h14.878a4.062,4.062,0,0,1,4.074,4.074v7.828c0,2.656-1.327,4.074-4.074,4.074-2.656,0-4.074-1.418-4.074-4.074V263.3H436.515a2.411,2.411,0,0,0-2.656,2.745v27.188h10.007c2.658,0,4.074,1.329,4.074,4.074s-1.416,4.074-4.074,4.074h-26.39c-2.659,0-3.986-1.328-3.986-4.074s1.327-4.074,3.986-4.074h8.236V263.3h-7.263c-2.656,0-3.985-1.329-3.985-4.074,0-2.658,1.329-4.074,3.985-4.074Z" transform="translate(-358.165 -222.27)" fill="currentColor"/><path d="M539.233,255.154c2.656,0,4.074,1.416,4.074,4.074v34.007h10.1c2.746,0,4.074,1.329,4.074,4.074s-1.328,4.074-4.074,4.074H524.8c-2.656,0-4.074-1.328-4.074-4.074s1.418-4.074,4.074-4.074h10.362V263.3h-8.533c-2.744,0-4.073-1.329-4.073-4.074,0-2.658,1.329-4.074,4.073-4.074Zm4.22-17.615a5.859,5.859,0,1,1-5.819-5.819A5.9,5.9,0,0,1,543.453,237.539Z" transform="translate(-358.165 -222.27)" fill="currentColor"/><path d="M605.143,259.228a4.589,4.589,0,0,1-.267,1.594L590,298.9a3.722,3.722,0,0,1-3.721,2.48h-5.933a3.689,3.689,0,0,1-3.808-2.48l-15.055-38.081a3.23,3.23,0,0,1-.355-1.594,4.084,4.084,0,0,1,4.164-4.074,3.8,3.8,0,0,1,3.718,2.656l14.348,36.134,13.9-36.134a3.8,3.8,0,0,1,3.72-2.656A4.084,4.084,0,0,1,605.143,259.228Z" transform="translate(-358.165 -222.27)" fill="currentColor"/><path d="M486.149,277.877l-32.741,38.852c-1.286,1.372-2.084,3.777-1.365,5.5a4.705,4.705,0,0,0,4.4,2.914,4.191,4.191,0,0,0,3.16-1.563l40.191-42.714a4.417,4.417,0,0,0,.042-6.042Z" transform="translate(-358.165 -222.27)" fill="#aa142d"/><path d="M486.149,277.877l31.187-38.268c1.492-1.989,2.2-3.03,1.492-4.723a5.142,5.142,0,0,0-4.481-3.161h0a4.024,4.024,0,0,0-3.008,1.108L472.711,274.6a4.769,4.769,0,0,0,.015,6.53L520.512,332.2a3.913,3.913,0,0,0,3.137,1.192,4.394,4.394,0,0,0,4.027-2.818c.719-1.727-.076-3.438-1.4-5.23l-40.124-47.464" transform="translate(-358.165 -222.27)" fill="currentColor"/><path d="M499.833,274.828,453.169,224.4s-1.713-2.08-3.524-2.124a4.607,4.607,0,0,0-4.338,2.788c-.705,1.692-.2,2.88,1.349,5.1l40.093,48.422" transform="translate(-358.165 -222.27)" fill="#aa142d"/><path d="M390.61,255.154c5.018,0,8.206,3.312,8.206,8.4v37.831H363.308a4.813,4.813,0,0,1-5.143-4.929V283.427a8.256,8.256,0,0,1,7-8.148l25.507-3.572v-8.4H362.306a4.014,4.014,0,0,1-4.141-4.074c0-2.87,2.143-4.074,4.355-4.074Zm.059,38.081V279.942l-24.354,3.4v9.9Z" transform="translate(-358.165 -222.27)" fill="currentColor"/></svg>
                        </a>

                        <a href={""} target={!"".startsWith("#") ? "_blank" : "_self"} className="inline-flex items-center text-gray-800 bg-gray-200 hover:bg-gray-300 rounded-l hover:text-blue-600 rounded-full text-base px-4 p-2 text-center mr-6 text-bas border-l border-gray-100">
                            PDF
                        </a>
                        <ActionLink url={""}>BibTeX</ActionLink>
                        <ActionLink url={""}>Code</ActionLink>
                        <ActionLink url={""}>Video</ActionLink>
                    </div>

                    {/* Teaser Video */}
                    <video autoPlay controls muted playsInline loop alt="Teaser Video"
                           className="border-2 border-slate-100 rounded-xl mx-auto max-w-[100%] sm:max-w-[70%]">
                        <source src={icra_2024} type="video/mp4"/>
                    </video>


                    
                    <div className="flex justify-center mt-24 text-3xl">
                    Real-world Rollouts
                    </div>
                    <div className="flex justify-center mt-4 text-base ">
                        <center>We distill real-world deployable policies that are promptable via language or points by using SAM-2 as their interface. We distill real-world deployable policies that are promptable via language or points by using SAM-2 as their interface.</center>
                    </div>
                    
                    <div className="max-w-10xl space-x-4 p-4 py-0 md:py-0 px-0 md:px-0 overflow-hidden">
                        <div className="relative pb-0 mb-0">
                            <Carousel responsive={carouselResponsive} infinite={false} showDots={true}
                                      renderDotsOutside={true} swipeable={true}
                                      draggable={true}
                                      beforeChange={(previousSlide, {currentSlide, onMove}) => {
                                          // play all carousel-video, as the browser doesn't like autoplaying them all
                                          const videos = document.getElementsByClassName("carousel-video");
                                          for (let i = 0; i < videos.length; i++) {
                                              // play if video is paused
                                              if ((videos[i] as HTMLVideoElement).paused) {
                                                  (videos[i] as HTMLVideoElement).play();
                                                  console.log("Started playing video " + (videos[i] as HTMLVideoElement).src);
                                              }
                                          }
                                      }}>
                                <CarouselItem video={icra_2024}>"Clear Mug"</CarouselItem>
                                <CarouselItem video={icra_2024}>"Measuring Scoop"</CarouselItem>
                                <CarouselItem video={icra_2024}>"Teddy Bear"</CarouselItem>
                                <CarouselItem video={icra_2024}>"Blue Mug</CarouselItem>
                                <CarouselItem video={icra_2024}>"Screwdriver"</CarouselItem>
                                <CarouselItem video={icra_2024}>"Water Jug</CarouselItem>
                                <CarouselItem video={icra_2024}>"Measuring Beaker"</CarouselItem>
                                <CarouselItem video={icra_2024}>"Wooden Rack</CarouselItem>
                                <CarouselItem video={icra_2024}>"Transparent Rack"</CarouselItem>
                            </Carousel>
                        </div>
                    </div>

                    <Abstract>
                        Self-supervised and language-supervised image models contain rich knowledge of the world
                        that is important for generalization. Many robotic tasks, however, require a detailed
                        understanding of 3D geometry, which is often lacking in 2D image features. This work bridges
                        this 2D-to-3D gap for robotic manipulation by leveraging distilled feature fields to combine
                        accurate 3D geometry with rich semantics from 2D foundation models. We present a few-shot
                        learning method for 6-DOF grasping and placing that harnesses these strong spatial and semantic
                        priors to achieve in-the-wild generalization to unseen objects. Using features distilled from a
                        vision-language model, CLIP, we present a way to designate novel objects for manipulation via
                        free-text natural language, and demonstrate its ability to generalize to unseen expressions and
                        novel categories of objects.
                    </Abstract>


                    </Article>

                    

                    <Footer/>
            </main></div>
    );
};

export default IndexPage;
