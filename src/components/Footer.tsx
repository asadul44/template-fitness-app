import React from 'react';
import { ArrowRightOutlined } from '@ant-design/icons'

const Footer = () => {
    return (
        <div>
            <div className="grid grid-cols-12 mx-4 gap-8 sm:mx-16 mt-6 pb-12">

                <div className="col-start-1 col-span-12 sm:col-span-6 bg-gray-700 p-4 rounded-md">
                    <p className="text-center text-white font-sans font-bold text-xl">Join for free</p>
                    <p className="mt-4 text-sm text-white opacity-50 px-10">Reach your fitness goals or maintain your healthy lifestyle with professional training and support from a positive and active online community.</p>
                    <ul className="list-disc ml-4 mt-6 text-white px-10 text-sm opacity-50">
                        <li>~600 Full-Lenth Workout Videos</li>
                        <li>Customizable Calendar</li>
                        <li>Healthy Recipes</li>
                        <li>Health and Fitness Articles</li>
                        <li>Positive and Supportive Online Community</li>
                        <li>No Credit Cart Needed</li>
                    </ul>
                    <div className="flex gap-4 mt-4 px-10 ">
                        <a href="#" className="text-blue-600 font-sans font-semibold text-base">See More</a>
                        <ArrowRightOutlined className="mt-2 text-white" />
                    </div>
                </div>

                <div className="col-start-1 col-span-12 sm:col-start-7 sm:col-span-6 bg-gray-700 p-4 rounded-md">
                    <p className="text-center text-white font-sans font-bold text-xl">WO Plus</p>
                    <p className="mt-4 text-sm text-white opacity-50 px-10">WO Plus includes everything you get with a free membership and adds brand new convenience features,fitness tools,and unique content.</p>
                    <ul className="list-disc ml-4 px-10 mt-6 text-white text-sm opacity-50">
                        <li>Ads-Free Website and Videos</li>
                        <li>Surprise Me Workout Selection Tool</li>
                        <li>Statistics for Your Activities</li>
                        <li>Enter and Track Custom Workouts</li>
                        <li>FB Plus Exclusive Workouts</li>
                        <li>Trackers to See Your Progress</li>
                        <li>FB Plus Content and Challenges</li>
                        <li>Video Tags</li>
                        <li>FB Plus Routines</li>
                        <li>Rest Day Complete</li>
                    </ul>
                    <button className="bg-blue-500 text-white px-4 ml-10 py-2 rounded-lg mt-6 font-sans font-bold text-base">Join Club Now!</button>
                </div>

            </div>

            <div className="bg-gray-700 w-screen h-16 flex justify-center items-center">

                <p className="text-white font-sans font-normal text-base">
                    Copyright &copy; All rights reserved | Developed by <i className="icon-heart" aria-hidden="true"></i><a href="https://bitsofts.io/" target="_blank" style={{color:"#1B9CE3"}}> bitsofts.io </a>
                </p>

            </div>
        </div>
    );
};

export default Footer;