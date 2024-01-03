import React from 'react'

const MiddleSegment = () => {
  return (
    <div className='flex flex-row w-full items-center justify-center gap-8'>
        <div className='w-5/12 p-2'></div>
        <div className='flex flex-col items-center w-1/12 sm:w-2/12'>
            <div className='h-20 w-3/12 sm:w-11/12 bg-gray-300 border-2 border-black shadow-sm
                            shadow-white border-t-transparent border-b-transparent'>
            </div>
        </div>
        <div className='w-5/12 p-2'></div>
    </div>
  )
}

export default MiddleSegment
