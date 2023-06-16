import React from 'react'

import img10 from '../assets/img10.JPG';

function About() {
  return (
    <div className='us text-white'>
        {/* <h1 className='text-center font-poppin text-4xl pt-8'>About Us</h1> */}
        <div className='flex flex-wrap items-center justify-between h-96 pt-16 font-poppin sm:h-screen'>
            <div className='sm:w-1/2'>
                <img src={img10} alt="" className='h-[360px] hidden sm:block sm:ml-auto'/>
            </div>
            <div className='sm:w-1/2 mx-auto'>
                <div className='w-1/2 mx-auto'>
                    <h2 className='text-xl sm:text-2xl'>Akbar Picture</h2>
                    <h3 className='text-base sm:text-xl'>Akbar Photo & Cinema</h3>
                    <p className='text-sm sm:text-base'>Since 2021.</p>
                    <div className='flex flex-row'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512" className='fill-white my-auto pr-2'><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg><p>Ogan Ilir Based, Sumatera Selatan</p>
                    </div>
                    
                </div>     
            </div>
            
        </div>
    </div>
  )
}

export default About