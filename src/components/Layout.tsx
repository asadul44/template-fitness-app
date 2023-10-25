import React from 'react';
import { ArrowRightOutlined, PlayCircleOutlined } from '@ant-design/icons'

const Layout = () => {
    return (
        <div>

            {/* front part here */}

            <div className="grid grid-cols-12 mx-4 sm:mx-16 ">
                <div className="col-start-1 col-span-12 sm:col-span-6">
                    <p className="text-5xl sm:text-7xl text-white font-black leading-24">WORKOUT<br />WITH ME</p>
                    <p className="text-white font-sans font-normal opacity-50 mt-8">A huge selection of health and fitness content, healthy recipes and transformation stories to help you get fit and stay fit! </p>
                    <div className="float-right flex justify-around w-36 p-1  bg-gray-700 rounded-md items-center">
                        <div>
                            <PlayCircleOutlined className="text-white" />
                        </div>
                        <div>
                            <p className="text-white z-40 font-sans">350+</p>
                            <p className="text-white  font-sans opacity-50">video tutorial</p>
                        </div>
                    </div>
                    <button className="bg-red-500 text-white font-sans font-normal text-base p-1 px-5 h-16 rounded-md mt-8"> Join club now! </button>
                    <div className="text-white flex mt-20">
                        <img src="./assets/image/nikeLogo.png" alt="error" className="w-16 h-8" />
                        <p>BuzzFeed</p>
                        <p>&#9776; </p>
                        <img src="./assets/image/sprit2.png" alt="error" className="w-16 h-8" />
                        <img src="./assets/image/huffpost.png" alt="error" className="w-32" />


                    </div>
                </div>
                <div className="col-start-1 col-span-12 sm:col-start-7 sm:col-span-6">
                    <div className="bg-yellow-500 rounded-md p-2 flex flex-col justify-center w-32 ml-48 mt-12 absolute ">
                        <p className="ml-4"><img src="./assets/image/running.png" alt="error" className="w-12 h-12 rounded-full" /> </p><br />
                        <p className="text-white font-black text-3xl ml-4">4,95 <span className="text-base font-normal">km</span></p>
                    </div>
                    <img src="./assets/image/Images 2.png" alt="error" className="mt-16" />
                    <div className="bg-purple-600 rounded-md relative p-2 flex flex-col justify-center w-36 ml-48 -mt-20 z-40">
                        <p className="ml-2 text-white font-bold text-lg font-sans">500+ </p>
                        <p className="text-white font-normal text-xs opacity-50 ml-2 ">Free workout Videos</p>
                    </div>

                </div>
            </div>

            {/* where to start */}

            <div className="mx-4 sm:mx-16 mt-8">
                <p className="text-white font-sans font-bold text-xl">Not sure where to start?</p>
                <p className="text-white font-sans font-normal text-base opacity-50 mt-6">Programs offer day-to-day guidance on an interactive calendar to keep you on track.</p>
            </div>



            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-white mx-4 sm:mx-16 font-sans mt-12 gap-8  ">

                <div className="bg-gray-700 px-4 py-6 pl-12 items-center rounded-md pb-8 ">

                    <p className="text-xl font-bold  ">Workout Videos</p>
                    <div className="flex gap-4 mt-4">
                        <p className="h-8 opacity-50">Access to hundreds of free,full-length workout videos.</p>
                        <ArrowRightOutlined className="mt-8" />
                    </div>

                </div>
                <div className="bg-gray-700 px-4 py-6 pl-12 items-center rounded-md pb-8 ">

                    <p className="text-xl font-bold  ">Workout Programs</p>
                    <div className="flex gap-4 mt-4">
                        <p className="h-8 opacity-50">Affordable adn dffectiveworkout programs.</p>
                        <ArrowRightOutlined className="mt-8" />
                    </div>

                </div>
                <div className="bg-gray-700 px-4 py-6 pl-12 items-center rounded-md pb-8 ">

                    <p className="text-xl font-bold  ">Meal Plans</p>
                    <div className="flex gap-4 mt-4">
                        <p className="h-8 opacity-50">Plans built with registereddietitians and nutritionists.</p>
                        <ArrowRightOutlined className="mt-8" />
                    </div>

                </div>
                <div className="bg-gray-700 px-4 py-6 pl-12 items-center rounded-md pb-8 ">

                    <p className="text-xl font-bold  ">WO Plus All ACCESS</p>
                    <div className="flex gap-4 mt-4">
                        <p className="h-8 opacity-50">Add powerful features to,your memberships.</p>
                        <ArrowRightOutlined className="mt-8" />
                    </div>

                </div>




            </div>

            <div className="grid grid-cols-12 gap-8 mt-6 mx-4 sm:mx-16 items-center">
                <div className="col-start-1 col-span-12 sm:col-span-6 text-white ">
                    <p className="text-2xl font-bold "> Work out at home for free.</p>
                    <p className="opacity-50 mt-4 text-xs ">We believe fitness should be accessible to everyone, everywhere, regardless of income or access to agym. With hundreds of professional workouts, healthy recipes and informative articles, as well as one of the most positive communities on the web, you;ll have ererything you need to reach your personal fitness goals -for free!</p>
                    <div className="flex gap-4 mt-4 ">
                        <a href="#" className="text-blue-800 font-bold">see more</a>
                        <ArrowRightOutlined className="mt-1" />
                    </div>
                </div>
                <div className="col-start-1 col-span-12 sm:col-start-7 sm:col-span-6">

                    <img src="./assets/image/Group74.png" alt="error" className="rounded-md w-full h-full" />

                </div>

            </div>


            <div className="grid grid-cols-12 gap-8 mt-6 mx-4 sm:mx-16 items-center">

                <div className="col-start-1 col-span-12 sm:col-span-6 ">

                    <img src="./assets/image/Group75.png" alt="error" className="rounded-md w-full h-full" />

                </div>
                <div className="  col-start-1 col-span-12 sm:col-start-7 sm:col-span-6 text-white">
                    <p className="text-2xl font-bold ">Get more with low-cost training programs and advanced features..</p>
                    <p className="opacity-50 mt-4 text-xs ">We believe fitness should be accessible to everyone, everywhere, regardless of income or access to agym. With hundreds of professional workouts, healthy recipes and informative articles, as well as one of the most positive communities on the web, you;ll have ererything you need to reach your personal fitness goals -for free!</p>
                    <div className="flex gap-4 mt-4 ">
                        <a href="#" className="text-blue-800 font-bold">see more</a>
                        <ArrowRightOutlined className="mt-1" />
                    </div>
                </div>


            </div>

            <div>
                <p className="text-2xl font-bold text-white mt-6 mx-4 sm:mx-16">Membership </p>
            </div>

            <div className="bg-white mx-4 sm:mx-16 opacity-50 mt-4 " style={{ height: "1px" }}>

            </div>

            






        </div>
    );
};

export default Layout;