import React from 'react'
import MiddleSegment from './MiddleSegment'
import TimelineSectionLeft from './TimelineSectionLeft'
import TimelineSectionRight from './TimelineSectionRight'

const VerticalTimeline = () =>
{
  return (
    <div className='flex flex-col w-11/12 justify-center items-center'>
        <div className='bg-poland-germany w-full border-2 border-black'>
            <TimelineSectionRight 
                title={ 'Germany Invades Poland' }
                timelineText={ 'Officially marking the beginning of WWII, Germany declares invasion and marches into Poland.'}
                year={ 1939 }
                isYearNeeded={ true }
                chronNum={ 1 }
                date={ 'September 1, 1939' }
                roundBottom={ false }
            />
        </div>
        {/* gap */}
        <MiddleSegment />
        {/* gap */}
        <div className='bg-poland-soviet w-full border-2 border-black'>
            <TimelineSectionRight
                title={ 'The Soviet Union Invades Poland' }
                timelineText={ 'The Soviet Union declares war on Poland and begins to invade from the East.' }
                year={ 1939 }
                isYearNeeded={ false }
                chronNum={ 2 }
                date={ 'September 17, 1939' }
                roundBottom={ false }
            />
        </div>
        {/* gap */}
        <MiddleSegment />
        {/* gap */}
        <div className='w-full border-2 border-black'>
            <TimelineSectionRight
                title={ 'Poland Surrenders' }
                timelineText={ 'Poland surrenders to Germany and the Soviet Union.' }
                year={ 1939 }
                isYearNeeded={ false }
                chronNum={ 3 }
                date={ 'October 6, 1939' }
                roundBottom={ false }
            />
        </div>
        {/* gap */}
        <MiddleSegment />
        {/* gap */}
        <div className='w-full border-2 border-black'>
            <TimelineSectionRight 
                title={ 'Germany Invades Norway' }
                timelineText={ 'Germany invades Norway to take control of the iron supply in the nordic region.'}
                year={ 1940 }
                isYearNeeded={ true }
                chronNum={ 4 }
                date={ 'April 9, 1940' }
                roundBottom={ false }
            />
        </div>
        {/* gap */}
        <MiddleSegment />
        {/* gap */}
        <div className='w-full border-2 border-black'>
            <TimelineSectionRight 
                title={ 'Germany Invades France' }
                timelineText={ 'After already invading and successfully taking over the Netherlands and Belgium, Germany blitzes into France.'}
                year={ 1940 }
                isYearNeeded={ false }
                chronNum={ 5 }
                date={ 'May 10, 1940' }
                roundBottom={ false }
            />
        </div>
    </div>
  )
}

export default VerticalTimeline