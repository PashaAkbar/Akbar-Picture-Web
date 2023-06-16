import React from 'react'
// import { Link } from 'react-scroll'


const Navbar = () => {
    const links = [
        {
            id : 1,
            link : 'home'
        },
        {
            id : 2,
            link : 'about us'
        },
        {
            id : 3,
            link : 'contact us'
        }       
    ]
  return (
    <div className='nav flex justify-between items-center w-full h-14 px-4 bg-black'>
        <div className='pl-8 cursor-pointer'>
            <h1 className='text-gray-100'>Akbar Picture</h1>
        </div>
        <ul className='hidden md:flex h-full items-center'>
            {links.map(({id,link})=>(
                <li key={id} className='px-6 cursor-pointer capitalize text-gray-100  hover:text-gray-300 hover:bg-orange-700 h-full items-center'>
                  <p className='h-full mt-4'>{link}</p>
                    {/* <Link to={link} smooth duration={400}>{link}</Link> */}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Navbar