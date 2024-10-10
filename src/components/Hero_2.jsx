import React from 'react';
import bowl_1 from '../assets/bowl1.png'

const Hero_2 = () => {
    return (
        <div>
            <div className='bg-[#f6f9fa] flex flex-row p-12 max-md:hidden'>
                <div className='max-md:w-full '>
                    <img src={bowl_1} className=' size-[28rem] ml-12 ' />
                </div>

                <div className='flex flex-col w-1/2 relative'>
                    <h1 className='logo_1 text-[7rem] ml-24 text-[#6a6ec9] max-sm:text-[2rem] '>Poke</h1>
                    <h2 className='logo absolute top-5 left-16 text-xl'>BOWL</h2>
                    <p className='ml-12'>Lorem ipsum dolor sit amet lroes dfsopfup ewpper  oisajfoa pjrwe paj rfew  eofjaowj fo fwe we eoje e we awpejawjewrj  consectetur adipisicing elit. Nisi facilis veritatis quibusdam nulla eveniet, laudantium rerum corrupti iusto, sunt dignissimos assumenda earum? Aliquam facere, laudantium neque expedita minima porro perferendis.</p>
                    <button className='absolute bottom-28 left-12 p-2 pl-8 pr-8 rounded-full bg-[#a3261f] text-white text-sm font-semibold'>VIEW OUR MENU</button>
                </div>
            </div>

            {/* mobile phone screen  */}
            <div className='bg-[#f6f9fa] flex flex-col pt-10 p-2 md:hidden'>
                <div className='flex justify-around items-center relative'>
                    <img src={bowl_1} className=' size-[14rem]' />
                    <h1 className='logo_1 text-[4rem] mb-16 text-[#6a6ec9] '>Poke</h1>
                    <h2 className='logo absolute right-1 bottom-[5.5rem] text-xl'>BOWL</h2>
                </div>
                <div className='w-full text-center pl-2 pr-2 relative pb-12'>
                    <p className=''>Lorem ipsum dolor sit amet lroes dfsopfup ewpper  oisajfoa pjrwe paj rfew  eofjaowj fo fwe we eoje e we awpejawjewrj  consectetur adipisicing elit. Nisi facilis veritatis quibusdam nulla eveniet, laudantium rerum corrupti iusto, sunt dignissimos assumenda earum? Aliquam facere, laudantium neque expedita minima porro perferendis.</p>
                    <button className='absolute bottom-0 left-1/2 transform -translate-x-1/2  p-2 pl-8 pr-8 rounded-full bg-[#a3261f] text-white text-sm font-semibold'>VIEW OUR MENU</button>
                </div>
            </div>
        </div>
    )
}

export default Hero_2
