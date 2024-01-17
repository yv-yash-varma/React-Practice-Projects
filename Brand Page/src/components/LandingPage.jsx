function LandingPage(){
    
    return(


        <div className="flex justify-center mt-5 mx-auto"  >
 
            <div className=" w-1/2 items-center mx-4">
                <h1 className="font-bold text-[100px] leading-tight">
                    YOUR FEET DESERVES THE BEST
                </h1>
                <p className="text-gray-700 w-1/2">
                YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
                </p>
                <div>
                <button className='items-center bg-red-400 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mr-4'>
                    Shop Now
                </button>
                    <button className="items-center border border-gray-500 py-2 px-4 rounded">Category</button>
                </div>

                <p>Also Available on</p>
                <div className="flex mx-2">
                <img src="src/images/flipkart.png" className='mx-4' alt="" />
                <img src="src/images/amazon.png" alt="" />
                </div>
            </div>

            <img src="src/images/shoe_image.png" alt="" className="w-[530px] h-[437px] self-center"/> 
        </div>
        
    )
}

export default LandingPage;