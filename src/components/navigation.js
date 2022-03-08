import React, { useState } from "react";

export default function Index() {
    

   

    return (
        <div className="">
            <div className="dark:bg-blue-900  pb-12">
                <div>
                    <div className="2xl:container 2xl:mx-auto relative" style={{backgroundColor:"#2b4275"}}>
                        <div className="pt-4  mx-4 md:mx-6 ">
                            <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-4 md:w-full" >
                                <div className="md:hidden flex justify-left ">
                                    <button aria-label="open menu" className="text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800 rounded">
                                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M20 6H4" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M14 12H4" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M18 18H4" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                                <div className=" cursor-pointer">
                                    <div className="hidden lg:block">
                                    <img src="/assets/images/oikologo.png" className="w-42 h-8" alt="logoimage" />
                                    </div>
                                    <div className="hidden md:block lg:hidden">
                                    <img src="/assets/images/oikologo.png" alt="logoimage" />
                                    </div>
                                    <div className="md:hidden">
                                    <img src="/assets/images/oikologo.png" alt="logoimage"/>
                                    </div>
                                </div>

                                <div className="flex flex-col ">
                    
                    <div className="relative w-full">
                        <div className="absolute text-gray-600 dark:text-gray-400 dark:border-gray-700 flex items-center pr-3 right-0 border-l h-full cursor-pointer">
                            <div className="pl-2 pr-1">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-filter" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <path d="M5.5 5h13a1 1 0 0 1 0.5 1.5L14 12L14 19L10 16L10 12L5 6.5a1 1 0 0 1 0.5 -1.5" />
                                </svg>
                            </div>
                            <span className="text-sm leading-tight tracking-normal">Filter</span>
                        </div>
                        <div className="absolute text-gray-600 dark:text-gray-400 flex items-center pl-3 h-full">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <circle cx={10} cy={10} r={7} />
                                <line x1={21} y1={21} x2={15} y2={15} />
                            </svg>
                        </div>
                        <input id="search" className="text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-800 focus:outline-none focus:border focus:border-indigo-700 font-normal pr-20 sm:pr-32 h-10 flex items-center pl-10 text-sm border-gray-300 dark:border-gray-700 rounded border shadow" placeholder="Buy brand or product" />
                    </div>
                </div>
                {/* Code block ends */}

                                <div />
                                <div className="hidden md:block">
                                    <ul className="flex items-center space-x-6">
                                        <li>
                                            <a href="/" className="text-gray-800 dark:text-white text-white flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                                                <div>
                                                    <svg className="fill-stroke" width={18} height={20} viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M17 19V17C17 15.9391 16.5786 14.9217 15.8284 14.1716C15.0783 13.4214 14.0609 13 13 13H5C3.93913 13 2.92172 13.4214 2.17157 14.1716C1.42143 14.9217 1 15.9391 1 17V19" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M9 9C11.2091 9 13 7.20914 13 5C13 2.79086 11.2091 1 9 1C6.79086 1 5 2.79086 5 5C5 7.20914 6.79086 9 9 9Z" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </div>
                                                <p className="text-base text-right ">My account</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/" className="text-gray-800 dark:text-white text-white flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                                                <div>
                                                    <svg className="fill-stroke" width={22} height={20} viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M19.4578 2.59133C18.9691 2.08683 18.3889 1.68663 17.7503 1.41358C17.1117 1.14054 16.4272 1 15.7359 1C15.0446 1 14.3601 1.14054 13.7215 1.41358C13.0829 1.68663 12.5026 2.08683 12.0139 2.59133L10.9997 3.63785L9.98554 2.59133C8.99842 1.57276 7.6596 1.00053 6.26361 1.00053C4.86761 1.00053 3.52879 1.57276 2.54168 2.59133C1.55456 3.6099 1 4.99139 1 6.43187C1 7.87235 1.55456 9.25383 2.54168 10.2724L3.55588 11.3189L10.9997 19L18.4436 11.3189L19.4578 10.2724C19.9467 9.76814 20.3346 9.16942 20.5992 8.51045C20.8638 7.85148 21 7.14517 21 6.43187C21 5.71857 20.8638 5.01225 20.5992 4.35328C20.3346 3.69431 19.9467 3.09559 19.4578 2.59133V2.59133Z"
                                                            stroke="currentColor"
                                                            strokeWidth="1.25"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                </div>
                                                <p className="text-base text-right ">Whishlist</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/" className="text-gray-800 dark:text-white text-white flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                                                <div>
                                                    <svg className="fill-stroke" width={20} height={22} viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M4 1L1 5V19C1 19.5304 1.21071 20.0391 1.58579 20.4142C1.96086 20.7893 2.46957 21 3 21H17C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19V5L16 1H4Z" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M1 5H19" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M14 9C14 10.0609 13.5786 11.0783 12.8284 11.8284C12.0783 12.5786 11.0609 13 10 13C8.93913 13 7.92172 12.5786 7.17157 11.8284C6.42143 11.0783 6 10.0609 6 9" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </div>
                                                <p className="text-base text-right ">Cart</p>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="  flex items-center justify-between" style={{backgroundColor:"#556c9e"}}>
                                <div className="hidden md:block px-4">
                                    <ul className="flex items-center space-x-6">
                                        <li className="h-full">
                                            <a href="/" className="pt-4  md:pb-6 border-transparent text-white border-b-4 h-full focus:border-gray-800  focus:outline-none dark:text-white text-base text-right text-white  ">
                                                Deals
                                            </a>
                                        </li>
                                        <li className="h-full">
                                            <a href="/" className="pt-4 md:pb-6 border-transparent border-b-4 h-full focus:border-gray-800 focus:outline-none dark:text-white text-base text-right  text-white ">
                                                OFC Partner
                                            </a>
                                        </li>
                                        <li className="h-full">
                                            <a href="/" className="pt-4 md:pb-6 border-transparent border-b-4 h-full focus:border-gray-800 focus:outline-none dark:text-white text-base text-right text-white ">
                                                Sell on Oiko
                                            </a>
                                        </li>
                                        <li className="h-full">
                                            <a href="/" className="pt-4 md:pb-6 border-transparent border-b-4 h-full focus:border-gray-800 focus:outline-none dark:text-white text-base text-right text-white  ">
                                                Metro
                                            </a>
                                        </li>
                                        
                                    </ul>
                                </div>
                                <div className="hidden opacity-0   bg-gray-50 xl:flex items-center dark:bg-gray-800 space-x-3 p-3 w-full md:w-72">
                                    <div>
                                        <svg className="fill-stroke text-gray-800 dark:text-white" width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M19.0004 18.9999L14.6504 14.6499" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <input type="text" className="text-sm text-gray-600 dark:text-white placeholder-gray-600 dark:placeholder-gray-300 bg-transparent focus:outline-none" placeholder="Search for products" />
                                </div>
                            </div>
                        </div>
                        <div id="mobile-menu" className={`ease-in-out transition duration-200 dark:bg-gray-900 md:hidden absolute inset-0 z-10 flex flex-col w-full h-screen bg-white py-4 }`}>
                            <div className="w-full border-b border-gray-200 ">
                                <div className=" flex items-center justify-between  pb-5 mx-4">
                                    <div />
                                    <div className=" cursor-pointer">
                                        <div className="hidden lg:block">
                                            <img src="/assets/images/oikologo.png" alt="logoimage"/>
                                        </div>
                                        <div className="hidden md:block lg:hidden">
                                        <img src="/assets/images/oikologo.png" alt="logoimage"/>
                                        </div>
                                        <div className="md:hidden">
                                        <img src="/assets/images/oikologo.png" alt="logoimage" />
                                        </div>
                                    </div>
                                    <button aria-label="close menu"  className="focus:outline-none focus:ring-2 focus:ring-gray-800 text-gray-800 dark:text-white">
                                        <svg className="fill-stroke" width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15 5L5 15" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M5 5L15 15" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                         
                        
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
