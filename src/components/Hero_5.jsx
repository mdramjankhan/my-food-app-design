// import React from 'react';
// import { LiaIndustrySolid } from "react-icons/lia";
// import chilli from '../assets/chilli.png';
// import dbowl1 from "../assets/dbowl_3.png";
// import broc from '../assets/broccoli.png';

// const Hero_5 = () => {
//     return (
//         <div className='bg-[#2e30ac] text-gray-100 flex justify-center relative'>
//             <div className='h-52 flex justify-around items-center w-1/2'>
//                 <div>
//                     <h1 className='text-2xl mb-2'>Ready to get started?</h1>
//                     <p className='text-xs'>Lorem ipsum dolor sit amet, cone!</p>
//                 </div>
//                 <div className='flex bg-white p-2 rounded-sm outline'>
//                     <input type="email" placeholder='Email address' className='pl-4 text-black border-none outline-none' />
//                     <button
//                         className='flex items-baseline text-blue-700 font-medium uppercase'
//                     >Get started<LiaIndustrySolid className='size-5'/></button>
//                 </div>
//             </div>
//             {/* chillie img */}
//             <div className='absolute w-24 left-0 bottom-[-2rem]'>
//                 <img src={chilli} />
//             </div>
//             {/* bowl img  */}
//             <div className='w-44 absolute right-0 top-4'>
//                 <img src={dbowl1}  />
//             </div>

//             <div className=' absolute left-0 z-10 top-[-3rem] w-32 rotate-45'>
//                 <img src={broc} />
//             </div>

//         </div>
//     )
// }

// export default Hero_5



// import React from 'react';
// import { LiaIndustrySolid } from "react-icons/lia";
// import chilli from '../assets/chilli.png';
// import dbowl1 from "../assets/dbowl_3.png";
// import broc from '../assets/broccoli.png';

// const Hero_5 = () => {
//     return (
//         <div className='bg-[#2e30ac] text-gray-100 flex justify-center relative p-4'>
//             <div className='h-52 flex flex-col lg:flex-row justify-around items-center lg:w-1/2 w-full'>
//                 {/* Text and input container */}
//                 <div className='mb-4 lg:mb-0 text-center lg:text-left'>
//                     <h1 className='text-2xl lg:text-3xl mb-2'>Ready to get started?</h1>
//                     <p className='text-xs lg:text-sm'>Lorem ipsum dolor sit amet, cone!</p>
//                 </div>

//                 {/* Input and button container */}
//                 <div className='flex bg-white p-2 rounded-sm outline w-full lg:w-auto justify-center lg:justify-start'>
//                     <input 
//                         type="email" 
//                         placeholder='Email address' 
//                         className='pl-4 text-black border-none outline-none w-3/4 lg:w-auto'
//                     />
//                     <button
//                         className='flex items-center text-blue-700 font-medium uppercase ml-2'
//                     >
//                         Get started 
//                         <LiaIndustrySolid className='ml-2 size-5' />
//                     </button>
//                 </div>
//             </div>

//             {/* Chillie Image */}
//             <div className='absolute w-16 sm:w-24 left-0 bottom-[-1rem] sm:bottom-[-2rem]'>
//                 <img src={chilli} alt="Chilli" />
//             </div>

//             {/* Bowl Image */}
//             <div className='absolute w-24 sm:w-44 right-0 top-4'>
//                 <img src={dbowl1} alt="Bowl" />
//             </div>

//             {/* Broccoli Image */}
//             <div className='absolute left-0 z-10 top-[-2rem] sm:top-[-3rem] w-20 sm:w-32 rotate-45'>
//                 <img src={broc} alt="Broccoli" />
//             </div>
//         </div>
//     );
// }

// export default Hero_5;



import React from 'react';
import { LiaIndustrySolid } from "react-icons/lia";
import chilli from '../assets/chilli.png';
import dbowl1 from "../assets/dbowl_3.png";
import broc from '../assets/broccoli.png';

const Hero_5 = () => {
    return (
        <div className='bg-[#2e30ac] text-gray-100 flex justify-center relative px-4 py-10 md:py-16 lg:py-20 '>
            <div className='flex flex-col md:flex-row justify-between items-center w-full md:w-3/4 lg:w-2/3 xl:w-1/2 space-y-6 md:space-y-0'>
                {/* Text Section */}
                <div className='text-center md:text-left'>
                    <h1 className='text-xl md:text-2xl lg:text-3xl mb-2'>Ready to get started?</h1>
                    <p className='text-xs md:text-sm lg:text-base'>Lorem ipsum dolor sit amet, cone!</p>
                </div>
                
                {/* Input Section */}
                <div className='flex bg-white p-2 rounded-sm shadow-md w-full max-w-md'>
                    <input 
                        type="email" 
                        placeholder='Email address' 
                        className='flex-grow pl-4 text-black border-none outline-none text-sm md:text-base '
                    />
                    <button
                        className='flex items-center text-blue-700 font-medium uppercase ml-2 text-sm md:text-base'
                    >
                        Get started
                        <LiaIndustrySolid className='ml-2 h-5 w-5'/>
                    </button>
                </div>
            </div>

            {/* Chilli Image */}
            <div className='absolute w-16 md:w-24 left-0 bottom-[-1.5rem] md:bottom-[-2rem]'>
                <img src={chilli} alt="Chilli"/>
            </div>

            {/* Bowl Image */}
            <div className='w-28 md:w-44 absolute right-0 top-2 max-md:w-20 max-md:top-[-1.6rem] max-sm:right-[0px] '>
                <img src={dbowl1} alt="Bowl"/>
            </div>

            {/* Broccoli Image */}
            <div className='absolute left-0 z-10 top-[-2rem] md:top-[-3rem] w-20 md:w-32 rotate-45'>
                <img src={broc} alt="Broccoli"/>
            </div>
        </div>
    );
};

export default Hero_5;

