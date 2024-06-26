import React from 'react';
import Actionlink from './actionLink';

const Profile: React.FC = () => {
    return (
        <div className="flex justify-between">
            <div
                className="w-[65.5%] flex justify-center items-center bg-white rounded-lg shadow-sm border-hidden border-x-8">
                <div className="p-8 ml-4">
                    <h2 className="text-2xl mb-4">About me</h2>
                    <p className="text-gray-700 mb-4">
                        {/*My goal is to build autonomous systems that interact with the physical world in a dexterous, human-like manner.*/}
                        My research aims to make reinforcement learning practical for complex robot control by leveraging foundation models, scaling training, exploring student-teacher learning, developing robust representations, and more. If this excites you, please don't hesitate to reach out.
                    </p>
                    <Actionlink url="mailto:mosbach@ais.uni-bonn.de">E-Mail me</Actionlink>
                    <Actionlink url="https://de.linkedin.com/in/mosbach">Connect on LinkedIn</Actionlink>
                </div>
            </div>
            <div className="w-[32.5%] flex justify-center items-center">
                <img src="/portrait_small.png" alt="Profile Picture"
                     className="object-cover rounded-lg shadow-sm"/>
            </div>
        </div>
    );
};

export default Profile;
