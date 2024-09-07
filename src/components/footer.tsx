// src/components/footer.tsx
import React from 'react';
import { AiFillGithub, AiOutlineGoogle, AiFillLinkedin } from 'react-icons/ai';

const Footer: React.FC = () => {
    return (
        <footer className="p-4">
            <div className="container mx-auto max-w-4xl flex justify-between items-center text-normal text-base">
                <div className="flex space-x-8">
                    {/* <a href="https://www.uni-bonn.de/en/imprint" className="text-gray-800 hover:text-blue-600">Imprint</a>
                    <a href="https://www.uni-bonn.de/en/data-protection-policy" className="text-gray-800 hover:text-blue-600">Data Protection Policy</a> */}
                    <span className="text-gray-800">Website uses elements from <a href="https://f3rm.github.io" className="text-blue-600 hover:text-blue-600 space-x-0">F3RM</a></span>
                    
                </div>
                <div className="flex space-x-8">
                    <a href="https://github.com/maltemosbach" className="text-gray-800 hover:text-blue-600">
                        <AiFillGithub size={24} />
                    </a>
                    <a href="https://scholar.google.de/citations?user=OQv4g3kAAAAJ&hl=de&oi=ao" className="text-gray-800 hover:text-blue-600">
                        <AiOutlineGoogle size={24} />
                    </a>
                    <a href="https://de.linkedin.com/in/mosbach" className="text-gray-800 hover:text-blue-600">
                        <AiFillLinkedin size={24} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
