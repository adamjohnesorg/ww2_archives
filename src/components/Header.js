import React from 'react'
import wwii_logo from '../imgs/ww2timeline_w.AVIF'

const Header = () =>
{
  return (
    <header>
        <div className='w-full flex flex-row gap-2 p-4 bg-stone-900'>
            <div className='header-left w-3/12 sm:w-2/12 rounded-lg
                            shadow-sm shadow-red-100'></div>
            <div className='sm:hidden header-middle-left w-1/12 rounded-lg
                            shadow-sm shadow-red-100'></div>
            <div className='flex text-center w-4/12 sm:w-8/12 shadow-sm shadow-red-50'>
                <img className='w-full p-4 sm:p-1 bg-stone-800 rounded-sm'
                     src= { wwii_logo }
                     alt='WWII Timeline logo'>
                </img>
            </div>
            <div className='sm:hidden header-middle-right w-1/12 sm:w-auto rounded-lg
                            shadow-sm shadow-red-100'></div>
            <div className='header-right w-3/12 sm:w-2/12 rounded-lg
                            shadow-sm shadow-red-100'></div>
        </div>
    </header>
  )
}

export default Header