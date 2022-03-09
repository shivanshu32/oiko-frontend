import './App.css';
import Navigation from './components/navigation'

function App() {
  return (
    <div style={{backgroundColor: '#C6D5EB'}}>
   <Navigation />
   <div className="overflow-y-hidden">
            <div className="2xl:container flex justify-center items-center 2xl:mx-auto xl:px-20 md:px-6 px-4">
                <div className=" flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-16 xl:space-x-48">
                <div className="md:flex-shrink-0 flex md:justify-start justify-center items-center md:items-start flex-col space-y-4 lg:space-y-6 ">
                        <div className="flex flex-col md:justify-start items-center md:items-start space-y-3 lg:space-y-4">
                            <p className="text-base font-medium lg:font-normal md:text-lg lg:text-xl leading-6 text-gray-800">SAVE NOW. STRESS LESS.</p>
                            <h1 className="text-2xl md:text-4xl lg:text-6xl font-extrabold lg:font-black md:leading-10 text-gray-900">30-50% <span className="text-red-700">OFF</span> </h1>
                            <p className="text-xl lg:text-2xl font-bold leading-5 lg:leading-8 text-gray-800">PRETTY MUCH EVERYTHING</p>
                            <p className="text-base font-medium leading-6 text-gray-800">Limited Time Only</p>
                        </div>
                        <button className=" hidden md:block text-base font-medium leading-6 text-white py-3 px-10  bg-gray-800 hover:bg-gray-700 focus:bg-gray-900">
                            Shop
                        </button>
                        
                    </div>
                    <div className="w-full">
                        <img className="w-full" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/collage1.png" alt="collage " />
                    </div>
                    <button className="md:hidden text-base font-medium leading-6 text-white py-3 px-10 lg:px-12 bg-gray-800 hover:bg-gray-700 focus:bg-gray-900">
                        Shop Now
                    </button>
                </div>
            </div>
        </div>


        



        <div className='overflow-y-hidden'>
      <div className="pb-4 py-12 px-6">
  <div className="flex items-center justify-center py-8">
    <p className="text-2xl md:text-4xl font-semibold text-gray-800" >New Products</p>
  </div>
  <div className="flex flex-col md:flex-row justify-center items-start">
    <div className="border border-gray-800 px-8 py-11 flex flex-col w-full justify-center items-center bg-gray-900">
      <p className="text-2xl lg:w-96 lg:text-5xl font-semibold text-white text-center">UPTO <span className="text-transparent bg-clip-text bg-gradient-to-br from-indigo-400 to-pink-600">50%</span> OFF</p>
      <p className="w-48 text-lg lg:text-2xl font-medium text-center mt-4 text-white">BLACK FRIDAY<br />WEEKEND</p>
      <button className="border py-2 px-9 mt-4 text-white text-base border-black-800 hover:bg-gray-800">Shop Now</button>
    </div>
    <div className="flex space-x-4">
      <div className="flex md:w-auto w-full lg:w-auto flex-col items-center md:ml-8 mt-6 md:mt-0 lg:mt-0">
        <div className="w-full md:w-auto lg:w-auto border border-gray-800">
          <img className="w-full md:w-auto lg:w-auto" src="/assets/images/product/1.png" alt="watch" />
        </div>
        <p className="mt-4 text-sm lg:text-base font-medium text-gray-800">Brown Leather Jacket</p>
        <p className="text-xs leading-3 line-through text-red-700">$600.00</p>
        <p className="text-base font-medium leading-7 text-gray-800">$450.00</p>
        <button className="py-2 px-8 border border-gray-800 mt-4 hover:bg-gray-200">Shop Now</button>
      </div>
      <div className="flex w-full md:w-auto lg:w-auto flex-col items-center md:ml-8 mt-6 md:mt-0 lg:mt-0">
        <div className="w-full md:w-auto lg:w-auto border border-gray-800">
          <img className="w-full md:block hidden md:w-auto lg:w-auto" src="/assets/images/product/2.png" alt="shoes" />
          <img className="w-full md:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/unsplash_v13tnV6D9lw%20%282%29.png" alt="shoes" />
        </div>
        <p className="mt-4 text-sm lg:text-base font-medium text-gray-800">Black Leather Jacket</p>
        <p className="text-xs leading-3 line-through text-red-700">$800.00</p>
        <p className="text-base font-medium leading-7 text-gray-800">$600.00</p>
        <button className="py-2 px-8 border border-gray-800 mt-4 hover:bg-gray-200">Shop Now</button>
      </div>
    </div>
  </div>  
  <div className="flex flex-col md:flex-row justify-center items-start">
    <div className="flex space-x-4">
      <div className="flex w-full md:w-auto flex-col items-center md:ml-6 mt-6 ">
        <div className="border border-gray-800">
          <img className="w-full md:block hidden md:w-auto lg:w-auto lg:h-64" src="/assets/images/product/shoe.png" alt="flower" />
          <img className="w-full md:hidden lg:h-64" src="https://files.fm/thumb_show.php?i=cjjhprnmg" alt="flower" />
        </div>
        <p className="mt-4 text-sm lg:text-base font-medium text-gray-800">Men Shoes1</p>
        <p className="text-xs leading-3 line-through text-red-700">$60.00</p>
        <p className="text-base font-medium leading-7 text-gray-800">$40.00</p>
        <button className="py-2 px-8 border border-gray-800 mt-2 md:mt-2 hover:bg-gray-200">Shop Now</button>
      </div>
      <div className="flex w-full md:w-auto lg:w-auto flex-col items-center mt-6 md:ml-6 md:mt-6">
        <div className="lg:w-auto border border-gray-800">
          <img className="w-full md:block hidden md:w-auto lg:w-auto lg:h-64 " src="/assets/images/product/img-3.png" alt="shoes" />
          <img className="w-full md:hidden " src="https://files.fm/thumb_show.php?i=r5bb3hfk2" alt="shoe" />
        </div>
        <p className="mt-4 text-sm lg:text-base font-medium text-gray-800">Men Shoes2</p>
        <p className="text-xs leading-3 line-through text-red-700">$60.00</p>
        <p className="text-base font-medium leading-7 text-gray-800">$40.00</p>
        <button className="py-2 px-8 md:py-2 md:px-3 lg:py-2 lg:px-8 border border-gray-800 mt-2 md:mt-2 lg:mt-1 hover:bg-gray-200">Shop Now</button>
      </div>
    </div>
    <div className="flex space-x-4">
      <div className="flex w-full md:w-auto flex-col items-center md:ml-6 mt-6">
        <div className="border border-gray-800">
          <img className="w-full md:block hidden md:w-auto lg:w-auto lg:h-64 " src="/assets/images/product/img-2.png" alt="plant" />
          <img className="w-full md:hidden" src="https://files.fm/thumb_show.php?i=cwpbp7w9f" alt="plant" />
        </div>
        <p className="mt-4 text-sm lg:text-base font-medium text-gray-800">Men Shoes</p>
        <p className="text-xs leading-3 line-through text-red-700">$60.00</p>
        <p className="text-base font-medium leading-7 text-gray-800">$40.00</p>
        <button className="py-2 px-8 md:py-2 md:px-3 lg:py-2 lg:px-8  border border-gray-800 md:mt-2 lg:mt-1 hover:bg-gray-200">Shop Now</button>
      </div>
      <div className="flex w-full md:w-auto flex-col items-center md:ml-6 mt-6">
        <div className="border border-gray-800">
          <img className="w-full md:block hidden md:w-auto lg:w-auto lg:h-64" src="/assets/images/product/sho.png" alt="camera" />
          <img className="w-full md:hidden lg:h-64" src="https://files.fm/thumb_show.php?i=ecu7fvgnd" alt="camera" />
        </div>
        <p className="mt-4 text-sm lg:text-base font-medium text-gray-800">Men Shoes</p>
        <p className="text-xs leading-3 line-through text-red-700">$60.00</p>
        <p className="text-base font-medium leading-7 text-gray-800">$40.00</p>
        <button className="py-2 px-8 border border-gray-800  md:mt-2 hover:bg-gray-200">Shop Now</button>
      </div>
    </div>
  </div>
</div>
    </div>


    <div className="mx-auto container py-12 px-4 md:px-6 2xl:px-0 flex justify-center items-center">
            <div className="flex flex-col lg:flex-row justify-center items-center lg:space-x-8 space-y-6 lg:space-y-0">
                <div className="relative">
                    <img className="hidden lg:block" src="https://i.ibb.co/XXKZ7Pt/Group-1785.png" alt="table-chair" />
                    <img className="hidden sm:block lg:hidden" src="https://i.ibb.co/KK7Vn9n/Group-1785-1.png" alt="table-chair" />
                    <img className="sm:hidden" src="https://i.ibb.co/F0T98KC/Group-1785.png" alt="table-chair" />
                    <div className="absolute bottom-4 sm:bottom-10 inset-x-4 sm:inset-x-10 p-6 bg-white flex flex-col justify-start items-start">
                        <div>
                            <p className="text-2xl font-semibold leading-6 text-gray-800">Shop Africa</p>
                        </div>
                        <div className="mt-2">
                            <p className="text-base leading-6 sm:leading-4 text-gray-600">Shop products & get delivered in Africa</p>
                        </div>
                        <div className="mt-6">
                            <div className="flex justify-between items-center space-x-2">
                                <a className="text-base font-medium leading-none hover:underline text-gray-800" href="/">
                                    Explore
                                </a>
                                <svg className="fill-current" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.33337 8H12.6667" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M10 10.6667L12.6667 8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M10 5.33333L12.6667 8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative">
                    <img className="hidden lg:block" src="https://i.ibb.co/0qHj658/Group-1786.png" alt="chair-wood-fire" />
                    <img className="hidden sm:block lg:hidden" src="https://i.ibb.co/mGM3xtB/Group-1786-1.png" alt="chair-wood-fire" />
                    <img className="sm:hidden" src="https://i.ibb.co/ZVX8rPm/Group-1786.png" alt="chair-wood-fire" />
                    <div className="absolute bottom-4 sm:bottom-10 inset-x-4 sm:inset-x-10 p-6 bg-white flex flex-col justify-start items-start">
                        <div>
                            <p className="text-2xl font-semibold leading-6 text-gray-800">Shop Asia</p>
                        </div>
                        <div className="mt-2">
                            <p className="text-base leading-6 sm:leading-4 text-gray-600">Shop products & get delivered in Asia</p>
                        </div>
                        <div className="mt-6">
                            <div className="flex justify-between items-center space-x-2">
                                <a className="text-base font-medium leading-none hover:underline text-gray-800" href="/">
                                    Explore
                                </a>
                                <svg className="fill-current" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.33337 8H12.6667" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M10 10.6667L12.6667 8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M10 5.33333L12.6667 8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>   


        <div className="pb-16">
            <div className="bg-gray-100 flex flex-col justify-center items-center pt-9 sm:pt-12 lg:pt-16 pb-24 sm:pb-52">
                <div className="2xl:container 2xl:mx-auto flex flex-col justify-center items-center sm:pb-12 lg:pb-0 space-y-4 px-4 md:px-6 2xl:px-0">
                    <div>
                        <p className="text-3xl lg:text-4xl font-semibold leading-9 text-center text-gray-800">Best Seller Products</p>
                    </div>
                    <div>
                        <p className="text-base leading-normal sm:leading-none text-center text-gray-600">Explore products that are bought most frequently by people</p>
                    </div>
                </div>
            </div>
            <div className="-mt-16 sm:-mt-48 lg:-mt-32 xl:-mt-40 2xl:container 2xl:mx-auto flex justify-center items-center space-y-4 px-4 md:px-6 2xl:px-0 mb-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-items-between gap-x-6 gap-y-5">
                    <div className="flex flex-col justify-center items-start p-2 bg-white">
                        <div className="relative">
                            <img className="hidden lg:block" src="https://i.ibb.co/4ZPL5F0/Rectangle-37.png" alt="watch" />
                            <img className="lg:hidden" src="https://i.ibb.co/h1Vc29G/Rectangle-37.png" alt="watch" />

                            <button className="top-4 right-4 absolute p-3.5 text-gray-600 hover:text-gray-500 flex justify-center items-center bg-white rounded-full">
                                <svg className="fill-stroke" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M6.25 6.875V5.625C6.25 4.63044 6.64509 3.67661 7.34835 2.97335C8.05161 2.27009 9.00544 1.875 10 1.875V1.875C10.9946 1.875 11.9484 2.27009 12.6517 2.97335C13.3549 3.67661 13.75 4.63044 13.75 5.625V6.875M3.125 6.875C2.95924 6.875 2.80027 6.94085 2.68306 7.05806C2.56585 7.17527 2.5 7.33424 2.5 7.5V15.9375C2.5 17.1187 3.50625 18.125 4.6875 18.125H15.3125C16.4937 18.125 17.5 17.1676 17.5 15.9863V7.5C17.5 7.33424 17.4342 7.17527 17.3169 7.05806C17.1997 6.94085 17.0408 6.875 16.875 6.875H3.125Z"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path d="M6.25 8.75V9.375C6.25 10.3696 6.64509 11.3234 7.34835 12.0267C8.05161 12.7299 9.00544 13.125 10 13.125C10.9946 13.125 11.9484 12.7299 12.6517 12.0267C13.3549 11.3234 13.75 10.3696 13.75 9.375V8.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                            <div className="flex justify-between mt-4">
                                <div>
                                    <p className="text-lg font-medium leading-none text-gray-800">Sony Digital Watch</p>
                                </div>
                                <div>
                                    <p className="text-lg leading-none text-right text-gray-600">$1245</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-start p-2 bg-white">
                        <div className="relative">
                            <img className="lg:block hidden" src="https://i.ibb.co/znBmcWV/Rectangle-37-1.png" alt="headphones" />
                            <img className="lg:hidden" src="https://i.ibb.co/hBXHm0W/Rectangle-37-1.png" alt="headphones" />

                            <button className="top-4 right-4 absolute p-3.5 text-gray-600 hover:text-gray-500 flex justify-center items-center bg-white rounded-full">
                                <svg className="fill-stroke" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M6.25 6.875V5.625C6.25 4.63044 6.64509 3.67661 7.34835 2.97335C8.05161 2.27009 9.00544 1.875 10 1.875V1.875C10.9946 1.875 11.9484 2.27009 12.6517 2.97335C13.3549 3.67661 13.75 4.63044 13.75 5.625V6.875M3.125 6.875C2.95924 6.875 2.80027 6.94085 2.68306 7.05806C2.56585 7.17527 2.5 7.33424 2.5 7.5V15.9375C2.5 17.1187 3.50625 18.125 4.6875 18.125H15.3125C16.4937 18.125 17.5 17.1676 17.5 15.9863V7.5C17.5 7.33424 17.4342 7.17527 17.3169 7.05806C17.1997 6.94085 17.0408 6.875 16.875 6.875H3.125Z"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path d="M6.25 8.75V9.375C6.25 10.3696 6.64509 11.3234 7.34835 12.0267C8.05161 12.7299 9.00544 13.125 10 13.125C10.9946 13.125 11.9484 12.7299 12.6517 12.0267C13.3549 11.3234 13.75 10.3696 13.75 9.375V8.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                            <div className="flex justify-between mt-4">
                                <div>
                                    <p className="text-lg font-medium leading-none text-gray-800">Sony Headphones</p>
                                </div>
                                <div>
                                    <p className="text-lg leading-none text-right text-gray-600">$765</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-start p-2 bg-white">
                        <div className="relative">
                            <img className="hidden lg:block" src="https://i.ibb.co/vHj3fjr/Rectangle-37-2.png" alt="speaker" />
                            <img className="lg:hidden" src="https://i.ibb.co/QbpT9td/Rectangle-37-2.png" alt="speaker" />

                            <button className="top-4 right-4 absolute p-3.5 text-gray-600 hover:text-gray-500 flex justify-center items-center bg-white rounded-full">
                                <svg className="fill-stroke" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M6.25 6.875V5.625C6.25 4.63044 6.64509 3.67661 7.34835 2.97335C8.05161 2.27009 9.00544 1.875 10 1.875V1.875C10.9946 1.875 11.9484 2.27009 12.6517 2.97335C13.3549 3.67661 13.75 4.63044 13.75 5.625V6.875M3.125 6.875C2.95924 6.875 2.80027 6.94085 2.68306 7.05806C2.56585 7.17527 2.5 7.33424 2.5 7.5V15.9375C2.5 17.1187 3.50625 18.125 4.6875 18.125H15.3125C16.4937 18.125 17.5 17.1676 17.5 15.9863V7.5C17.5 7.33424 17.4342 7.17527 17.3169 7.05806C17.1997 6.94085 17.0408 6.875 16.875 6.875H3.125Z"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path d="M6.25 8.75V9.375C6.25 10.3696 6.64509 11.3234 7.34835 12.0267C8.05161 12.7299 9.00544 13.125 10 13.125C10.9946 13.125 11.9484 12.7299 12.6517 12.0267C13.3549 11.3234 13.75 10.3696 13.75 9.375V8.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                            <div className="flex justify-between mt-4">
                                <div>
                                    <p className="text-lg font-medium leading-none text-gray-800">Wonderboom Pill</p>
                                </div>
                                <div>
                                    <p className="text-lg leading-none text-right text-gray-600">$550</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-start p-2 bg-white">
                        <div className="relative">
                            <img className="hidden lg:block" src="https://i.ibb.co/KsbPgh8/Rectangle-37-3.png" alt="game-controller" />
                            <img className="lg:hidden" src="https://i.ibb.co/QrX9pRv/Rectangle-37-3.png" alt="game-controller" />

                            <button className="top-4 right-4 absolute p-3.5 text-gray-600 hover:text-gray-500 flex justify-center items-center bg-white rounded-full">
                                <svg className="fill-stroke" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M6.25 6.875V5.625C6.25 4.63044 6.64509 3.67661 7.34835 2.97335C8.05161 2.27009 9.00544 1.875 10 1.875V1.875C10.9946 1.875 11.9484 2.27009 12.6517 2.97335C13.3549 3.67661 13.75 4.63044 13.75 5.625V6.875M3.125 6.875C2.95924 6.875 2.80027 6.94085 2.68306 7.05806C2.56585 7.17527 2.5 7.33424 2.5 7.5V15.9375C2.5 17.1187 3.50625 18.125 4.6875 18.125H15.3125C16.4937 18.125 17.5 17.1676 17.5 15.9863V7.5C17.5 7.33424 17.4342 7.17527 17.3169 7.05806C17.1997 6.94085 17.0408 6.875 16.875 6.875H3.125Z"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path d="M6.25 8.75V9.375C6.25 10.3696 6.64509 11.3234 7.34835 12.0267C8.05161 12.7299 9.00544 13.125 10 13.125C10.9946 13.125 11.9484 12.7299 12.6517 12.0267C13.3549 11.3234 13.75 10.3696 13.75 9.375V8.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                            <div className="flex justify-between mt-4">
                                <div>
                                    <p className="text-lg font-medium leading-none text-gray-800">PS5 controller</p>
                                </div>
                                <div>
                                    <p className="text-lg leading-none text-right text-gray-600">$550</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-start p-2 bg-white">
                        <div className="relative">
                            <img className="hidden lg:block" src="https://i.ibb.co/vHj3fjr/Rectangle-37-2.png" alt="speaker" />
                            <img className="lg:hidden" src="https://i.ibb.co/QbpT9td/Rectangle-37-2.png" alt="speaker" />

                            <button className="top-4 right-4 absolute p-3.5 text-gray-600 hover:text-gray-500 flex justify-center items-center bg-white rounded-full">
                                <svg className="fill-stroke" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M6.25 6.875V5.625C6.25 4.63044 6.64509 3.67661 7.34835 2.97335C8.05161 2.27009 9.00544 1.875 10 1.875V1.875C10.9946 1.875 11.9484 2.27009 12.6517 2.97335C13.3549 3.67661 13.75 4.63044 13.75 5.625V6.875M3.125 6.875C2.95924 6.875 2.80027 6.94085 2.68306 7.05806C2.56585 7.17527 2.5 7.33424 2.5 7.5V15.9375C2.5 17.1187 3.50625 18.125 4.6875 18.125H15.3125C16.4937 18.125 17.5 17.1676 17.5 15.9863V7.5C17.5 7.33424 17.4342 7.17527 17.3169 7.05806C17.1997 6.94085 17.0408 6.875 16.875 6.875H3.125Z"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path d="M6.25 8.75V9.375C6.25 10.3696 6.64509 11.3234 7.34835 12.0267C8.05161 12.7299 9.00544 13.125 10 13.125C10.9946 13.125 11.9484 12.7299 12.6517 12.0267C13.3549 11.3234 13.75 10.3696 13.75 9.375V8.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                            <div className="flex justify-between mt-4">
                                <div>
                                    <p className="text-lg font-medium leading-none text-gray-800">Wonderboom Pill</p>
                                </div>
                                <div>
                                    <p className="text-lg leading-none text-right text-gray-600">$550</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-start p-2 bg-white">
                        <div className="relative">
                            <img className="hidden lg:block" src="https://i.ibb.co/KsbPgh8/Rectangle-37-3.png" alt="game-controller" />
                            <img className="lg:hidden" src="https://i.ibb.co/QrX9pRv/Rectangle-37-3.png" alt="game-controller" />

                            <button className="top-4 right-4 absolute p-3.5 text-gray-600 hover:text-gray-500 flex justify-center items-center bg-white rounded-full">
                                <svg className="fill-stroke" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M6.25 6.875V5.625C6.25 4.63044 6.64509 3.67661 7.34835 2.97335C8.05161 2.27009 9.00544 1.875 10 1.875V1.875C10.9946 1.875 11.9484 2.27009 12.6517 2.97335C13.3549 3.67661 13.75 4.63044 13.75 5.625V6.875M3.125 6.875C2.95924 6.875 2.80027 6.94085 2.68306 7.05806C2.56585 7.17527 2.5 7.33424 2.5 7.5V15.9375C2.5 17.1187 3.50625 18.125 4.6875 18.125H15.3125C16.4937 18.125 17.5 17.1676 17.5 15.9863V7.5C17.5 7.33424 17.4342 7.17527 17.3169 7.05806C17.1997 6.94085 17.0408 6.875 16.875 6.875H3.125Z"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path d="M6.25 8.75V9.375C6.25 10.3696 6.64509 11.3234 7.34835 12.0267C8.05161 12.7299 9.00544 13.125 10 13.125C10.9946 13.125 11.9484 12.7299 12.6517 12.0267C13.3549 11.3234 13.75 10.3696 13.75 9.375V8.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                            <div className="flex justify-between mt-4">
                                <div>
                                    <p className="text-lg font-medium leading-none text-gray-800">PS5 controller</p>
                                </div>
                                <div>
                                    <p className="text-lg leading-none text-right text-gray-600">$550</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-start p-2 bg-white">
                        <div className="relative">
                            <img className="hidden lg:block" src="https://i.ibb.co/4ZPL5F0/Rectangle-37.png" alt="watch" />
                            <img className="lg:hidden" src="https://i.ibb.co/h1Vc29G/Rectangle-37.png" alt="watch" />

                            <button className="top-4 right-4 absolute p-3.5 text-gray-600 hover:text-gray-500 flex justify-center items-center bg-white rounded-full">
                                <svg className="fill-stroke" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M6.25 6.875V5.625C6.25 4.63044 6.64509 3.67661 7.34835 2.97335C8.05161 2.27009 9.00544 1.875 10 1.875V1.875C10.9946 1.875 11.9484 2.27009 12.6517 2.97335C13.3549 3.67661 13.75 4.63044 13.75 5.625V6.875M3.125 6.875C2.95924 6.875 2.80027 6.94085 2.68306 7.05806C2.56585 7.17527 2.5 7.33424 2.5 7.5V15.9375C2.5 17.1187 3.50625 18.125 4.6875 18.125H15.3125C16.4937 18.125 17.5 17.1676 17.5 15.9863V7.5C17.5 7.33424 17.4342 7.17527 17.3169 7.05806C17.1997 6.94085 17.0408 6.875 16.875 6.875H3.125Z"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path d="M6.25 8.75V9.375C6.25 10.3696 6.64509 11.3234 7.34835 12.0267C8.05161 12.7299 9.00544 13.125 10 13.125C10.9946 13.125 11.9484 12.7299 12.6517 12.0267C13.3549 11.3234 13.75 10.3696 13.75 9.375V8.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                            <div className="flex justify-between mt-4">
                                <div>
                                    <p className="text-lg font-medium leading-none text-gray-800">Sony Digital Watch</p>
                                </div>
                                <div>
                                    <p className="text-lg leading-none text-right text-gray-600">$1245</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-start p-2 bg-white">
                        <div className="relative">
                            <img className="lg:block hidden" src="https://i.ibb.co/znBmcWV/Rectangle-37-1.png" alt="headphones" />
                            <img className="lg:hidden" src="https://i.ibb.co/hBXHm0W/Rectangle-37-1.png" alt="headphones" />

                            <button className="top-4 right-4 absolute p-3.5 text-gray-600 hover:text-gray-500 flex justify-center items-center bg-white rounded-full">
                                <svg className="fill-stroke" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M6.25 6.875V5.625C6.25 4.63044 6.64509 3.67661 7.34835 2.97335C8.05161 2.27009 9.00544 1.875 10 1.875V1.875C10.9946 1.875 11.9484 2.27009 12.6517 2.97335C13.3549 3.67661 13.75 4.63044 13.75 5.625V6.875M3.125 6.875C2.95924 6.875 2.80027 6.94085 2.68306 7.05806C2.56585 7.17527 2.5 7.33424 2.5 7.5V15.9375C2.5 17.1187 3.50625 18.125 4.6875 18.125H15.3125C16.4937 18.125 17.5 17.1676 17.5 15.9863V7.5C17.5 7.33424 17.4342 7.17527 17.3169 7.05806C17.1997 6.94085 17.0408 6.875 16.875 6.875H3.125Z"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path d="M6.25 8.75V9.375C6.25 10.3696 6.64509 11.3234 7.34835 12.0267C8.05161 12.7299 9.00544 13.125 10 13.125C10.9946 13.125 11.9484 12.7299 12.6517 12.0267C13.3549 11.3234 13.75 10.3696 13.75 9.375V8.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                            <div className="flex justify-between mt-4">
                                <div>
                                    <p className="text-lg font-medium leading-none text-gray-800">Sony Headphones</p>
                                </div>
                                <div>
                                    <p className="text-lg leading-none text-right text-gray-600">$765</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div className="2xl:mx-auto 2xl:container md:py-12 py-8 flex justify-center items-center">
            <div className="w-full flex flex-col justify-center items-center">
                <div className="w-full relative">
                    <img className="w-full hidden lg:block" src="https://i.ibb.co/808PfJx/Group-1741.png" alt="sofas" />
                    <img className="w-full hidden md:block lg:hidden" src="https://i.ibb.co/5BS3WRr/pexels-houzlook-com-3356416-3.png" alt="sofas" />
                    <img className="w-full md:hidden" src="https://i.ibb.co/7159Lvf/pexels-houzlook-com-3356416-4.png" alt="sofas" />
                    <div className="absolute lg:hidden inset-0 w-full opacity-60 bg-gray-800"></div>
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
                        <div className="px-2 sm:px-4 md:px-0">
                            <p className="text-3xl lg:text-4xl font-semibold lg:leading-9 md:leading-7 leading-9 text-white">Decorate Your Home With Us</p>
                        </div>
                        <div className="px-2 sm:px-4 md:px-0 lg:mt-6 mt-4 md:w-3/4 lg:w-2/5">
                            <p className="text-base leading-6 text-center text-white font-normal">We offer premium quality furniture at most affordable prices ever and a huge range of collection to give you most exquisite shopping experience</p>
                        </div>
                        <div className="px-4 sm:px-8 md:px-0 mt-16 lg:mt-20 md:px-4 lg:px-0 w-full flex justify-center items-center">
                            <button className="focus:ring-2 focus:ring-gray-500 hover:text-black hover:bg-gray-200 focus:outline-none rounded-sm transition duration-150 w-full md:w-3/4 lg:w-32 py-4 bg-white flex justify-center items-center text-base font-medium leading-4 text-center text-gray-800">See More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>




    <div className="2xl:mx-auto 2xl:container lg:px-20 lg:py-16 md:py-12 md:px-6 py-9 px-4" style={{backgroundColor:"#556c9e"}}>
            <div className="py-14 border-b lg:flex sm:space-y-10 lg:space-y-0">
                <div className="lg:w-1/2 sm:flex items-start justify-between">
                    <div className="md:w-1/2">
                        <h2 className="text-xl font-extrabold leading-tight text-white pb-7">Earn Cash with Us</h2>
                        <a href="/">
                            <p className="pb-6 cursor-pointer text-base leading-4 text-white">Sell products on OikoExpress</p>
                        </a>
                        <a href="/">
                            <p className="pb-6 cursor-pointer text-base leading-4 text-white">Drive buy & Deliver</p>
                        </a>
                        <a href="/">
                            <p className="pb-6 cursor-pointer text-base leading-4 text-white">Become an Affiliate</p>
                        </a>
                        <a href="/">
                            <p className="pb-6 cursor-pointer text-base leading-4 text-white">Advertise your Products</p>
                        </a>
                        <a href="/">
                            <p className="pb-6 cursor-pointer text-base leading-4 text-white">Fullfilment by Oiko</p>
                        </a>
                    </div>
                    <div className="md:w-1/2 md:flex items-center justify-center mt-9 md:mt-0">
                        <div className="flex flex-col items-left justify-start">
                            <h2 className="text-xl font-extrabold leading-tight text-white pb-7">Get to Know Us</h2>
                            <a href="/">
                                <p className="pb-6 cursor-pointer text-base leading-4 text-white">Careers</p>
                            </a>
                            <a href="/">
                                <p className="pb-6 cursor-pointer text-base leading-4 text-white">Blog</p>
                            </a>
                            <a href="/">
                                <p className="pb-6 cursor-pointer text-base leading-4 text-white">About OikoExpress</p>
                            </a>
                            
                        </div>
                    </div>
                    <div className="lg:hidden md:w-1/2 sm:pt-0 md:flex items-center justify-center mt-9 md:mt-0">
                        <div className="flex flex-col items-left justify-start">
                            <h2 className="text-xl font-extrabold leading-tight text-white pb-7">Support</h2>
                            <a href="/">
                                <p className="pb-6 cursor-pointer text-base leading-4 text-white">Privacy Policy</p>
                            </a>
                            <a href="/">
                                <p className="pb-6 cursor-pointer text-base leading-4 text-white">FAQs</p>
                            </a>
                            <a href="/">
                                <p className="pb-6 cursor-pointer text-base leading-4 text-white">Disclaimers</p>
                            </a>
                            <a href="/">
                                <p className="pb-6 cursor-pointer text-base leading-4 text-white">Return Policy</p>
                            </a>
                            <a href="/">
                                <p className="pb-6 cursor-pointer text-base leading-4 text-white">Cookies</p>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/2 sm:flex items-start justify-between">
                    <div className="hidden md:w-1/2 sm:pt-0 pt-4 lg:flex items-center lg:justify-center">
                        <div className="flex flex-col items-left justify-start">
                            <h2 className="text-xl font-extrabold leading-tight text-white pb-7">Support</h2>
                            <a href="/">
                                <p className="pb-6 cursor-pointer text-base leading-4 text-white">Privacy Policy</p>
                            </a>
                            <a href="/">
                                <p className="pb-6 cursor-pointer text-base leading-4 text-white">FAQs</p>
                            </a>
                            <a href="/">
                                <p className="pb-6 cursor-pointer text-base leading-4 text-white">Disclaimers</p>
                            </a>
                            <a href="/">
                                <p className="pb-6 cursor-pointer text-base leading-4 text-white">Return Policy</p>
                            </a>
                            <a href="/">
                                <p className="pb-6 cursor-pointer text-base leading-4 text-white">Cookies</p>
                            </a>
                        </div>
                    </div>
                    <div className="md:w-1/2 sm:pt-0 mt-10 md:mt-0 sm:flex items-center lg:justify-end lg:justify-center">
                        <div className="flex flex-col items-left justify-start">
                            <h2 className="text-xl font-extrabold leading-tight text-white pb-7">Help Center</h2>
                            <a href="/">
                                <p className="pb-6 cursor-pointer text-base leading-4 text-white">Shipping rates &amp; Policies</p>
                            </a>
                            <a href="/">
                                <p className="pb-6 cursor-pointer text-base leading-4 text-white">Your Orders</p>
                            </a>
                            <a href="/">
                                <p className="pb-6 cursor-pointer text-base leading-4 text-white">Securities</p>
                            </a>
                            <a href="/">
                                <p className="pb-6 cursor-pointer text-base leading-4 text-white">Account Settings</p>
                            </a>
                            <a href="/">
                                <p className="pb-6 cursor-pointer text-base leading-4 text-white">Account Prices</p>
                            </a>
                            <a href="/">
                                <p className="pb-6 cursor-pointer text-base leading-4 text-white">Returns & Refunds</p>
                            </a>
                            <a href="/">
                                <p className="pb-6 cursor-pointer text-base leading-4 text-white">Cancel Orders</p>
                            </a>
                            <a href="/">
                                <p className="pb-6 cursor-pointer text-base leading-4 text-white">Help</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col py-12 items-center justify-center">
            <div className="hidden lg:block">
                                    <img src="/assets/images/oikologo.png" className="w-42 h-8" alt="logoimage" />
            </div>
                <p className="text-sm text-center text-white pt-3">© 2022 OikoExpress All rights reserved.</p>
            </div>
        </div>



    </div>
    
  );
}

export default App;
