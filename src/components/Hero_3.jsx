// import React from 'react';
// import dbowl3 from "../assets/dbowl_1.png";
// import dbowl1 from "../assets/dbowl_3.png";
// import dbowl4 from "../assets/dbowl_4.png";


// const Hero_3 = () => {
//     return (
//         <div>
//             <div className='bg-[#5e5fb2] text-slate-200 '>
//                 {/* heading */}
//                 <div className='flex flex-col items-center'>
//                     <h1 className='text-3xl uppercase font-semibold mt-5'>Our Menu</h1>
//                     <p className='w-1/3 text-xs text-center'>Lorem ipsum dolor sit amet consectetur Aspernatur fugiat, temporibus, eum itaque impedit rerum debitis atque labore voluptatibus iusto deleniti, esse earum perferendis!</p>
//                 </div>
//                 {/* images */}
//                 <div className='flex justify-evenly ml-16 mr-16 mt-10 pb-16'>
//                     {/* img-1  */}
//                     <div className=''>
//                         <div className=' text-center'>
//                             <img src={dbowl1} className='size-48' />
//                             <span>Price : $300</span>
//                         </div>
//                     </div>
//                     {/* img-2  */}
//                     <div className=' text-center'>
//                         <img src={dbowl3} className='size-48' />
//                         <span>Price : $300</span>
//                     </div>
//                     {/* img-3  */}
//                     <div className=' text-center'>
//                         <img src={dbowl4} className='size-48 ' />
//                         <span>Price : $300</span>
//                     </div>
//                 </div>

//             </div>
//         </div>
//     )
// }

// export default Hero_3



import React from 'react';
import dbowl3 from "../assets/dbowl_1.png";
import dbowl1 from "../assets/dbowl_3.png";
import dbowl4 from "../assets/dbowl_4.png";

const Hero_3 = () => {
    return (
        <div>
            <div className='bg-[#5e5fb2] text-slate-200 py-10'>
                {/* Heading */}
                <div className='flex flex-col items-center text-center'>
                    <h1 className='text-xl md:text-3xl uppercase font-semibold mt-5 max-md:mt-0'>Our Menu</h1>
                    <p className='w-11/12 md:w-2/3 lg:w-1/3 text-xs md:text-sm'>
                        Lorem ipsum dolor sit amet consectetur Aspernatur fugiat, temporibus, eum itaque impedit rerum debitis atque labore voluptatibus iusto deleniti, esse earum perferendis!
                    </p>
                </div>
                
                {/* Images Section */}
                <div className='flex flex-col md:flex-row justify-around items-center mt-10 pb-16 space-y-8 md:space-y-0 md:space-x-4 lg:space-x-16 px-6 md:px-16'>
                    {/* Image 1 */}
                    <div className='text-center'>
                        <img src={dbowl1} className='w-40 md:w-48 lg:w-56' alt="Dish 1" />
                        <span className='block mt-2 text-sm md:text-base'>Price: $300</span>
                    </div>
                    
                    {/* Image 2 */}
                    <div className='text-center'>
                        <img src={dbowl3} className='w-40 md:w-48 lg:w-56' alt="Dish 2" />
                        <span className='block mt-2 text-sm md:text-base'>Price: $300</span>
                    </div>
                    
                    {/* Image 3 */}
                    <div className='text-center'>
                        <img src={dbowl4} className='w-40 md:w-48 lg:w-56' alt="Dish 3" />
                        <span className='block mt-2 text-sm md:text-base'>Price: $300</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero_3;
