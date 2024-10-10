// import React from 'react';
// import wave from '../assets/wave-haikei.png';
// import blob from '../assets/blob-haikei.png';
// import dbowl2 from "../assets/dbowl_2.png";
// import prof from '../assets/profile.png';
// import lief from '../assets/lief.png';

// const Hero_4 = () => {
//     return (
//         <div className='overflow-hidden relative'>
//             <div className='bodyImg flex justify-end'>
//                 <img src={wave} className='w-full h-96 absolute bottom-0 left-0' />
//                 <img src={blob} className='w-[63rem] absolute left-[-4rem] bottom-4' />
//                 <img src={dbowl2} className='absolute w-72 rotate-180 left-[-7rem] top-14' />
//                 {/* text on blob  */}
//                 <div className='absolute left-[19rem] top-[7rem] text-center w-64 text-xs'>
//                     <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, vel! Est iste quisquam mollitia, quidem perferendis maiores voluptate modi odio soluta at asperiores sint ratione, obcaecati saepe! Reiciendis, voluptatibus ducimus"</p>
//                     <div className='flex justify-evenly w-40 absolute right-0 top-28'>
//                         <div className='rounded-full overflow-hidden w-10'>
//                             <img src={prof} />                            
//                         </div>
//                         <div>
//                             <h1 className='font-semibold'>Md Ramjan Khan</h1>
//                             <h2 className='font-semibold text-green-600'>@LuxuryPresence</h2>
//                         </div>
//                     </div>
//                 </div>
//                 <div className='mt-32 w-1/3'>
//                     <h1 className=' text-3xl font-serif font-thin uppercase mb-2'>our happy <br /> customer</h1>
//                     <p className='text-xs w-2/3'>lorem rejej uhd tt jal heaa sapjr aunt ajpanr irndn rrhrbr ndjdn ultra hd main sub kuch</p>
//                     <button className='p-2 bg-red-300 pl-8 pr-8 rounded-full mt-8'>See!</button>
//                 </div>
//             </div>

//             {/* lief img  */}
//             <div className=' absolute right-0 z-10 top-0 w-32'>
//                 <img src={lief} />
//             </div>
//         </div>
//     )
// }

// export default Hero_4


import React from 'react';
import wave from '../assets/wave-haikei.png';
import blob from '../assets/blob-haikei.png';
import dbowl2 from "../assets/dbowl_2.png";
import prof from '../assets/profile.png';
import lief from '../assets/lief.png';

const Hero_4 = () => {
    return (
        <div className='overflow-hidden relative'>
            <div className='bodyImg flex flex-col md:flex-row justify-end relative'>
                {/* Background Images */}
                <img src={wave} className='w-full h-56 md:h-72 lg:h-96 absolute bottom-0 left-0' alt="wave background"/>
                <img src={blob} className='hidden md:block w-[40rem] lg:w-[63rem] absolute left-[-2rem] lg:left-[-4rem] bottom-4' alt="blob background"/>
                <img src={dbowl2} className='w-36 md:w-48 lg:w-72 rotate-180 absolute left-[-3rem] lg:left-[-7rem] top-14' alt="bowl"/>

                {/* Text on Blob */}
                <div className='absolute left-[3rem] md:left-[15rem] lg:left-[19rem] top-[5rem] md:top-[7rem] text-center w-52 md:w-64 text-xs
                    max-md:bottom-0 max-md:left-1/2 max-md:transform max-md:-translate-x-1/2 
                '>
                    <p className='mb-4'>
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, vel! Est iste quisquam mollitia, quidem perferendis maiores voluptate modi odio soluta at asperiores sint ratione, obcaecati saepe! Reiciendis, voluptatibus ducimus"
                    </p>
                    <div className='flex ml-14 justify-evenly items-center w-full md:w-40 absolute right-0 md:right-auto top-28
                        max-md:mt-3  max-md:ml-0
                    '>
                        <div className='rounded-full overflow-hidden w-8 md:w-10'>
                            <img src={prof} alt="Profile"/>
                        </div>
                        <div className='ml-2 max-md:ml-0'>
                            <h1 className='font-semibold text-nowrap text-sm md:text-base'>Md Ramjan Khan</h1>
                            <h2 className='font-semibold text-green-600 text-xs md:text-sm'>@LuxuryPresence</h2>
                        </div>
                    </div>
                </div>

                {/* Main Text Section */}
                <div className='mt-10 md:mt-32 w-full md:w-1/2 lg:w-1/3 p-4 md:pl-16 lg:pl-20  max-md:text-center max-md:pb-20'>
                    <h1 className='text-2xl md:text-3xl lg:text-4xl font-serif font-thin uppercase mb-2'>
                        Our Happy <br /> Customer
                    </h1>
                    <p className='text-xs md:text-sm lg:text-base w-full md:w-2/3'>
                        Lorem rejej uhd tt jal heaa sapjr aunt ajpanr irndn rrhrbr ndjdn ultra hd main sub kuch.
                    </p>
                    <button className='p-2 bg-red-300 pl-8 pr-8 rounded-full mt-8  text-xs md:text-sm lg:text-base '>
                        See!
                    </button>
                </div>
            </div>

            {/* Leaf Image */}
            <div className='absolute right-0 z-10 top-0 w-20 md:w-24 lg:w-32'>
                <img src={lief} alt="Leaf"/>
            </div>
        </div>
    );
}

export default Hero_4;

