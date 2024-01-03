import React from 'react'

const Introduction = () => 
{
  return (
    <div className='border-2 border-black w-8/12 sm:w-10/12'>
        <div className='flex flex-col justify-center items-center bg-stone-800 bg-opacity-60
                        border-8 border-stone-800 shadow-sm shadow-stone-900 p-4'>
            <div className='w-6/12 sm:w-auto p-8 sm:p-6'>
                <h1 className='font-roboto text-center text-gray-200 text-6xl sm:text-4xl shadow-text'>
                    What is WWII Timeline?
                </h1>
            </div>
            <div className='w-8/12 sm:w-9/12'>
                <p className='text-white font-roboto_condensed font-light text-2xl sm:text-lg text-center'>
                    The goal of WWII Timeline is to attempt to convey chronological World War II
                    information in such a way that our audience can easily understand it.
                </p>
                <br></br>
                <p className='text-white font-roboto_condensed font-light text-2xl sm:text-lg text-center'>
                    In-depth information regarding the war can be found by clicking any of the years 
                    on the ribbon at the top; additionally, a brief timeline overview is illustrated
                    below.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Introduction