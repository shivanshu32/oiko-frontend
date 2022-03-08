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
