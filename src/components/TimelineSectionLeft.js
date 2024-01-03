import React from 'react'

const TimelineSectionLeft = ({ title, timelineText, year, isYearNeeded, chronNum, date, roundBottom }) => 
{
  return (
        <div className='flex flex-row w-full justify-center items-center gap-8'>
            <div className= 'flex justify-end w-5/12 p-2'>
                <div className='bg-stone-800 w-9/12 text-center p-2 border border-white'>
                    <span className='timeline-text'>{ timelineText }</span>
                </div>
            </div>
            <div className='flex flex-col w-1/12 items-center'>
                { isYearNeeded ? 
                    <div className='bg-black bg-opacity-70 border border-white p-2 mt-2 mb-2'>
                        <span className='timeline-text'>{ year }</span>
                    </div> : 
                    <div className='timeline-h w-3/12 sm:w-full bg-gray-300 border-2 border-black shadow-sm
                                    border-b-transparent shadow-white'>
                    </div>
                }
                <div className='flex items-center justify-center h-16 w-16 rounded-full 
                                bg-gray-300 border-2 border-black text-2xl
                                font-roboto font-bold shadow-text'>{ chronNum }             
                </div>
                { !roundBottom ?
                    <div className='timeline-h w-3/12 sm:w-full bg-gray-300 border-2 border-black shadow-sm
                                    shadow-white rounded-t-full border-b-transparent'>
                    </div> : 
                    <div className='timeline-h w-3/12 sm:w-full bg-gray-300 border-2 border-black shadow-sm
                                    shadow-white rounded-b-full'>
                    </div>
                }
            </div>
            <div className='flex flex-col items-center w-5/12 p-2 gap-2'>
                <div className='bg-stone-800 w-8/12 sm:w-full text-center p-2 border border-black'>
                    <span className='timeline-text text-3xl sm:text-xl'>{ title }</span>
                </div>
                <div className='bg-stone-800 w-4/12 sm:w-11/12 text-center p-2 border border-black'>
                    <span className='timeline-text'>{ date }</span>
                </div>
            </div>
        </div>
  )
}

export default TimelineSectionLeft