import React from 'react'

const Timeline = () =>
{
  return (
    <div className='flex flex-col bg-stone-800 border border-black'>
        <div className='h-4 bg-black bg-opacity-40 shadow-inner shadow-stone-800'></div>
        <div className='flex flex-row'>
            <div className='timeline-years hover:cursor-pointer sm:p-1'>
                <button className='w-full'>
                    <span className='font-roboto_condensed text-4xl sm:text-xl text-white
                                     shadow-text'>1939</span>
                </button>
            </div>
            <div className='timeline-years hover:cursor-pointer sm:p-1'>
                <button className='w-full'>
                    <span className='font-roboto_condensed text-4xl sm:text-xl text-white
                                     shadow-text'>1940</span>
                </button>
            </div>
            <div className='timeline-years hover:cursor-pointer sm:p-1'>
                <button className='w-full'>
                    <span className='font-roboto_condensed text-4xl sm:text-xl text-white
                                     shadow-text'>1941</span>
                </button>
            </div>
            <div className='timeline-years hover:cursor-pointer sm:p-1'>
                <button className='w-full'>
                    <span className='font-roboto_condensed text-4xl sm:text-xl text-white
                                     shadow-text'>1942</span>
                </button>
            </div>
            <div className='timeline-years hover:cursor-pointer sm:p-1'>
                <button className='w-full'>
                    <span className='font-roboto_condensed text-4xl sm:text-xl text-white
                                     shadow-text'>1943</span>
                </button>
            </div>
            <div className='timeline-years hover:cursor-pointer sm:p-1'>
                <button className='w-full'>
                    <span className='font-roboto_condensed text-4xl sm:text-xl text-white
                                     shadow-text'>1944</span>
                </button>
            </div>
            <div className='timeline-years hover:cursor-pointer sm:p-1'>
                <button className='w-full'>
                    <span className='font-roboto_condensed text-4xl sm:text-xl text-white
                                     shadow-text'>1945</span>
                </button>
            </div>
        </div>
        <div className='h-4 bg-black bg-opacity-40 shadow-inner shadow-stone-800'></div>
    </div>
  )
}

export default Timeline