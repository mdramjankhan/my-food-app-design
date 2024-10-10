import React from 'react';
import bowl from '../assets/bowl..png';

const Hero = () => {
    return (
        <div className='relative '>
            <div className='bg-[#d7e9f5] flex flex-row p-12 
                max-md:flex-col max-md:pt-0 '   
            >
                <div className='flex flex-col w-1/2 
                    max-md:w-full'
                >
                    <h1 className='logo_1 text-[7rem] ml-24 text-[#6a6ec9] 
                        max-md:text-[4rem] max-md:ml-0'
                    
                    >Biriyani</h1>
                    <h2 className='logo absolute top-[10.8rem] left-[33rem] text-xl 
                        max-md:top-[4.5rem] max-md:left-[16.4rem]'
                    >BOWL</h2>
                    <p className='lg:ml-12 
                        max-md:w-full max-md:text-sm  max-md:mt-2'
                    >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi facilis veritatis quibusdam nulla eveniet, laudantium rerum corrupti iusto, sunt dignissimos assumenda earum? Aliquam facere, laudantium neque expedita minima porro perferendis.</p>
                    <button className='absolute bottom-36 left-24 p-2 pl-8 pr-8 rounded-full bg-[#a3261f] text-white text-sm font-semibold
                        max-md:bottom-[23rem] max-md:left-1/2 max-md:transform max-md:-translate-x-1/2 max-md:text-nowrap'
                    >VIEW OUR MENU</button>
                </div>
                <div className='max-md:mt-10 max-md:w-[20rem] max-md:h-[20rem]'>
                    <img src={bowl} className=' size-[28rem] ml-10 move 
                        max-md:w-[20rem] max-md:h-[20rem] max-md:ml-0'
                    />
                </div>
                <div className='absolute bottom-[-20px] right-[40%] flex flex-col items-center
                    max-md:bottom-[-1rem]  max-md:right-[4.8rem]  max-md:left-1/2 max-md:transform max-md:-translate-x-1/2'               
                >
                    <h1 className='font-bold text-xl text-slate-600
                        max-md:text-nowrap'
                    >WHAT SHOULD I EAT IF I AM ?</h1>
                    <h2 className='bg-[#605db4] p-2 rounded-full uppercase text-white text-sm font-semibold pl-6 pr-6
                        max-md:text-nowrap
                    '>Counting calories</h2>
                </div>
            </div>
        </div>
    )
}

export default Hero



// import React from 'react';
// import bowl from '../assets/bowl..png';

// const Hero = () => {
//     return (
//         <div>
//             <div className='bg-[#d7e9f5] flex flex-col md:flex-row p-8 md:p-12'>
//                 {/* Text Section */}
//                 <div className='flex flex-col w-full md:w-1/2 relative'>
//                     <h1 className='text-5xl md:text-[7rem] ml-0 md:ml-24 text-[#6a6ec9]'>Biriyani</h1>
//                     <h2 className='absolute top-20 md:top-32 right-8 md:right-14 text-lg md:text-xl'>BOWL</h2>
//                     <p className='mt-6 md:mt-8 text-sm md:text-base lg:text-lg ml-0 md:ml-12'>
//                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi facilis veritatis quibusdam nulla eveniet, laudantium rerum corrupti iusto, sunt dignissimos assumenda earum? Aliquam facere, laudantium neque expedita minima porro perferendis.
//                     </p>
//                     <button className='mt-6 md:mt-0 absolute bottom-4 md:bottom-28 left-8 md:left-12 p-2 pl-6 pr-6 md:pl-8 md:pr-8 rounded-full bg-[#a3261f] text-white text-xs md:text-sm font-semibold'>
//                         VIEW OUR MENU
//                     </button>
//                 </div>

//                 {/* Image Section */}
//                 <div className='flex justify-center md:justify-start'>
//                     <img src={bowl} className='w-64 md:w-80 lg:w-[28rem] mt-8 md:mt-0 ml-0 md:ml-10' alt="Bowl" />
//                 </div>

//                 {/* Bottom Section */}
//                 <div className='absolute bottom-[-4rem] md:bottom-[-76px] right-1/4 md:right-[40%] flex flex-col items-center'>
//                     <h1 className='font-bold text-lg md:text-xl text-slate-600'>WHAT SHOULD I EAT IF I AM?</h1>
//                     <h2 className='bg-[#605db4] p-2 rounded-full uppercase text-white text-xs md:text-sm font-semibold pl-4 pr-4 md:pl-6 md:pr-6 mt-2'>
//                         Counting calories
//                     </h2>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Hero;
